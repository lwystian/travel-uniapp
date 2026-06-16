<template>
  <view class="user-center">
    <UserProfileHeader
      :is-login="authStore.isLogin"
      :loading="loginLoading"
      :user="currentUser"
      @login="handleLogin"
    />

    <UserAssetPanel :items="assetItems" @select="handleAssetSelect" />
    <UserOrderPanel :items="orderEntries" @more="goOrders('all')" @select="goOrders" />
    <UserServiceCard @contact="openCustomerService" />
    <UserMenuPanel title="常用服务" :items="serviceMenus" @select="handleMenuSelect" />
    <UserMenuPanel title="账号管理" :items="accountMenus" @select="handleMenuSelect" />
  </view>
</template>

<script setup lang="ts">
import { onShow } from '@dcloudio/uni-app'
import { computed, ref } from 'vue'
import { platformAdapter } from '@/adapters/platform'
import { ROUTES } from '@/constants/routes'
import { orderApi } from '@/services/modules/order'
import { useAuthStore, useFavoriteStore, useUserStore } from '@/stores'
import type { OrderStatusSummary } from '@/types/order'
import { router } from '@/utils/router'
import UserAssetPanel, { type UserAssetItem } from './components/UserAssetPanel.vue'
import UserMenuPanel, { type UserMenuItem } from './components/UserMenuPanel.vue'
import UserOrderPanel, { type UserOrderEntry } from './components/UserOrderPanel.vue'
import UserProfileHeader from './components/UserProfileHeader.vue'
import UserServiceCard from './components/UserServiceCard.vue'

const authStore = useAuthStore()
const userStore = useUserStore()
const favoriteStore = useFavoriteStore()
const loginLoading = ref(false)
const orderSummary = ref<OrderStatusSummary[]>([])

const currentUser = computed(() => userStore.profile || authStore.userInfo)

const summaryMap = computed(() =>
  orderSummary.value.reduce<Record<string, number>>((map, item) => {
    map[item.tab] = item.count
    return map
  }, {})
)

const assetItems = computed<UserAssetItem[]>(() => [
  {
    key: 'points',
    label: '积分',
    value: authStore.isLogin ? currentUser.value?.points || 0 : '--'
  },
  {
    key: 'coupon',
    label: '优惠券',
    value: authStore.isLogin ? userStore.availableCoupons.length : '--'
  },
  {
    key: 'favorite',
    label: '收藏',
    value: favoriteStore.favoriteCount
  },
  {
    key: 'traveler',
    label: '出行人',
    value: authStore.isLogin ? userStore.travelers.length : '--'
  }
])

const orderEntries = computed<UserOrderEntry[]>(() => [
  {
    key: 'pending_payment',
    label: '待付款',
    icon: '付',
    count: summaryMap.value.pending_payment || 0
  },
  {
    key: 'pending_use',
    label: '待使用',
    icon: '用',
    count: summaryMap.value.pending_use || 0
  },
  {
    key: 'pending_reservation',
    label: '待预约',
    icon: '约',
    count: summaryMap.value.pending_reservation || 0
  },
  {
    key: 'completed',
    label: '已完成',
    icon: '成',
    count: summaryMap.value.completed || 0
  },
  {
    key: 'refund_after_sales',
    label: '售后',
    icon: '售',
    count: summaryMap.value.refund_after_sales || 0
  }
])

const serviceMenus = computed<UserMenuItem[]>(() => [
  {
    key: 'profile',
    label: '个人资料',
    icon: '资',
    desc: '昵称、手机号、城市等资料'
  },
  {
    key: 'travelers',
    label: '常用出行人',
    icon: '人',
    desc: '管理报名人证件与联系方式',
    extra: authStore.isLogin ? `${userStore.travelers.length}人` : ''
  },
  {
    key: 'coupons',
    label: '我的优惠券',
    icon: '券',
    desc: '查看可用券、过期券和使用规则',
    extra: authStore.isLogin ? `${userStore.availableCoupons.length}张可用` : ''
  },
  {
    key: 'favorite',
    label: '我的收藏',
    icon: '藏',
    desc: '收藏线路、目的地和攻略内容',
    extra: `${favoriteStore.favoriteCount}`
  }
])

const accountMenus = computed<UserMenuItem[]>(() => [
  {
    key: 'subscribe',
    label: '订阅消息',
    icon: '订',
    desc: '出行提醒、订单状态和优惠通知'
  },
  {
    key: 'phone',
    label: '绑定手机号',
    icon: '机',
    desc: currentUser.value?.phone ? '已绑定手机号' : '用于接收出行通知'
  },
  {
    key: 'logout',
    label: authStore.isLogin ? '退出登录' : '登录账号',
    icon: authStore.isLogin ? '退' : '登',
    desc: authStore.isLogin ? '清除当前登录状态' : '使用微信或手机号登录'
  }
])

onShow(async () => {
  await loadPublicData()
  if (!authStore.isLogin) return
  await loadUserData()
})

async function loadPublicData() {
  orderSummary.value = await orderApi.getOrderStatusSummary()
}

async function loadUserData() {
  await Promise.all([
    userStore.fetchProfile(),
    userStore.fetchTravelers(),
    userStore.fetchCoupons()
  ])
}

async function handleLogin() {
  if (loginLoading.value) return
  loginLoading.value = true
  try {
    const result = await authStore.login()
    userStore.profile = result.userInfo
    await loadUserData()
    uni.showToast({ title: '登录成功', icon: 'success' })
  } catch (error) {
    uni.showToast({ title: '登录失败，请稍后重试', icon: 'none' })
  } finally {
    loginLoading.value = false
  }
}

function requireLoginAction(callback: () => void) {
  if (authStore.isLogin) {
    callback()
    return
  }
  router.navigateTo(ROUTES.AUTH_LOGIN)
}

function goOrders(tab: string) {
  router.navigateTo(ROUTES.ORDER_LIST, tab === 'all' ? undefined : { tab }, { auth: true })
}

function handleAssetSelect(key: string) {
  if (key === 'coupon') {
    requireLoginAction(() => router.navigateTo(ROUTES.USER_COUPONS, undefined, { auth: true }))
    return
  }
  if (key === 'traveler') {
    requireLoginAction(() => router.navigateTo(ROUTES.USER_TRAVELERS, undefined, { auth: true }))
    return
  }
  if (key === 'favorite') {
    uni.showToast({ title: '收藏列表待接入', icon: 'none' })
    return
  }
  uni.showToast({ title: '积分体系待接入', icon: 'none' })
}

function handleMenuSelect(key: string) {
  const routeMap: Record<string, () => void> = {
    profile: () => router.navigateTo(ROUTES.USER_PROFILE, undefined, { auth: true }),
    travelers: () => router.navigateTo(ROUTES.USER_TRAVELERS, undefined, { auth: true }),
    coupons: () => router.navigateTo(ROUTES.USER_COUPONS, undefined, { auth: true }),
    favorite: () => uni.showToast({ title: '收藏列表待接入', icon: 'none' }),
    subscribe: requestSubscribe,
    phone: () => uni.showToast({ title: '手机号授权流程待接入', icon: 'none' }),
    logout: handleLogout
  }
  routeMap[key]?.()
}

function requestSubscribe() {
  platformAdapter.requestSubscribeMessage(['ORDER_STATUS_TEMPLATE_ID'])
  uni.showToast({ title: '订阅能力待配置模板', icon: 'none' })
}

function openCustomerService() {
  platformAdapter.openCustomerService()
}

async function handleLogout() {
  if (!authStore.isLogin) {
    handleLogin()
    return
  }
  await authStore.logout()
  userStore.reset()
  uni.showToast({ title: '已退出登录', icon: 'none' })
}
</script>

<style lang="scss" scoped>
.user-center {
  min-height: 100vh;
  padding-bottom: calc(68rpx + env(safe-area-inset-bottom));
  background: #f3f6fb;
}
</style>

<template>
  <view class="order-page">
    <OrderSearchPanel v-model="keyword" @search="handleSearch" />

    <view class="order-page__tabs">
      <OrderStatusTabs :active="activeTab" :tabs="summaryTabs" @change="handleTabChange" />
    </view>

    <view class="order-page__content">
      <view v-if="orders.length" class="order-page__list">
        <OrderCard
          v-for="order in orders"
          :key="order.id"
          :order="order"
          @action="handleOrderAction"
          @select="goDetail"
        />
      </view>

      <OrderEmptyState v-else-if="!loading" @reset="resetFilters" />
      <BaseLoading v-if="loading" text="订单加载中" />
      <view v-else-if="orders.length && finished" class="order-page__finished">没有更多订单了</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onLoad, onPullDownRefresh, onReachBottom, onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'
import BaseLoading from '@/components/base/BaseLoading/index.vue'
import { ROUTES } from '@/constants/routes'
import { useAuthGuard } from '@/hooks/useAuthGuard'
import { usePagination } from '@/hooks/usePagination'
import { orderApi } from '@/services/modules/order'
import type { Order, OrderListParams, OrderListTab, OrderStatusSummary } from '@/types/order'
import { router } from '@/utils/router'
import OrderCard from './components/OrderCard.vue'
import OrderEmptyState from './components/OrderEmptyState.vue'
import OrderSearchPanel from './components/OrderSearchPanel.vue'
import OrderStatusTabs from './components/OrderStatusTabs.vue'

type OrderActionKey = 'pay' | 'appoint' | 'use' | 'detail' | 'review' | 'refund'

const DEFAULT_TABS: OrderStatusSummary[] = [
  { tab: 'all', label: '全部', count: 0 },
  { tab: 'pending_payment', label: '待付款', count: 0 },
  { tab: 'pending_use', label: '待使用', count: 0 },
  { tab: 'pending_reservation', label: '待预约', count: 0 },
  { tab: 'completed', label: '已完成', count: 0 },
  { tab: 'refund_after_sales', label: '退款/售后', count: 0 }
]

const keyword = ref('')
const activeTab = ref<OrderListTab>('all')
const loaded = ref(false)
const summaryTabs = ref<OrderStatusSummary[]>(DEFAULT_TABS)
const { requireLogin } = useAuthGuard()

const {
  list: orders,
  loading,
  finished,
  reload,
  loadMore,
  refresh
} = usePagination<Order, OrderListParams>({
  pageSize: 6,
  defaultParams: {
    tab: activeTab.value,
    keyword: keyword.value
  },
  service: orderApi.getOrderList
})

onLoad((query) => {
  const tab = String(query?.tab || 'all') as OrderListTab
  activeTab.value = DEFAULT_TABS.some((item) => item.tab === tab) ? tab : 'all'
})

onShow(async () => {
  if (!requireLogin(ROUTES.ORDER_LIST)) return
  if (loaded.value) return
  await initPage()
})

onPullDownRefresh(async () => {
  await Promise.all([loadSummary(), refresh()])
})

onReachBottom(() => {
  loadMore()
})

async function initPage() {
  await Promise.all([loadSummary(), reload(buildQuery())])
  loaded.value = true
}

async function loadSummary() {
  summaryTabs.value = await orderApi.getOrderStatusSummary()
}

function buildQuery(): OrderListParams {
  return {
    tab: activeTab.value,
    keyword: keyword.value.trim()
  }
}

function handleSearch() {
  reload(buildQuery())
}

function handleTabChange(tab: OrderListTab) {
  if (activeTab.value === tab) return
  activeTab.value = tab
  reload(buildQuery())
}

function resetFilters() {
  keyword.value = ''
  activeTab.value = 'all'
  reload(buildQuery())
}

function goDetail(order: Order) {
  router.navigateTo(ROUTES.ORDER_DETAIL, { id: order.id }, { auth: true })
}

function handleOrderAction(action: OrderActionKey, order: Order) {
  if (action === 'pay') {
    router.navigateTo(
      ROUTES.PAYMENT_RESULT,
      { orderId: order.id, status: 'pending' },
      { auth: true }
    )
    return
  }

  if (action === 'appoint' || action === 'use' || action === 'review' || action === 'refund') {
    uni.showToast({
      title: getActionToast(action),
      icon: 'none'
    })
    return
  }

  goDetail(order)
}

function getActionToast(action: OrderActionKey) {
  const textMap: Record<OrderActionKey, string> = {
    pay: '去支付',
    appoint: '预约能力待接入',
    use: '凭证能力待接入',
    detail: '查看详情',
    review: '评价能力待接入',
    refund: '售后进度待接入'
  }
  return textMap[action]
}
</script>

<style lang="scss" scoped>
.order-page {
  min-height: 100vh;
  padding-bottom: calc(68rpx + env(safe-area-inset-bottom));
  background: #f4f5fa;
}

.order-page__tabs {
  position: sticky;
  top: 0;
  z-index: 4;
  padding: 0;
  background: #fff;
  border-bottom: 1rpx solid #eef0f6;
}

.order-page__content {
  padding-bottom: $space-lg;
}

.order-page__list {
  display: flex;
  flex-direction: column;
  gap: $space-md;
  padding: $space-sm $space-md 0;
}

.order-page__finished {
  padding: $space-lg 0;
  color: #98a2b3;
  font-size: $font-size-sm;
  text-align: center;
}
</style>

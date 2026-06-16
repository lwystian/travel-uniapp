<template>
  <view class="xisha-page">
    <template v-if="pageData">
      <view class="xisha-page__hero">
        <view class="xisha-page__title">西沙游轮</view>
        <view class="xisha-page__subtitle">船期、航线、特价票与攻略一站查询</view>
        <XishaQueryPanel :preset="pageData.queryPreset" @search="handleSearch" />
        <XishaShortcutGrid :items="pageData.shortcuts" @select="handleShortcut" />
      </view>

      <XishaTicketSection
        :banner="pageData.saleBanner"
        :tickets="specialTickets"
        @banner="handleBanner"
        @select="goTicketDetail"
      />

      <XishaActivityBanner :banners="pageData.activityBanners" @select="handleBanner" />

      <XishaRecommendList
        title="推荐行程"
        subtitle="精选船期、航线方向与可订价格"
        :tickets="recommendedTickets"
        :limit="5"
        @select="goTicketDetail"
        @more="goMoreTours"
      />

      <XishaNewsList :items="pageData.news" @select="goNewsDetail" @more="goNewsMore" />

      <XishaBottomNav active="xisha" @select="handleBottomNav" />
    </template>

    <BaseLoading v-else text="西沙游加载中" />
  </view>
</template>

<script setup lang="ts">
import { onLoad, onPullDownRefresh } from '@dcloudio/uni-app'
import { ref } from 'vue'
import BaseLoading from '@/components/base/BaseLoading/index.vue'
import { ROUTES } from '@/constants/routes'
import { xishaApi } from '@/services/modules/xisha'
import type {
  XishaActivityBanner as XishaActivityBannerData,
  XishaCruiseTicket,
  XishaHomeData,
  XishaNewsItem,
  XishaShortcut,
  XishaTicketSearchParams
} from '@/types/xisha'
import { router } from '@/utils/router'
import XishaActivityBanner from './components/XishaActivityBanner.vue'
import XishaBottomNav from './components/XishaBottomNav.vue'
import type { XishaBottomNavKey } from './components/XishaBottomNav.vue'
import XishaNewsList from './components/XishaNewsList.vue'
import XishaQueryPanel from './components/XishaQueryPanel.vue'
import XishaRecommendList from './components/XishaRecommendList.vue'
import XishaShortcutGrid from './components/XishaShortcutGrid.vue'
import XishaTicketSection from './components/XishaTicketSection.vue'

const pageData = ref<XishaHomeData>()
const specialTickets = ref<XishaCruiseTicket[]>([])
const recommendedTickets = ref<XishaCruiseTicket[]>([])

onLoad(() => {
  loadPage()
})

onPullDownRefresh(async () => {
  await loadPage()
  uni.stopPullDownRefresh()
})

async function loadPage() {
  pageData.value = await xishaApi.getHomeData()
  specialTickets.value = pageData.value.specialTickets
  recommendedTickets.value = pageData.value.recommendedTickets
}

async function handleSearch(params: XishaTicketSearchParams) {
  const tickets = await xishaApi.searchTickets(params)
  const splitIndex = Math.min(3, tickets.length)
  specialTickets.value = tickets.slice(0, splitIndex)
  recommendedTickets.value = tickets.slice(splitIndex)
  uni.showToast({
    title: tickets.length ? `找到${tickets.length}个可订船期` : '暂无匹配船期',
    icon: 'none'
  })
}

function handleShortcut(item: XishaShortcut) {
  if (item.actionType === 'order') {
    router.navigateTo(ROUTES.ORDER_LIST, undefined, { auth: true })
    return
  }

  if (item.actionType === 'guide') {
    router.navigateTo(ROUTES.SEARCH_RESULT, { keyword: '三峡游轮攻略' })
    return
  }

  if (item.actionType === 'brand') {
    router.navigateTo(ROUTES.SEARCH_RESULT, { keyword: '游轮品牌' })
    return
  }

  router.navigateTo(ROUTES.SEARCH_RESULT, { keyword: '船期表' })
}

function handleBanner(banner: XishaActivityBannerData) {
  if (banner.tourId) {
    router.navigateTo(ROUTES.TOUR_DETAIL, { id: banner.tourId })
    return
  }
  router.navigateTo(ROUTES.SEARCH_RESULT, { keyword: banner.title })
}

function goTicketDetail(ticket: XishaCruiseTicket) {
  router.navigateTo(ROUTES.TOUR_DETAIL, { id: ticket.tourId, ticketId: ticket.id })
}

function goMoreTours() {
  router.navigateTo(ROUTES.SEARCH_RESULT, { keyword: '西沙游轮' })
}

function goNewsDetail(item: XishaNewsItem) {
  router.navigateTo(ROUTES.ARTICLE_DETAIL, { id: item.articleId })
}

function goNewsMore() {
  router.navigateTo(ROUTES.ARTICLE_LIST)
}

function handleBottomNav(key: XishaBottomNavKey) {
  if (key === 'xisha') {
    return
  }

  if (key === 'compare') {
    router.navigateTo(ROUTES.CRUISE_COMPARE)
    return
  }

  if (key === 'order') {
    router.navigateTo(ROUTES.ORDER_LIST, undefined, { auth: true })
  }
}
</script>

<style lang="scss" scoped>
.xisha-page {
  min-height: 100vh;
  padding-bottom: calc(128rpx + env(safe-area-inset-bottom));
  background: #f4f6fb;
}

.xisha-page__hero {
  padding: 26rpx $space-md 24rpx;
  background:
    radial-gradient(circle at 12% 4%, rgba(255, 255, 255, 0.9) 0, transparent 150rpx),
    linear-gradient(180deg, #e7f6ff 0%, #f7f9ff 100%);
}

.xisha-page__title {
  color: #132131;
  font-size: 36rpx;
  font-weight: 900;
}

.xisha-page__subtitle {
  margin: 8rpx 0 22rpx;
  color: #657186;
  font-size: 24rpx;
}
</style>

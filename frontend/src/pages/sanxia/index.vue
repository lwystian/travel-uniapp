<template>
  <view class="sanxia-page">
    <template v-if="pageData">
      <view class="sanxia-page__hero">
        <view class="sanxia-page__title">三峡游轮</view>
        <view class="sanxia-page__subtitle">船期、航线、特价票与攻略一站查询</view>
        <SanxiaQueryPanel :preset="pageData.queryPreset" @search="handleSearch" />
        <SanxiaShortcutGrid :items="pageData.shortcuts" @select="handleShortcut" />
      </view>

      <SanxiaTicketSection
        :banner="pageData.saleBanner"
        :tickets="specialTickets"
        @banner="handleBanner"
        @select="goTicketDetail"
      />

      <SanxiaActivityBanner :banners="pageData.activityBanners" @select="handleBanner" />

      <SanxiaRecommendList
        title="推荐行程"
        subtitle="精选船期、航线方向与可订价格"
        :tickets="recommendedTickets"
        :limit="5"
        @select="goTicketDetail"
        @more="goMoreTours"
      />

      <SanxiaNewsList :items="pageData.news" @select="goNewsDetail" @more="goNewsMore" />

      <SanxiaBottomNav active="sanxia" @select="handleBottomNav" />
    </template>

    <BaseLoading v-else text="三峡游加载中" />
  </view>
</template>

<script setup lang="ts">
import { onLoad, onPullDownRefresh } from '@dcloudio/uni-app'
import { ref } from 'vue'
import BaseLoading from '@/components/base/BaseLoading/index.vue'
import { ROUTES } from '@/constants/routes'
import { sanxiaApi } from '@/services/modules/sanxia'
import type {
  SanxiaActivityBanner as SanxiaActivityBannerData,
  SanxiaCruiseTicket,
  SanxiaHomeData,
  SanxiaNewsItem,
  SanxiaShortcut,
  SanxiaTicketSearchParams
} from '@/types/sanxia'
import { router } from '@/utils/router'
import SanxiaActivityBanner from './components/SanxiaActivityBanner.vue'
import SanxiaBottomNav from './components/SanxiaBottomNav.vue'
import type { SanxiaBottomNavKey } from './components/SanxiaBottomNav.vue'
import SanxiaNewsList from './components/SanxiaNewsList.vue'
import SanxiaQueryPanel from './components/SanxiaQueryPanel.vue'
import SanxiaRecommendList from './components/SanxiaRecommendList.vue'
import SanxiaShortcutGrid from './components/SanxiaShortcutGrid.vue'
import SanxiaTicketSection from './components/SanxiaTicketSection.vue'

const pageData = ref<SanxiaHomeData>()
const specialTickets = ref<SanxiaCruiseTicket[]>([])
const recommendedTickets = ref<SanxiaCruiseTicket[]>([])

onLoad(() => {
  loadPage()
})

onPullDownRefresh(async () => {
  await loadPage()
  uni.stopPullDownRefresh()
})

async function loadPage() {
  pageData.value = await sanxiaApi.getHomeData()
  specialTickets.value = pageData.value.specialTickets
  recommendedTickets.value = pageData.value.recommendedTickets
}

async function handleSearch(params: SanxiaTicketSearchParams) {
  const tickets = await sanxiaApi.searchTickets(params)
  const splitIndex = Math.min(3, tickets.length)
  specialTickets.value = tickets.slice(0, splitIndex)
  recommendedTickets.value = tickets.slice(splitIndex)
  uni.showToast({
    title: tickets.length ? `找到${tickets.length}个可订船期` : '暂无匹配船期',
    icon: 'none'
  })
}

function handleShortcut(item: SanxiaShortcut) {
  if (item.actionType === 'order') {
    router.navigateTo(ROUTES.ORDER_LIST, undefined, { auth: true })
    return
  }

  if (item.actionType === 'guide') {
    router.navigateTo(ROUTES.SEARCH_RESULT, { keyword: '三峡游轮攻略' })
    return
  }

  if (item.actionType === 'brand') {
    router.navigateTo(ROUTES.SEARCH_RESULT, { keyword: '三峡游轮品牌' })
    return
  }

  router.navigateTo(ROUTES.SEARCH_RESULT, { keyword: '三峡船期表' })
}

function handleBanner(banner: SanxiaActivityBannerData) {
  if (banner.tourId) {
    router.navigateTo(ROUTES.TOUR_DETAIL, { id: banner.tourId })
    return
  }
  router.navigateTo(ROUTES.SEARCH_RESULT, { keyword: banner.title })
}

function goTicketDetail(ticket: SanxiaCruiseTicket) {
  router.navigateTo(ROUTES.TOUR_DETAIL, { id: ticket.tourId, ticketId: ticket.id })
}

function goMoreTours() {
  router.navigateTo(ROUTES.SEARCH_RESULT, { keyword: '三峡游轮' })
}

function goNewsDetail(item: SanxiaNewsItem) {
  router.navigateTo(ROUTES.ARTICLE_DETAIL, { id: item.articleId })
}

function goNewsMore() {
  router.navigateTo(ROUTES.ARTICLE_LIST)
}

function handleBottomNav(key: SanxiaBottomNavKey) {
  if (key === 'sanxia') {
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
.sanxia-page {
  min-height: 100vh;
  padding-bottom: calc(128rpx + env(safe-area-inset-bottom));
  background: #f4f6fb;
}

.sanxia-page__hero {
  padding: 26rpx $space-md 24rpx;
  background:
    radial-gradient(circle at 12% 4%, rgba(255, 255, 255, 0.9) 0, transparent 150rpx),
    linear-gradient(180deg, #e7f6ff 0%, #f7f9ff 100%);
}

.sanxia-page__title {
  color: #132131;
  font-size: 36rpx;
  font-weight: 900;
}

.sanxia-page__subtitle {
  margin: 8rpx 0 22rpx;
  color: #657186;
  font-size: 24rpx;
}
</style>

<template>
  <view class="train-page">
    <template v-if="pageData">
      <TrainHero v-model="keyword" :hero="pageData.hero" @search="handleSearch" />

      <TrainNoticeBar :notice="pageData.notice" @select="showNotice" />
      <TrainGuideGrid :items="pageData.guideActions" @select="handleGuide" />
      <TrainAgencyBanner :banner="pageData.agencyBanner" @select="handleAgency" />

      <view class="train-page__series">
        <TrainSeriesSection
          v-for="series in seriesList"
          :key="series.id"
          :series="series"
          @select="goProductDetail"
          @action="refreshSeries"
        />
      </view>
      <BaseEmpty
        v-if="seriesList.length === 0"
        class="train-page__empty"
        title="暂无匹配专列"
        description="换个目的地、车次或出发城市再试试"
      />

      <TrainScenicStory :story="pageData.story" />

      <view class="train-page__footer">
        <text>{{ pageData.serviceText }}</text>
        <text>联系客服</text>
        <text>- 大型团队定制出发支持 -</text>
      </view>

      <TrainCustomerFloat @tap="openCustomer" />
      <TrainTabBar active="home" @select="handleTab" />
    </template>
    <BaseLoading v-else text="旅游专列加载中" />
  </view>
</template>

<script setup lang="ts">
import { onLoad, onPullDownRefresh } from '@dcloudio/uni-app'
import { computed, ref } from 'vue'
import BaseEmpty from '@/components/base/BaseEmpty/index.vue'
import BaseLoading from '@/components/base/BaseLoading/index.vue'
import { platformAdapter } from '@/adapters/platform'
import { ROUTES } from '@/constants/routes'
import { trainApi } from '@/services/modules/train'
import type { TrainGuideAction, TrainHomeData, TrainProduct, TrainSeries } from '@/types/train'
import { router } from '@/utils/router'
import TrainAgencyBanner from './components/TrainAgencyBanner.vue'
import TrainCustomerFloat from './components/TrainCustomerFloat.vue'
import TrainGuideGrid from './components/TrainGuideGrid.vue'
import TrainHero from './components/TrainHero.vue'
import TrainNoticeBar from './components/TrainNoticeBar.vue'
import TrainScenicStory from './components/TrainScenicStory.vue'
import TrainSeriesSection from './components/TrainSeriesSection.vue'
import TrainTabBar from './components/TrainTabBar.vue'
import type { TrainTabBarKey } from './components/TrainTabBar.vue'

const pageData = ref<TrainHomeData>()
const seriesList = ref<TrainSeries[]>([])
const keyword = ref('')

const normalizedKeyword = computed(() => keyword.value.trim())

onLoad(() => {
  loadPage()
})

onPullDownRefresh(async () => {
  await loadPage()
  uni.stopPullDownRefresh()
})

async function loadPage() {
  pageData.value = await trainApi.getHomeData()
  seriesList.value = pageData.value.series
}

function handleSearch() {
  router.navigateTo(ROUTES.TRAIN_SEARCH, { keyword: normalizedKeyword.value })
}

function showNotice() {
  if (!pageData.value) return
  uni.showModal({
    title: pageData.value.notice.title,
    content: pageData.value.notice.detail,
    showCancel: false,
    confirmText: '知道了'
  })
}

function handleGuide(item: TrainGuideAction) {
  const titleMap: Record<TrainGuideAction['actionType'], string> = {
    booking: '预订流程',
    condition: '预订条件',
    carriage: '车票说明',
    refund: '退订说明'
  }
  uni.showModal({
    title: titleMap[item.actionType],
    content: `${item.title}内容将由后端 CMS 配置，当前为前端交互占位。`,
    showCancel: false,
    confirmText: '知道了'
  })
}

function handleAgency() {
  uni.showToast({ title: '代售中心能力待接入', icon: 'none' })
}

async function refreshSeries(series: TrainSeries) {
  const nextSeries = await trainApi.searchSeries({ seriesId: series.id })
  if (nextSeries.length) {
    seriesList.value = seriesList.value.map((item) =>
      item.id === series.id ? nextSeries[0] : item
    )
  }
  uni.showToast({ title: '已刷新余票', icon: 'none' })
}

function goProductDetail(product: TrainProduct) {
  router.navigateTo(ROUTES.TOUR_DETAIL, { id: product.tourId, trainId: product.id })
}

function openCustomer() {
  platformAdapter.openCustomerService()
}

function handleTab(key: TrainTabBarKey) {
  if (key === 'home') {
    router.switchTab(ROUTES.HOME)
    return
  }
  if (key === 'order') {
    router.navigateTo(ROUTES.ORDER_LIST, undefined, { auth: true })
    return
  }
  router.navigateTo(ROUTES.USER_CENTER, undefined, { auth: true })
}
</script>

<style lang="scss" scoped>
.train-page {
  min-height: 100vh;
  padding-bottom: calc(128rpx + env(safe-area-inset-bottom));
  background: #f4f6fb;
}

.train-page__series {
  padding-top: 4rpx;
}

.train-page__empty {
  margin: 0 20rpx 24rpx;
  background: #fff;
  border-radius: 24rpx;
}

.train-page__footer {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
  align-items: center;
  padding: 42rpx 24rpx 34rpx;
  color: #a0a8b4;
  font-size: 22rpx;
  text-align: center;
}
</style>

<template>
  <view class="chongqing-page">
    <template v-if="channelData">
      <ChongqingHeader
        v-model="keyword"
        :title="channelData.title"
        :placeholder="channelData.searchPlaceholder"
        @search="handleSearch"
      />

      <view class="chongqing-page__content">
        <ChongqingSortBar
          :filters="channelData.filters"
          :active="sort"
          @change="handleSortChange"
        />

        <view class="chongqing-page__summary">
          <text>{{ channelData.totalText }}</text>
          <text>已展示{{ list.length }}条线路</text>
        </view>

        <view class="chongqing-page__list">
          <ChongqingTourCard v-for="tour in list" :key="tour.id" :tour="tour" @select="goDetail" />
        </view>

        <BaseLoading v-if="loading" text="线路加载中" />
        <BaseEmpty v-if="!loading && list.length === 0" title="暂无匹配线路" />
        <view v-if="!loading && list.length > 0 && finished" class="chongqing-page__end">
          已经到底了
        </view>
      </view>

      <ChongqingCustomerFloat :text="channelData.customerServiceText" @tap="openCustomer" />
    </template>
    <BaseLoading v-else text="重庆游加载中" />
  </view>
</template>

<script setup lang="ts">
import { onLoad, onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
import { ref } from 'vue'
import BaseEmpty from '@/components/base/BaseEmpty/index.vue'
import BaseLoading from '@/components/base/BaseLoading/index.vue'
import { platformAdapter } from '@/adapters/platform'
import { ROUTES } from '@/constants/routes'
import { usePagination } from '@/hooks/usePagination'
import { chongqingApi } from '@/services/modules/chongqing'
import type {
  ChongqingChannelData,
  ChongqingTourItem,
  ChongqingTourListParams,
  ChongqingTourSort
} from '@/types/chongqing'
import { router } from '@/utils/router'
import ChongqingCustomerFloat from './components/ChongqingCustomerFloat.vue'
import ChongqingHeader from './components/ChongqingHeader.vue'
import ChongqingSortBar from './components/ChongqingSortBar.vue'
import ChongqingTourCard from './components/ChongqingTourCard.vue'

const keyword = ref('')
const sort = ref<ChongqingTourSort>('default')
const channelData = ref<ChongqingChannelData>()

const { list, loading, finished, reload, loadMore } = usePagination<
  ChongqingTourItem,
  ChongqingTourListParams
>({
  service: chongqingApi.getTourList,
  pageSize: 10,
  defaultParams: {
    sort: sort.value
  }
})

onLoad(async () => {
  channelData.value = await chongqingApi.getChannelData()
  keyword.value = channelData.value.defaultKeyword || ''
  reload(buildParams())
})

onPullDownRefresh(async () => {
  await reload(buildParams())
  uni.stopPullDownRefresh()
})

onReachBottom(() => {
  loadMore()
})

function buildParams(): ChongqingTourListParams {
  return {
    keyword: keyword.value,
    sort: sort.value
  }
}

function handleSearch() {
  reload(buildParams())
}

function handleSortChange(value: ChongqingTourSort) {
  if (value === 'price_asc' && (sort.value === 'price_asc' || sort.value === 'price_desc')) {
    sort.value = sort.value === 'price_asc' ? 'price_desc' : 'price_asc'
  } else {
    sort.value = value
  }
  reload(buildParams())
}

function goDetail(tour: ChongqingTourItem) {
  router.navigateTo(ROUTES.TOUR_DETAIL, { id: tour.tourId })
}

function openCustomer() {
  platformAdapter.openCustomerService()
}
</script>

<style lang="scss" scoped>
.chongqing-page {
  min-height: 100vh;
  padding-bottom: calc(36rpx + env(safe-area-inset-bottom));
  background:
    linear-gradient(180deg, rgba(255, 226, 220, 0.78) 0, rgba(246, 247, 251, 0) 420rpx), #f3f5fa;
}

.chongqing-page__content {
  position: relative;
  z-index: 2;
  margin-top: -2rpx;
}

.chongqing-page__summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24rpx 18rpx;
  color: #8a94a6;
  font-size: 22rpx;
  background: #fff;
}

.chongqing-page__list {
  display: flex;
  flex-direction: column;
  gap: 18rpx;
  padding: 0 20rpx 24rpx;
}

.chongqing-page__end {
  padding: 8rpx 0 34rpx;
  color: #a2a9b5;
  font-size: 22rpx;
  text-align: center;
}
</style>

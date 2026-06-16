<template>
  <view class="train-search-page">
    <TrainSearchHeader
      v-model="keyword"
      placeholder="请输入专列名称、目的地或出发地"
      @search="handleSearch"
    />

    <view class="train-search-page__content">
      <TrainSearchSortBar :active="sort" @change="handleSortChange" />

      <view v-if="!loading" class="train-search-page__summary">
        <text>{{ summaryText }}</text>
        <text v-if="searchedKeyword">关键词：{{ searchedKeyword }}</text>
      </view>

      <view class="train-search-page__list">
        <TrainSearchProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @select="goDetail"
        />
      </view>

      <BaseLoading v-if="loading" text="专列搜索中" />
      <BaseEmpty
        v-if="!loading && products.length === 0"
        title="暂无匹配专列"
        description="可以尝试搜索新疆、熊猫专列、成都号等关键词"
      />
    </view>

    <TrainCustomerFloat @tap="openCustomer" />
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
import type { TrainProduct, TrainSearchSort } from '@/types/train'
import { router } from '@/utils/router'
import TrainCustomerFloat from './components/TrainCustomerFloat.vue'
import TrainSearchHeader from './components/TrainSearchHeader.vue'
import TrainSearchProductCard from './components/TrainSearchProductCard.vue'
import TrainSearchSortBar from './components/TrainSearchSortBar.vue'

const keyword = ref('')
const searchedKeyword = ref('')
const sort = ref<TrainSearchSort>('default')
const products = ref<TrainProduct[]>([])
const total = ref(0)
const loading = ref(false)

const summaryText = computed(() =>
  total.value > 0 ? `共找到${total.value}条旅游专列` : '没有找到符合条件的旅游专列'
)

onLoad((options) => {
  keyword.value = decodeURIComponent(String(options?.keyword || ''))
  loadProducts()
})

onPullDownRefresh(async () => {
  await loadProducts()
  uni.stopPullDownRefresh()
})

async function loadProducts() {
  loading.value = true
  try {
    const result = await trainApi.searchProducts({
      keyword: keyword.value,
      sort: sort.value,
      page: 1,
      pageSize: 20
    })
    searchedKeyword.value = result.keyword
    products.value = result.list
    total.value = result.total
  } finally {
    loading.value = false
  }
}

function handleSearch() {
  loadProducts()
}

function handleSortChange(value: TrainSearchSort) {
  sort.value = value
  loadProducts()
}

function goDetail(product: TrainProduct) {
  router.navigateTo(ROUTES.TOUR_DETAIL, { id: product.tourId, trainId: product.id })
}

function openCustomer() {
  platformAdapter.openCustomerService()
}
</script>

<style lang="scss" scoped>
.train-search-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #e7f6ff 0, #f4f6fb 360rpx, #f4f6fb 100%);
}

.train-search-page__content {
  position: relative;
  z-index: 2;
  margin-top: -2rpx;
  overflow: hidden;
  background: #f4f6fb;
  border-radius: 28rpx 28rpx 0 0;
}

.train-search-page__summary {
  display: flex;
  justify-content: space-between;
  gap: 18rpx;
  padding: 0 24rpx 18rpx;
  color: #8a94a6;
  font-size: 22rpx;
  background: #fff;
}

.train-search-page__list {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
  padding: 0 20rpx 40rpx;
}
</style>

<template>
  <PageContainer>
    <SearchBar v-model="keyword" placeholder="搜索线路、主题、目的地" @search="handleSearch" />
    <view class="tour-filter">
      <BaseTag text="推荐排序" type="primary" />
      <BaseTag text="价格区间" />
      <BaseTag text="出发城市" />
      <BaseTag text="主题玩法" />
    </view>

    <view class="tour-list">
      <TourCard v-for="tour in list" :key="tour.id" :tour="tour" @click="goDetail" />
    </view>

    <BaseLoading v-if="loading" />
    <BaseEmpty v-if="!loading && list.length === 0" title="暂无线路" />
  </PageContainer>
</template>

<script setup lang="ts">
import { onLoad, onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
import { ref } from 'vue'
import BaseEmpty from '@/components/base/BaseEmpty/index.vue'
import BaseLoading from '@/components/base/BaseLoading/index.vue'
import BaseTag from '@/components/base/BaseTag/index.vue'
import SearchBar from '@/components/business/SearchBar/index.vue'
import TourCard from '@/components/business/TourCard/index.vue'
import PageContainer from '@/components/layout/PageContainer/index.vue'
import { ROUTES } from '@/constants/routes'
import { usePagination } from '@/hooks/usePagination'
import { tourApi } from '@/services/modules/tour'
import type { TourListParams, TourProduct } from '@/types/tour'
import { router } from '@/utils/router'

const keyword = ref('')
const { list, loading, reload, loadMore, refresh } = usePagination<TourProduct, TourListParams>({
  service: tourApi.getTourList,
  pageSize: 10,
  defaultParams: {}
})

onLoad(() => {
  reload()
})

onPullDownRefresh(() => {
  refresh()
})

onReachBottom(() => {
  loadMore()
})

function handleSearch(value: string) {
  reload({ keyword: value })
}

function goDetail(tour: TourProduct) {
  router.navigateTo(ROUTES.TOUR_DETAIL, { id: tour.id })
}
</script>

<style lang="scss" scoped>
.tour-filter {
  display: flex;
  flex-wrap: wrap;
  gap: $space-sm;
  margin: $space-md 0;
}

.tour-list {
  display: flex;
  flex-direction: column;
  gap: $space-md;
}
</style>

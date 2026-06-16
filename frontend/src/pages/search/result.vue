<template>
  <PageContainer>
    <SearchBar v-model="keyword" @search="handleSearch" />
    <view class="search-result__summary">搜索结果：{{ keyword || '全部' }}</view>
    <view class="search-result__list">
      <TourCard v-for="tour in list" :key="tour.id" :tour="tour" @click="goDetail" />
    </view>
    <BaseLoading v-if="loading" />
    <BaseEmpty v-if="!loading && list.length === 0" title="暂无搜索结果" />
  </PageContainer>
</template>

<script setup lang="ts">
import { onLoad, onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
import { ref } from 'vue'
import BaseEmpty from '@/components/base/BaseEmpty/index.vue'
import BaseLoading from '@/components/base/BaseLoading/index.vue'
import SearchBar from '@/components/business/SearchBar/index.vue'
import TourCard from '@/components/business/TourCard/index.vue'
import PageContainer from '@/components/layout/PageContainer/index.vue'
import { ROUTES } from '@/constants/routes'
import { usePagination } from '@/hooks/usePagination'
import { searchApi } from '@/services/modules/search'
import type { SearchFilter } from '@/types/search'
import type { TourProduct } from '@/types/tour'
import { router } from '@/utils/router'

const keyword = ref('')
const { list, loading, reload, loadMore, refresh } = usePagination<TourProduct, SearchFilter>({
  service: searchApi.searchTours,
  defaultParams: {}
})

onLoad((query) => {
  keyword.value = String(query?.keyword || '')
  reload({ keyword: keyword.value })
})

onPullDownRefresh(() => refresh())
onReachBottom(() => loadMore())

function handleSearch(value: string) {
  keyword.value = value
  reload({ keyword: value })
}

function goDetail(tour: TourProduct) {
  router.navigateTo(ROUTES.TOUR_DETAIL, { id: tour.id })
}
</script>

<style lang="scss" scoped>
.search-result__summary {
  margin: $space-md 0;
  color: $color-text-secondary;
  font-size: $font-size-sm;
}

.search-result__list {
  display: flex;
  flex-direction: column;
  gap: $space-md;
}
</style>

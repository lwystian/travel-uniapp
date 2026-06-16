<template>
  <PageContainer>
    <SearchBar v-model="keyword" placeholder="搜索三峡游轮、亲子游、目的地" @search="goResult" />

    <SectionTitle title="热门搜索" />
    <view class="search-tags">
      <BaseTag
        v-for="item in searchStore.hotSearches"
        :key="item"
        :text="item"
        type="primary"
        @tap="goResult(item)"
      />
    </view>

    <SectionTitle
      v-if="searchStore.hasHistory"
      title="历史搜索"
      more-text="清空"
      @more="searchStore.clearHistory"
    />
    <view v-if="searchStore.hasHistory" class="search-tags">
      <BaseTag v-for="item in searchStore.history" :key="item" :text="item" @tap="goResult(item)" />
    </view>
  </PageContainer>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import BaseTag from '@/components/base/BaseTag/index.vue'
import SearchBar from '@/components/business/SearchBar/index.vue'
import SectionTitle from '@/components/business/SectionTitle/index.vue'
import PageContainer from '@/components/layout/PageContainer/index.vue'
import { ROUTES } from '@/constants/routes'
import { useSearchStore } from '@/stores'
import { router } from '@/utils/router'

const keyword = ref('')
const searchStore = useSearchStore()

onLoad(() => {
  searchStore.fetchHotSearches()
})

function goResult(value?: string) {
  const nextKeyword = typeof value === 'string' ? value : keyword.value
  searchStore.setKeyword(nextKeyword)
  router.navigateTo(ROUTES.SEARCH_RESULT, { keyword: nextKeyword })
}
</script>

<style lang="scss" scoped>
.search-tags {
  display: flex;
  flex-wrap: wrap;
  gap: $space-sm;
}
</style>

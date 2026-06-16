<template>
  <PageContainer>
    <SectionTitle title="旅行攻略" subtitle="游记、问答与目的地玩法" />
    <view class="article-list">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
        @click="goDetail"
      />
    </view>
  </PageContainer>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import ArticleCard from '@/components/business/ArticleCard/index.vue'
import SectionTitle from '@/components/business/SectionTitle/index.vue'
import PageContainer from '@/components/layout/PageContainer/index.vue'
import { ROUTES } from '@/constants/routes'
import { articleApi } from '@/services/modules/article'
import type { Article } from '@/types/article'
import { router } from '@/utils/router'

const articles = ref<Article[]>([])

onLoad(async () => {
  const result = await articleApi.getArticleList()
  articles.value = result.list
})

function goDetail(article: Article) {
  router.navigateTo(ROUTES.ARTICLE_DETAIL, { id: article.id })
}
</script>

<style lang="scss" scoped>
.article-list {
  display: flex;
  flex-direction: column;
  gap: $space-md;
}
</style>

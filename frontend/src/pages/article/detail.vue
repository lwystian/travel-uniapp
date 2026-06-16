<template>
  <PageContainer v-if="article">
    <view class="article-detail__cover">
      <BaseImage :src="article.cover" />
    </view>
    <view class="article-detail__panel">
      <view class="article-detail__title">{{ article.title }}</view>
      <view class="article-detail__meta">{{ article.author }} · {{ article.publishedAt }}</view>
      <view class="article-detail__tags">
        <BaseTag v-for="tag in article.tags" :key="tag" :text="tag" type="primary" />
      </view>
      <view class="article-detail__content">{{ article.content }}</view>
    </view>
    <button class="article-detail__button" @tap="share">分享攻略</button>
  </PageContainer>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import BaseImage from '@/components/base/BaseImage/index.vue'
import BaseTag from '@/components/base/BaseTag/index.vue'
import PageContainer from '@/components/layout/PageContainer/index.vue'
import { ROUTES } from '@/constants/routes'
import { useShare } from '@/hooks/useShare'
import { articleApi } from '@/services/modules/article'
import type { Article } from '@/types/article'

const article = ref<Article>()

const { share } = useShare(() => ({
  title: article.value?.title || '旅行攻略',
  path: ROUTES.ARTICLE_DETAIL,
  imageUrl: article.value?.cover,
  query: { id: article.value?.id }
}))

onLoad(async (query) => {
  article.value = await articleApi.getArticleDetail({ id: String(query?.id || 'article-1') })
})
</script>

<style lang="scss" scoped>
.article-detail__cover {
  height: 360rpx;
  margin: -#{$space-md} -#{$space-md} 0;
}

.article-detail__panel {
  @include card;

  margin-top: $space-md;
  padding: $space-md;
}

.article-detail__title {
  font-size: $font-size-xl;
  font-weight: 700;
}

.article-detail__meta,
.article-detail__content {
  margin-top: $space-sm;
  color: $color-text-secondary;
  font-size: $font-size-sm;
}

.article-detail__tags {
  display: flex;
  gap: $space-xs;
  margin-top: $space-md;
}

.article-detail__button {
  height: 80rpx;
  margin-top: $space-lg;
  color: #fff;
  font-size: $font-size-md;
  line-height: 80rpx;
  background: $color-primary;
  border-radius: $radius-sm;
}
</style>

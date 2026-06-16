<template>
  <view class="article-card" @tap="$emit('click', article)">
    <view class="article-card__cover">
      <BaseImage :src="article.cover" />
    </view>
    <view class="article-card__body">
      <view class="article-card__title">{{ article.title }}</view>
      <view class="article-card__summary">{{ article.summary }}</view>
      <view class="article-card__meta">
        <text>{{ article.author }}</text>
        <text>{{ article.viewCount }} 阅读</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import BaseImage from '@/components/base/BaseImage/index.vue'
import type { Article } from '@/types/article'

defineProps<{
  article: Article
}>()

defineEmits<{
  click: [article: Article]
}>()
</script>

<style lang="scss" scoped>
.article-card {
  @include card;

  display: flex;
  gap: $space-md;
  padding: $space-md;
}

.article-card__cover {
  width: 188rpx;
  height: 132rpx;
  overflow: hidden;
  border-radius: $radius-sm;
}

.article-card__body {
  flex: 1;
  min-width: 0;
}

.article-card__title {
  @include text-ellipsis;

  font-size: $font-size-md;
  font-weight: 700;
}

.article-card__summary {
  display: -webkit-box;
  margin-top: 6rpx;
  overflow: hidden;
  color: $color-text-secondary;
  font-size: $font-size-sm;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.article-card__meta {
  display: flex;
  gap: $space-md;
  margin-top: $space-sm;
  color: $color-text-muted;
  font-size: $font-size-xs;
}
</style>

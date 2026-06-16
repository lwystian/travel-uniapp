<template>
  <view class="train-story">
    <view class="train-story__copy">
      <text class="train-story__title">{{ story.title }}</text>
      <text class="train-story__subtitle">{{ story.subtitle }}</text>
      <text class="train-story__desc">{{ story.description }}</text>
    </view>
    <image class="train-story__image" :src="story.image" mode="aspectFill" />
  </view>
</template>

<script setup lang="ts">
import type { TrainScenicStory } from '@/types/train'

defineProps<{
  story: TrainScenicStory
}>()
</script>

<style lang="scss" scoped>
.train-story {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280rpx;
  gap: 22rpx;
  margin: 34rpx 24rpx 0;
  padding: 12rpx 0 28rpx;
}

.train-story__copy {
  min-width: 0;
}

.train-story__title {
  display: block;
  color: #f59e0b;
  font-size: 40rpx;
  font-weight: 900;
  line-height: 1.1;
}

.train-story__subtitle {
  display: block;
  margin-top: 10rpx;
  color: #1f2937;
  font-size: 27rpx;
  font-weight: 900;
  line-height: 1.25;
}

.train-story__desc {
  display: -webkit-box;
  margin-top: 12rpx;
  overflow: hidden;
  color: #667085;
  font-size: 22rpx;
  line-height: 1.45;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

.train-story__image {
  width: 280rpx;
  height: 210rpx;
  border-radius: 14rpx;
}
</style>

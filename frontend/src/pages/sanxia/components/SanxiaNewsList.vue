<template>
  <view class="sanxia-news-list">
    <view class="sanxia-news-list__header">
      <view class="sanxia-news-list__title">游轮资讯</view>
      <view class="sanxia-news-list__more" @tap="$emit('more')">
        更多
        <text class="sanxia-news-list__arrow" />
      </view>
    </view>

    <view class="sanxia-news-list__panel">
      <view
        v-for="item in items"
        :key="item.id"
        class="sanxia-news-list__item"
        @tap="$emit('select', item)"
      >
        <view class="sanxia-news-list__cover">
          <BaseImage :src="item.cover" />
        </view>
        <view class="sanxia-news-list__body">
          <view class="sanxia-news-list__item-title">{{ item.title }}</view>
          <view class="sanxia-news-list__meta">
            <text>{{ item.publishedAt }}</text>
            <text>{{ item.viewCount }}人浏览</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import BaseImage from '@/components/base/BaseImage/index.vue'
import type { SanxiaNewsItem } from '@/types/sanxia'

defineProps<{
  items: SanxiaNewsItem[]
}>()

defineEmits<{
  select: [item: SanxiaNewsItem]
  more: []
}>()
</script>

<style lang="scss" scoped>
.sanxia-news-list {
  padding: 32rpx $space-md calc(42rpx + env(safe-area-inset-bottom));
  background: #f4f6fb;
}

.sanxia-news-list__header {
  @include flex-between;

  margin-bottom: 18rpx;
}

.sanxia-news-list__title {
  color: #151b26;
  font-size: 32rpx;
  font-weight: 900;
}

.sanxia-news-list__more {
  display: flex;
  align-items: center;
  color: #8f96a3;
  font-size: 24rpx;
}

.sanxia-news-list__arrow {
  width: 12rpx;
  height: 12rpx;
  margin-left: 6rpx;
  border-top: 2rpx solid #9aa0a8;
  border-right: 2rpx solid #9aa0a8;
  transform: rotate(45deg);
}

.sanxia-news-list__panel {
  padding: 22rpx 20rpx;
  background: #fff;
  border-radius: 8rpx;
}

.sanxia-news-list__item {
  display: grid;
  grid-template-columns: 210rpx minmax(0, 1fr);
  gap: 24rpx;
  align-items: center;
}

.sanxia-news-list__item + .sanxia-news-list__item {
  margin-top: 24rpx;
}

.sanxia-news-list__cover {
  height: 132rpx;
  overflow: hidden;
  border-radius: 10rpx;
}

.sanxia-news-list__body {
  min-width: 0;
}

.sanxia-news-list__item-title {
  display: -webkit-box;
  height: 76rpx;
  overflow: hidden;
  color: #101828;
  font-size: 28rpx;
  font-weight: 700;
  line-height: 38rpx;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.sanxia-news-list__meta {
  display: flex;
  gap: 24rpx;
  margin-top: 20rpx;
  color: #8f96a3;
  font-size: 22rpx;
}
</style>

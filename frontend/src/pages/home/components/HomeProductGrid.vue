<template>
  <view class="home-product-grid">
    <view
      v-for="item in items"
      :key="item.id"
      class="home-product-grid__card"
      @tap="$emit('select', item)"
    >
      <view class="home-product-grid__cover">
        <BaseImage :src="item.cover" />
        <view class="home-product-grid__shade" />
        <view v-if="item.badge || item.tag" class="home-product-grid__badge">
          {{ item.badge || item.tag }}
        </view>
      </view>
      <view class="home-product-grid__body">
        <view class="home-product-grid__title">{{ item.title }}</view>
        <view v-if="item.subtitle" class="home-product-grid__subtitle">{{ item.subtitle }}</view>
        <view class="home-product-grid__meta">
          <text v-if="item.seedCount">👍 {{ item.seedCount }}人种草</text>
          <text v-else-if="item.price">¥{{ item.price }}起</text>
          <text v-else>精选主题玩法</text>
        </view>
        <view class="home-product-grid__footer">
          <text class="home-product-grid__tag">{{ item.actionText || '查看详情' }}</text>
          <text class="home-product-grid__action">{{ item.price ? '预订' : '了解' }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import BaseImage from '@/components/base/BaseImage/index.vue'
import type { HomeProductFeedItem } from '@/types/home'

defineProps<{
  items: HomeProductFeedItem[]
}>()

defineEmits<{
  select: [target: HomeProductFeedItem]
}>()
</script>

<style lang="scss" scoped>
.home-product-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: $space-sm;
}

.home-product-grid__card {
  overflow: hidden;
  background: #fff;
  border: 1rpx solid rgba(218, 226, 237, 0.9);
  border-radius: 22rpx;
  box-shadow: 0 12rpx 28rpx rgba(17, 31, 52, 0.06);
}

.home-product-grid__cover {
  position: relative;
  height: 232rpx;
  overflow: hidden;
  background: #eef2f6;
}

.home-product-grid__shade {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 110rpx;
  background: linear-gradient(180deg, transparent, rgba(15, 23, 42, 0.5));
}

.home-product-grid__badge {
  position: absolute;
  top: $space-sm;
  right: $space-sm;
  padding: 8rpx 14rpx;
  color: #fff;
  font-size: $font-size-xs;
  font-weight: 900;
  background: rgba(15, 23, 42, 0.52);
  border: 1rpx solid rgba(255, 255, 255, 0.22);
  border-radius: 999rpx;
}

.home-product-grid__body {
  padding: $space-sm;
}

.home-product-grid__title {
  display: -webkit-box;
  height: 72rpx;
  overflow: hidden;
  color: #182230;
  font-size: $font-size-md;
  font-weight: 900;
  line-height: 1.4;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.home-product-grid__subtitle,
.home-product-grid__meta {
  @include text-ellipsis;

  margin-top: $space-xs;
  color: #667085;
  font-size: $font-size-xs;
}

.home-product-grid__meta {
  color: #e5484d;
  font-weight: 900;
}

.home-product-grid__footer {
  @include flex-between;

  gap: $space-xs;
  margin-top: $space-sm;
}

.home-product-grid__tag {
  @include text-ellipsis;

  min-width: 0;
  padding: 6rpx 10rpx;
  color: #2563eb;
  font-size: 20rpx;
  background: #eef4ff;
  border-radius: 999rpx;
}

.home-product-grid__action {
  flex: 0 0 auto;
  padding: 8rpx 12rpx;
  color: #fff;
  font-size: $font-size-sm;
  font-weight: 800;
  background: #182230;
  border-radius: 999rpx;
}
</style>

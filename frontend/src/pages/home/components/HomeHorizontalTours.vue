<template>
  <scroll-view class="home-horizontal-tours" scroll-x>
    <view class="home-horizontal-tours__inner">
      <view
        v-for="item in items"
        :key="item.id"
        class="home-horizontal-tours__card"
        @tap="$emit('select', item)"
      >
        <view class="home-horizontal-tours__cover">
          <BaseImage :src="item.cover" />
          <view class="home-horizontal-tours__cover-tag">{{ item.destination }}</view>
          <view class="home-horizontal-tours__score">{{ item.score }}分</view>
        </view>
        <view class="home-horizontal-tours__body">
          <view class="home-horizontal-tours__title">{{ item.title }}</view>
          <view class="home-horizontal-tours__meta">
            {{ item.departureCity }}出发 · {{ item.days }}天{{ item.nights }}晚
          </view>
          <view class="home-horizontal-tours__tags">
            <text
              v-for="tag in item.tags.slice(0, 3)"
              :key="tag"
              class="home-horizontal-tours__tag"
            >
              {{ tag }}
            </text>
          </view>
          <view class="home-horizontal-tours__footer">
            <view class="home-horizontal-tours__price">
              <text class="home-horizontal-tours__price-symbol">¥</text>
              <text class="home-horizontal-tours__price-num">{{ item.price }}</text>
              <text class="home-horizontal-tours__price-unit">起</text>
            </view>
            <text class="home-horizontal-tours__action">查看</text>
          </view>
        </view>
      </view>
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import BaseImage from '@/components/base/BaseImage/index.vue'
import type { TourProduct } from '@/types/tour'

defineProps<{
  items: TourProduct[]
}>()

defineEmits<{
  select: [tour: TourProduct]
}>()
</script>

<style lang="scss" scoped>
.home-horizontal-tours {
  width: 100%;
  white-space: nowrap;
}

.home-horizontal-tours__inner {
  display: inline-flex;
  gap: $space-sm;
  min-width: 100%;
  padding-bottom: 2rpx;
}

.home-horizontal-tours__card {
  box-sizing: border-box;
  width: 300rpx;
  overflow: hidden;
  white-space: normal;
  background: #fff;
  border: 1rpx solid rgba(219, 226, 236, 0.92);
  border-radius: 22rpx;
  box-shadow: 0 12rpx 28rpx rgba(17, 31, 52, 0.06);
}

.home-horizontal-tours__cover {
  position: relative;
  height: 236rpx;
  overflow: hidden;
  background: #eef2f6;
}

.home-horizontal-tours__cover-tag {
  position: absolute;
  top: $space-sm;
  left: $space-sm;
  padding: 6rpx 12rpx;
  color: #fff;
  font-size: 20rpx;
  font-weight: 800;
  background: rgba(15, 23, 42, 0.46);
  border: 1rpx solid rgba(255, 255, 255, 0.22);
  border-radius: 999rpx;
}

.home-horizontal-tours__score {
  position: absolute;
  right: $space-sm;
  bottom: $space-sm;
  padding: 7rpx 12rpx;
  color: #92400e;
  font-size: 20rpx;
  font-weight: 900;
  background: rgba(255, 251, 235, 0.94);
  border-radius: 999rpx;
}

.home-horizontal-tours__body {
  padding: $space-sm;
}

.home-horizontal-tours__title {
  display: -webkit-box;
  height: 70rpx;
  overflow: hidden;
  color: #182230;
  font-size: 26rpx;
  font-weight: 900;
  line-height: 1.4;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.home-horizontal-tours__meta {
  @include text-ellipsis;

  margin-top: 6rpx;
  color: #667085;
  font-size: 20rpx;
}

.home-horizontal-tours__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6rpx;
  margin-top: $space-sm;
}

.home-horizontal-tours__tag {
  padding: 5rpx 9rpx;
  color: #2563eb;
  font-size: 20rpx;
  background: #eef4ff;
  border-radius: 999rpx;
}

.home-horizontal-tours__footer {
  @include flex-between;

  margin-top: $space-xs;
}

.home-horizontal-tours__price {
  display: flex;
  align-items: baseline;
  color: #e5484d;
  font-weight: 900;
}

.home-horizontal-tours__price-symbol {
  font-size: 20rpx;
}

.home-horizontal-tours__price-num {
  font-size: 32rpx;
}

.home-horizontal-tours__price-unit {
  margin-left: 2rpx;
  color: #98a2b3;
  font-size: 20rpx;
}

.home-horizontal-tours__action {
  padding: 8rpx 14rpx;
  color: #fff;
  font-size: $font-size-sm;
  font-weight: 800;
  background: #182230;
  border-radius: 999rpx;
}
</style>

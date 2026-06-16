<template>
  <view class="home-feature-tiles">
    <view
      v-for="item in items"
      :key="item.id"
      class="home-feature-tiles__item"
      @tap="$emit('select', item)"
    >
      <BaseImage :src="item.cover" />
      <view class="home-feature-tiles__shade" />
      <view class="home-feature-tiles__content">
        <text v-if="item.tag" class="home-feature-tiles__tag">{{ item.tag }}</text>
        <text class="home-feature-tiles__title">{{ item.title }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import BaseImage from '@/components/base/BaseImage/index.vue'
import type { HomeFeatureTile } from '@/types/home'

defineProps<{
  items: HomeFeatureTile[]
}>()

defineEmits<{
  select: [target: HomeFeatureTile]
}>()
</script>

<style lang="scss" scoped>
.home-feature-tiles {
  display: grid;
  grid-template-columns: 1.18fr 0.9fr 0.9fr;
  gap: $space-sm;
  margin: $space-lg $space-md 0;
}

.home-feature-tiles__item {
  position: relative;
  height: 176rpx;
  overflow: hidden;
  background: #e7edf4;
  border-radius: 24rpx;
  box-shadow: 0 14rpx 34rpx rgba(17, 31, 52, 0.08);
}

.home-feature-tiles__shade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(15, 23, 42, 0.04), rgba(15, 23, 42, 0.58)),
    linear-gradient(90deg, rgba(15, 23, 42, 0.34), transparent);
}

.home-feature-tiles__content {
  position: absolute;
  right: 18rpx;
  bottom: 18rpx;
  left: 18rpx;
  color: #fff;
}

.home-feature-tiles__tag {
  display: inline-flex;
  padding: 5rpx 10rpx;
  font-size: 20rpx;
  font-weight: 800;
  background: rgba(255, 255, 255, 0.2);
  border: 1rpx solid rgba(255, 255, 255, 0.25);
  border-radius: 999rpx;
}

.home-feature-tiles__title {
  display: block;
  margin-top: 8rpx;
  font-size: 26rpx;
  font-weight: 900;
  line-height: 1.25;
}
</style>

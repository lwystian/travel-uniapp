<template>
  <view class="train-notice" @tap="$emit('select')">
    <view class="train-notice__icon"></view>
    <text class="train-notice__title">{{ notice.title }}</text>
    <text class="train-notice__action">{{ notice.actionText }} &gt;</text>
  </view>
</template>

<script setup lang="ts">
import type { TrainNotice } from '@/types/train'

defineProps<{
  notice: TrainNotice
}>()

defineEmits<{
  select: []
}>()
</script>

<style lang="scss" scoped>
.train-notice {
  display: flex;
  align-items: center;
  min-height: 86rpx;
  margin: 20rpx 24rpx 0;
  padding: 0 26rpx;
  background: #fff8f6;
  border: 1rpx solid rgba(255, 226, 219, 0.9);
  border-radius: 14rpx;
}

.train-notice__icon {
  position: relative;
  width: 28rpx;
  height: 24rpx;
  margin-right: 20rpx;
  border: 3rpx solid #ff4b24;
  border-radius: 50%;
}

.train-notice__icon::after {
  position: absolute;
  right: 0;
  bottom: -8rpx;
  width: 10rpx;
  height: 10rpx;
  background: #fff8f6;
  border-right: 3rpx solid #ff4b24;
  border-bottom: 3rpx solid #ff4b24;
  content: '';
  transform: rotate(45deg);
}

.train-notice__title {
  display: block;
  flex: 1;
  min-width: 0;
  color: #1f2937;
  font-size: 28rpx;
  font-weight: 700;
  line-height: 1.35;
}

.train-notice__action {
  display: block;
  flex-shrink: 0;
  color: #111827;
  font-size: 22rpx;
  line-height: 1.35;
}
</style>

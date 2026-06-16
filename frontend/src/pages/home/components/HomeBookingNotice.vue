<template>
  <view class="home-booking-notice" @tap="$emit('select', notice)">
    <view class="home-booking-notice__icon">
      <view class="home-booking-notice__speaker">
        <view class="home-booking-notice__speaker-mouth" />
        <view class="home-booking-notice__speaker-wave" />
      </view>
    </view>
    <view class="home-booking-notice__text">{{ notice.content }}</view>
    <view class="home-booking-notice__action">
      <text>{{ notice.actionText }}</text>
      <view class="home-booking-notice__arrow" />
    </view>
  </view>
</template>

<script setup lang="ts">
import type { HomeNotice } from '@/types/home'

defineProps<{
  notice: HomeNotice
}>()

defineEmits<{
  select: [target: HomeNotice]
}>()
</script>

<style lang="scss" scoped>
.home-booking-notice {
  display: flex;
  align-items: center;
  height: 52rpx;
  gap: 8rpx;
  padding: 0 12rpx;
  background:
    linear-gradient(90deg, rgba(255, 253, 232, 0.98), rgba(255, 249, 218, 0.98)),
    linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 222, 128, 0.16));
  border: 1rpx solid rgba(255, 232, 166, 0.72);
  border-radius: 999rpx;
  box-shadow:
    0 10rpx 22rpx rgba(133, 92, 15, 0.07),
    inset 0 1rpx 0 rgba(255, 255, 255, 0.96);
}

.home-booking-notice__icon {
  @include flex-center;

  flex: 0 0 auto;
  width: 30rpx;
  height: 30rpx;
  background: linear-gradient(135deg, #f7fafc, #e4e9f1);
  border-radius: 50%;
  box-shadow:
    0 2rpx 8rpx rgba(102, 112, 133, 0.12),
    inset 0 0 0 2rpx rgba(255, 255, 255, 0.9);
}

.home-booking-notice__speaker {
  position: relative;
  width: 18rpx;
  height: 16rpx;
}

.home-booking-notice__speaker::before {
  position: absolute;
  top: 5rpx;
  left: 0;
  width: 6rpx;
  height: 7rpx;
  background: #8b96a6;
  border-radius: 2rpx;
  content: '';
}

.home-booking-notice__speaker-mouth {
  position: absolute;
  top: 2rpx;
  left: 5rpx;
  width: 0;
  height: 0;
  border-top: 6rpx solid transparent;
  border-bottom: 6rpx solid transparent;
  border-left: 8rpx solid #8b96a6;
}

.home-booking-notice__speaker-wave {
  position: absolute;
  top: 3rpx;
  right: -2rpx;
  width: 7rpx;
  height: 8rpx;
  border-top: 2rpx solid #a8b0bd;
  border-right: 2rpx solid #a8b0bd;
  border-bottom: 2rpx solid #a8b0bd;
  border-left: 0;
  border-radius: 0 999rpx 999rpx 0;
}

.home-booking-notice__text {
  @include text-ellipsis;

  flex: 1;
  min-width: 0;
  color: #667085;
  font-size: 25rpx;
  font-weight: 700;
  line-height: 52rpx;
}

.home-booking-notice__action {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  height: 52rpx;
  color: #667085;
  font-size: 22rpx;
  font-weight: 900;
}

.home-booking-notice__arrow {
  width: 11rpx;
  height: 11rpx;
  margin-left: 4rpx;
  border-top: 2rpx solid #98a2b3;
  border-right: 2rpx solid #98a2b3;
  transform: rotate(45deg);
}
</style>

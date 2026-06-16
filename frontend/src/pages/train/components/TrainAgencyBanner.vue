<template>
  <view class="train-agency" @tap="$emit('select')">
    <image class="train-agency__image" :src="banner.cover" mode="aspectFill" />
    <view class="train-agency__shade"></view>
    <view class="train-agency__copy">
      <text class="train-agency__title">{{ banner.title }}</text>
      <text class="train-agency__subtitle">{{ banner.subtitle }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { TrainAgencyBanner } from '@/types/train'

defineProps<{
  banner: TrainAgencyBanner
}>()

defineEmits<{
  select: []
}>()
</script>

<style lang="scss" scoped>
.train-agency {
  position: relative;
  height: 160rpx;
  margin: 18rpx 24rpx 0;
  overflow: hidden;
  border-radius: 14rpx;
  box-shadow: 0 16rpx 36rpx rgba(15, 23, 42, 0.08);
}

.train-agency__image,
.train-agency__shade {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.train-agency__shade {
  background: linear-gradient(90deg, rgba(14, 165, 233, 0.82), rgba(190, 242, 100, 0.58));
}

.train-agency__copy {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.train-agency__title {
  display: block;
  color: #fff;
  font-size: 40rpx;
  font-weight: 900;
  line-height: 1.2;
  text-shadow: 0 4rpx 12rpx rgba(15, 23, 42, 0.22);
}

.train-agency__subtitle {
  display: inline-block;
  margin-top: 8rpx;
  padding: 4rpx 20rpx;
  color: #315314;
  font-size: 24rpx;
  font-weight: 900;
  background: #eaff38;
  border-radius: 999rpx;
}
</style>

<template>
  <button class="train-customer" hover-class="train-customer--hover" @tap="$emit('tap')">
    <view class="train-customer__icon"></view>
    <text class="train-customer__text">客服</text>
  </button>
</template>

<script setup lang="ts">
defineEmits<{
  tap: []
}>()
</script>

<style lang="scss" scoped>
.train-customer {
  position: fixed;
  right: 24rpx;
  bottom: calc(132rpx + env(safe-area-inset-bottom));
  z-index: 22;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 88rpx;
  height: 88rpx;
  padding: 0;
  color: #fff;
  background: linear-gradient(135deg, #ff7858 0%, #ff3f31 100%);
  border: 0;
  border-radius: 50%;
  box-shadow: 0 16rpx 34rpx rgba(255, 75, 36, 0.32);
}

.train-customer::after {
  border: 0;
}

.train-customer--hover {
  transform: scale(0.98);
}

.train-customer__icon {
  position: relative;
  width: 34rpx;
  height: 24rpx;
  border: 4rpx solid #fff;
  border-radius: 18rpx 18rpx 10rpx 10rpx;
}

.train-customer__icon::before,
.train-customer__icon::after {
  position: absolute;
  top: 8rpx;
  width: 8rpx;
  height: 14rpx;
  background: #fff;
  border-radius: 999rpx;
  content: '';
}

.train-customer__icon::before {
  left: -12rpx;
}

.train-customer__icon::after {
  right: -12rpx;
}

.train-customer__text {
  margin-top: 3rpx;
  font-size: 18rpx;
  font-weight: 900;
  line-height: 1;
}
</style>

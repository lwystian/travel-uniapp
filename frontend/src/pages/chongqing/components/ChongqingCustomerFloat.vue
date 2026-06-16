<template>
  <button class="chongqing-customer" hover-class="chongqing-customer--hover" @tap="$emit('tap')">
    <view class="chongqing-customer__icon">
      <text></text>
    </view>
    <text class="chongqing-customer__text">{{ text }}</text>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    text?: string
  }>(),
  {
    text: '客服'
  }
)

defineEmits<{
  tap: []
}>()
</script>

<style lang="scss" scoped>
.chongqing-customer {
  position: fixed;
  right: 24rpx;
  bottom: calc(92rpx + env(safe-area-inset-bottom));
  z-index: 18;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 96rpx;
  height: 96rpx;
  padding: 0;
  color: #fff;
  background: linear-gradient(135deg, #ff7858 0%, #ff3f31 100%);
  border: 0;
  border-radius: 50%;
  box-shadow: 0 16rpx 34rpx rgba(255, 75, 36, 0.32);
}

.chongqing-customer::after {
  border: 0;
}

.chongqing-customer--hover {
  transform: scale(0.98);
}

.chongqing-customer__icon {
  position: relative;
  width: 34rpx;
  height: 26rpx;
  margin-bottom: 2rpx;
  border: 4rpx solid #fff;
  border-radius: 18rpx 18rpx 10rpx 10rpx;
}

.chongqing-customer__icon::before,
.chongqing-customer__icon::after {
  position: absolute;
  top: 8rpx;
  width: 8rpx;
  height: 14rpx;
  background: #fff;
  border-radius: 999rpx;
  content: '';
}

.chongqing-customer__icon::before {
  left: -12rpx;
}

.chongqing-customer__icon::after {
  right: -12rpx;
}

.chongqing-customer__icon text {
  position: absolute;
  right: -2rpx;
  bottom: -10rpx;
  width: 16rpx;
  height: 4rpx;
  background: #fff;
  border-radius: 999rpx;
}

.chongqing-customer__text {
  font-size: 20rpx;
  font-weight: 800;
  line-height: 1;
}
</style>

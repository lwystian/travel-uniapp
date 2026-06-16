<template>
  <view class="order-summary-bar">
    <view class="order-summary-bar__item">
      <text class="order-summary-bar__value">{{ total }}</text>
      <text class="order-summary-bar__label">全部订单</text>
    </view>
    <view class="order-summary-bar__divider" />
    <view class="order-summary-bar__item">
      <text class="order-summary-bar__value">{{ actionCount }}</text>
      <text class="order-summary-bar__label">待处理</text>
    </view>
    <view class="order-summary-bar__divider" />
    <view class="order-summary-bar__item">
      <text class="order-summary-bar__value">{{ serviceCount }}</text>
      <text class="order-summary-bar__label">售后单</text>
    </view>
  </view>
</template>

<script setup lang="ts">
defineProps<{
  total: number
  actionCount: number
  serviceCount: number
}>()
</script>

<style lang="scss" scoped>
.order-summary-bar {
  display: flex;
  align-items: center;
  margin: -28rpx $space-md 0;
  padding: 22rpx 0;
  background: rgba(255, 255, 255, 0.98);
  border: 1rpx solid rgba(219, 226, 236, 0.92);
  border-radius: 26rpx;
  box-shadow: 0 18rpx 44rpx rgba(18, 31, 56, 0.1);
}

.order-summary-bar__item {
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.order-summary-bar__value {
  color: #101828;
  font-size: 34rpx;
  font-weight: 900;
  line-height: 1.1;
}

.order-summary-bar__label {
  margin-top: 8rpx;
  color: #8a94a6;
  font-size: $font-size-xs;
}

.order-summary-bar__divider {
  width: 1rpx;
  height: 42rpx;
  background: #e4e7ec;
}
</style>

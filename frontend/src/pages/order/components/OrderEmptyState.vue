<template>
  <view class="order-empty-state">
    <view class="order-empty-state__illustration">
      <view class="order-empty-state__circle" />
      <view class="order-empty-state__ticket">
        <view class="order-empty-state__ticket-head">
          <view class="order-empty-state__head-line" />
          <view class="order-empty-state__head-line order-empty-state__head-line--short" />
        </view>
        <view class="order-empty-state__paper">
          <view class="order-empty-state__paper-line" />
          <view class="order-empty-state__paper-line order-empty-state__paper-line--sm" />
          <view class="order-empty-state__paper-line" />
          <view class="order-empty-state__paper-line order-empty-state__paper-line--sm" />
          <view class="order-empty-state__paper-line" />
          <view class="order-empty-state__paper-line order-empty-state__paper-line--lg" />
        </view>
      </view>
    </view>
    <view class="order-empty-state__title">暂时没有相关订单</view>
  </view>
</template>

<script setup lang="ts">
defineEmits<{
  reset: []
}>()
</script>

<style lang="scss" scoped>
.order-empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 610rpx;
  padding: 120rpx $space-md;
}

.order-empty-state__illustration {
  position: relative;
  width: 196rpx;
  height: 214rpx;
}

.order-empty-state__circle {
  position: absolute;
  top: 44rpx;
  left: 0;
  width: 196rpx;
  height: 196rpx;
  background: #ffe8e3;
  border-radius: 50%;
}

.order-empty-state__ticket {
  position: absolute;
  top: 0;
  left: 48rpx;
  width: 126rpx;
}

.order-empty-state__ticket-head {
  height: 50rpx;
  padding: 12rpx 16rpx;
  background: #ff4b28;
  border-radius: 8rpx 8rpx 0 0;
  box-shadow: 0 8rpx 18rpx rgba(255, 75, 40, 0.2);
}

.order-empty-state__head-line {
  width: 46rpx;
  height: 9rpx;
  background: #fff;
  border-radius: 999rpx;
}

.order-empty-state__head-line--short {
  width: 68rpx;
  margin-top: 12rpx;
  background: rgba(255, 255, 255, 0.32);
}

.order-empty-state__paper {
  height: 146rpx;
  padding: 18rpx 18rpx 0;
  background: #fff;
  border-radius: 0 0 8rpx 8rpx;
  box-shadow: 0 8rpx 20rpx rgba(53, 58, 69, 0.08);
}

.order-empty-state__paper-line {
  width: 46rpx;
  height: 8rpx;
  margin-bottom: 14rpx;
  background: #ffb39f;
  border-radius: 999rpx;
}

.order-empty-state__paper-line--sm {
  width: 68rpx;
  background: #ffd9cd;
}

.order-empty-state__paper-line--lg {
  width: 82rpx;
  background: #ffd9cd;
}

.order-empty-state__title {
  margin-top: 26rpx;
  color: #81889a;
  font-size: 28rpx;
  font-weight: 400;
}
</style>

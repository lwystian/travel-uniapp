<template>
  <view class="user-service-card">
    <view>
      <view class="user-service-card__title">旅行顾问服务</view>
      <view class="user-service-card__desc">行程咨询、订单协助、售后支持</view>
    </view>
    <view class="user-service-card__button" @tap="$emit('contact')">联系客服</view>
  </view>
</template>

<script setup lang="ts">
defineEmits<{
  contact: []
}>()
</script>

<style lang="scss" scoped>
.user-service-card {
  @include flex-between;

  gap: $space-md;
  margin: $space-md $space-md 0;
  padding: $space-md;
  color: #fff;
  background: linear-gradient(135deg, #182230, #334155);
  border-radius: 28rpx;
  box-shadow: 0 16rpx 38rpx rgba(18, 31, 56, 0.14);
}

.user-service-card__title {
  font-size: $font-size-md;
  font-weight: 900;
}

.user-service-card__desc {
  margin-top: 8rpx;
  color: rgba(255, 255, 255, 0.72);
  font-size: $font-size-xs;
}

.user-service-card__button {
  flex: 0 0 auto;
  padding: 14rpx 24rpx;
  color: #182230;
  font-size: $font-size-sm;
  font-weight: 900;
  background: #fff;
  border-radius: 999rpx;
}
</style>

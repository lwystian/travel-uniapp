<template>
  <view class="home-quick-actions">
    <view
      v-for="item in items"
      :key="item.id"
      class="home-quick-actions__item"
      @tap="$emit('select', item)"
    >
      <view class="home-quick-actions__icon">{{ item.iconText }}</view>
      <view class="home-quick-actions__content">
        <text class="home-quick-actions__title">{{ item.title }}</text>
        <text class="home-quick-actions__subtitle">{{ item.subtitle }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { HomeQuickAction } from '@/types/home'

defineProps<{
  items: HomeQuickAction[]
}>()

defineEmits<{
  select: [target: HomeQuickAction]
}>()
</script>

<style lang="scss" scoped>
.home-quick-actions {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: $space-sm;
  margin: $space-lg $space-md 0;
}

.home-quick-actions__item {
  display: flex;
  align-items: center;
  gap: 12rpx;
  min-width: 0;
  padding: 18rpx 14rpx;
  background: #fff;
  border: 1rpx solid rgba(218, 226, 237, 0.88);
  border-radius: 22rpx;
  box-shadow: 0 12rpx 30rpx rgba(17, 31, 52, 0.05);
}

.home-quick-actions__icon {
  @include flex-center;

  flex: 0 0 auto;
  width: 50rpx;
  height: 50rpx;
  color: #0f5ec7;
  font-size: 22rpx;
  font-weight: 900;
  background: linear-gradient(135deg, #e8f2ff, #f4fbff);
  border: 1rpx solid #d8e9ff;
  border-radius: 16rpx;
}

.home-quick-actions__content {
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
}

.home-quick-actions__title {
  @include text-ellipsis;

  color: #172033;
  font-size: 24rpx;
  font-weight: 900;
}

.home-quick-actions__subtitle {
  @include text-ellipsis;

  margin-top: 5rpx;
  color: #7a8798;
  font-size: 20rpx;
}
</style>

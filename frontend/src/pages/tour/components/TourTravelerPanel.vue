<template>
  <view class="tour-traveler-panel">
    <view class="tour-traveler-panel__header">
      <view class="tour-traveler-panel__title">仅需填{{ limit }}位游客</view>
      <view class="tour-traveler-panel__action" @tap="$emit('select')">
        选择/新增
        <text>›</text>
      </view>
    </view>

    <view v-if="traveler" class="tour-traveler-panel__selected">
      <view class="tour-traveler-panel__avatar">{{ traveler.name.slice(0, 1) }}</view>
      <view class="tour-traveler-panel__info">
        <view class="tour-traveler-panel__name">{{ traveler.name }}</view>
        <view class="tour-traveler-panel__id">{{ traveler.idNo }}</view>
      </view>
    </view>
    <view v-else class="tour-traveler-panel__empty" @tap="$emit('select')">
      <text class="tour-traveler-panel__label">游客</text>
      <text class="tour-traveler-panel__placeholder">点击填写游客信息</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { Traveler } from '@/types/user'

defineProps<{
  limit: number
  traveler?: Traveler
}>()

defineEmits<{
  select: []
}>()
</script>

<style lang="scss" scoped>
.tour-traveler-panel {
  margin-top: 18rpx;
  padding: $space-md;
  background: $color-bg-white;
  border-radius: 16rpx;
}

.tour-traveler-panel__header {
  @include flex-between;

  gap: 20rpx;
}

.tour-traveler-panel__title {
  color: #101828;
  font-size: 31rpx;
  font-weight: 900;
}

.tour-traveler-panel__action {
  flex: 0 0 auto;
  color: #ff4d2e;
  font-size: 25rpx;
  font-weight: 800;
}

.tour-traveler-panel__action text {
  margin-left: 6rpx;
  color: #9aa1ad;
}

.tour-traveler-panel__empty,
.tour-traveler-panel__selected {
  display: flex;
  align-items: center;
  margin-top: 26rpx;
  padding-bottom: 24rpx;
  border-bottom: 1rpx solid #edf0f4;
}

.tour-traveler-panel__label {
  flex: 0 0 168rpx;
  color: #394150;
  font-size: 26rpx;
}

.tour-traveler-panel__placeholder {
  color: #9aa1ad;
  font-size: 26rpx;
}

.tour-traveler-panel__avatar {
  @include flex-center;

  width: 88rpx;
  height: 58rpx;
  color: #697386;
  font-size: 24rpx;
  font-weight: 800;
  background: #eef1f5;
  border-radius: 6rpx;
}

.tour-traveler-panel__info {
  flex: 1;
  min-width: 0;
  margin-left: 26rpx;
}

.tour-traveler-panel__name {
  color: #263344;
  font-size: 27rpx;
  font-weight: 800;
}

.tour-traveler-panel__id {
  @include text-ellipsis;

  margin-top: 8rpx;
  color: #9aa1ad;
  font-size: 23rpx;
}
</style>

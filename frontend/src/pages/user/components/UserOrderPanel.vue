<template>
  <view class="user-order-panel">
    <view class="user-order-panel__header">
      <text class="user-order-panel__title">我的订单</text>
      <view class="user-order-panel__more" @tap="$emit('more')">全部订单</view>
    </view>
    <view class="user-order-panel__grid">
      <view
        v-for="item in items"
        :key="item.key"
        class="user-order-panel__item"
        @tap="$emit('select', item.key)"
      >
        <view class="user-order-panel__icon">
          <text>{{ item.icon }}</text>
          <view v-if="item.count > 0" class="user-order-panel__badge">{{ item.count }}</view>
        </view>
        <text class="user-order-panel__label">{{ item.label }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
export interface UserOrderEntry {
  key: string
  label: string
  icon: string
  count: number
}

defineProps<{
  items: UserOrderEntry[]
}>()

defineEmits<{
  more: []
  select: [key: string]
}>()
</script>

<style lang="scss" scoped>
.user-order-panel {
  margin: $space-md $space-md 0;
  padding: $space-md;
  background: #fff;
  border: 1rpx solid rgba(219, 226, 236, 0.92);
  border-radius: 28rpx;
  box-shadow: 0 14rpx 34rpx rgba(18, 31, 56, 0.06);
}

.user-order-panel__header {
  @include flex-between;

  padding-bottom: $space-md;
}

.user-order-panel__title {
  color: #101828;
  font-size: $font-size-md;
  font-weight: 900;
}

.user-order-panel__more {
  color: #8a94a6;
  font-size: $font-size-sm;
}

.user-order-panel__grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: $space-sm;
}

.user-order-panel__item {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: center;
  gap: 12rpx;
}

.user-order-panel__icon {
  @include flex-center;

  position: relative;
  width: 76rpx;
  height: 76rpx;
  color: #1d6fd3;
  font-size: $font-size-md;
  font-weight: 900;
  background: #eef4ff;
  border-radius: 24rpx;
}

.user-order-panel__badge {
  @include flex-center;

  position: absolute;
  top: -8rpx;
  right: -8rpx;
  min-width: 30rpx;
  height: 30rpx;
  padding: 0 8rpx;
  color: #fff;
  font-size: 18rpx;
  font-weight: 900;
  background: #ff4f36;
  border: 2rpx solid #fff;
  border-radius: 999rpx;
}

.user-order-panel__label {
  @include text-ellipsis;

  max-width: 112rpx;
  color: #344054;
  font-size: $font-size-xs;
  font-weight: 800;
}
</style>

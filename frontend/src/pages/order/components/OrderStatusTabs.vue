<template>
  <scroll-view class="order-status-tabs" scroll-x>
    <view class="order-status-tabs__inner">
      <view
        v-for="tab in tabs"
        :key="tab.tab"
        class="order-status-tabs__item"
        :class="{ 'order-status-tabs__item--active': tab.tab === active }"
        @tap="$emit('change', tab.tab)"
      >
        <text class="order-status-tabs__label">{{ tab.label }}</text>
      </view>
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import type { OrderListTab, OrderStatusSummary } from '@/types/order'

defineProps<{
  active: OrderListTab
  tabs: OrderStatusSummary[]
}>()

defineEmits<{
  change: [tab: OrderListTab]
}>()
</script>

<style lang="scss" scoped>
.order-status-tabs {
  width: 100%;
  white-space: nowrap;
}

.order-status-tabs__inner {
  display: inline-flex;
  align-items: center;
  min-width: 100%;
  padding: 0 10rpx 26rpx;
}

.order-status-tabs__item {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  min-width: 118rpx;
  height: 54rpx;
  padding: 0 18rpx;
  color: #111827;
  white-space: nowrap;
  background: #fff;
  border: 0;
  border-radius: 999rpx;
  box-shadow: none;
}

.order-status-tabs__item--active {
  color: #fff;
  background: #ff4f36;
  box-shadow: 0 10rpx 22rpx rgba(255, 79, 54, 0.2);
}

.order-status-tabs__label {
  display: inline-block;
  font-size: 28rpx;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  word-break: keep-all;
}
</style>

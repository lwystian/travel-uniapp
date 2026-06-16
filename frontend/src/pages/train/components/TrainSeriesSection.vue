<template>
  <view class="train-series" :class="`train-series--${series.tone}`">
    <view class="train-series__header">
      <view>
        <text class="train-series__title">{{ series.title }}</text>
        <text v-if="series.subtitle" class="train-series__subtitle">{{ series.subtitle }}</text>
      </view>
      <button
        v-if="series.actionType"
        class="train-series__action"
        hover-class="none"
        @tap="$emit('action', series)"
      >
        <text class="train-series__refresh"></text>
      </button>
    </view>
    <view class="train-series__list">
      <TrainProductCard
        v-for="product in series.products"
        :key="product.id"
        :product="product"
        @select="$emit('select', $event)"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
import type { TrainProduct, TrainSeries } from '@/types/train'
import TrainProductCard from './TrainProductCard.vue'

defineProps<{
  series: TrainSeries
}>()

defineEmits<{
  select: [product: TrainProduct]
  action: [series: TrainSeries]
}>()
</script>

<style lang="scss" scoped>
.train-series {
  margin: 24rpx 24rpx 0;
  padding: 24rpx;
  border-radius: 14rpx;
  box-shadow: 0 14rpx 32rpx rgba(15, 23, 42, 0.08);
}

.train-series--teal {
  background: linear-gradient(135deg, #9ee7cf 0%, #1687f0 100%);
}

.train-series--orange {
  background: linear-gradient(135deg, #f8d794 0%, #f45b22 100%);
}

.train-series--mint {
  background: linear-gradient(135deg, #94eac0 0%, #26c6da 100%);
}

.train-series--blue {
  background: linear-gradient(135deg, #8ee7f5 0%, #2f74df 100%);
}

.train-series--olive {
  background: linear-gradient(135deg, #91c37a 0%, #c5c636 100%);
}

.train-series__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 18rpx;
}

.train-series__title {
  display: block;
  color: #103044;
  font-size: 30rpx;
  font-weight: 900;
  line-height: 1.25;
}

.train-series__subtitle {
  display: block;
  margin-top: 6rpx;
  color: rgba(16, 48, 68, 0.74);
  font-size: 22rpx;
  line-height: 1.35;
}

.train-series__action {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48rpx;
  height: 48rpx;
  padding: 0;
  background: rgba(255, 255, 255, 0.28);
  border: 0;
  border-radius: 50%;
}

.train-series__action::after {
  border: 0;
}

.train-series__refresh {
  width: 20rpx;
  height: 20rpx;
  border: 4rpx solid #0f766e;
  border-left-color: transparent;
  border-radius: 50%;
}

.train-series__list {
  display: flex;
  flex-direction: column;
  gap: 14rpx;
}
</style>

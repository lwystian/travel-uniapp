<template>
  <view class="train-search-card" @tap="$emit('select', product)">
    <image class="train-search-card__cover" :src="product.cover" mode="aspectFill" />
    <view class="train-search-card__body">
      <text class="train-search-card__title">{{ product.title }}</text>
      <view class="train-search-card__meta">
        <text class="train-search-card__badge">{{ product.stockText }}</text>
        <text>{{ product.departureCity }} · {{ product.arrivalCity }}</text>
      </view>
      <view class="train-search-card__tags">
        <text v-for="tag in product.tags.slice(0, 2)" :key="tag" class="train-search-card__tag">
          {{ tag }}
        </text>
      </view>
      <view class="train-search-card__price">
        <text class="train-search-card__currency">¥</text>
        <text class="train-search-card__amount">{{ product.price }}</text>
        <text class="train-search-card__unit">起</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { TrainProduct } from '@/types/train'

defineProps<{
  product: TrainProduct
}>()

defineEmits<{
  select: [product: TrainProduct]
}>()
</script>

<style lang="scss" scoped>
.train-search-card {
  display: grid;
  grid-template-columns: 248rpx minmax(0, 1fr);
  min-height: 202rpx;
  overflow: hidden;
  background: #fff;
  border-radius: 10rpx;
  box-shadow: 0 10rpx 28rpx rgba(15, 23, 42, 0.04);
}

.train-search-card__cover {
  width: 248rpx;
  height: 202rpx;
  background: #dbeafe;
}

.train-search-card__body {
  display: flex;
  min-width: 0;
  flex-direction: column;
  padding: 20rpx 22rpx 16rpx;
}

.train-search-card__title {
  display: -webkit-box;
  overflow: hidden;
  color: #0f172a;
  font-size: 28rpx;
  font-weight: 900;
  line-height: 1.25;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.train-search-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8rpx 12rpx;
  align-items: center;
  margin-top: auto;
  color: #687386;
  font-size: 23rpx;
}

.train-search-card__badge {
  padding: 3rpx 10rpx;
  color: #6b7280;
  background: #f1f4f8;
  border-radius: 5rpx;
}

.train-search-card__tags {
  display: flex;
  gap: 8rpx;
  min-height: 32rpx;
  margin-top: 8rpx;
  overflow: hidden;
}

.train-search-card__tag {
  max-width: 150rpx;
  overflow: hidden;
  padding: 4rpx 10rpx;
  color: #64748b;
  font-size: 20rpx;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #f6f8fb;
  border-radius: 6rpx;
}

.train-search-card__price {
  display: flex;
  align-items: baseline;
  margin-top: 8rpx;
  color: #ff4b24;
}

.train-search-card__currency {
  font-size: 22rpx;
}

.train-search-card__amount {
  font-size: 34rpx;
  font-weight: 900;
}

.train-search-card__unit {
  margin-left: 3rpx;
  font-size: 20rpx;
  font-weight: 700;
}
</style>

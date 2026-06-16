<template>
  <view class="train-product-card" @tap="$emit('select', product)">
    <image class="train-product-card__cover" :src="product.cover" mode="aspectFill" />
    <view class="train-product-card__body">
      <text class="train-product-card__title">{{ product.title }}</text>
      <view class="train-product-card__price">
        <text class="train-product-card__currency">¥</text>
        <text class="train-product-card__amount">{{ product.price }}</text>
        <text class="train-product-card__unit">起</text>
      </view>
      <text class="train-product-card__stock">{{ product.stockText }}</text>
      <view class="train-product-card__route">
        <text class="train-product-card__pin"></text>
        <text>{{ product.departureCity }} · {{ product.arrivalCity }}</text>
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
.train-product-card {
  display: grid;
  grid-template-columns: 230rpx minmax(0, 1fr);
  min-height: 184rpx;
  overflow: hidden;
  background: #fff;
  border-radius: 8rpx;
}

.train-product-card__cover {
  width: 230rpx;
  height: 184rpx;
  background: #dbeafe;
}

.train-product-card__body {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 16rpx 18rpx 12rpx;
}

.train-product-card__title {
  display: -webkit-box;
  overflow: hidden;
  color: #152235;
  font-size: 25rpx;
  font-weight: 900;
  line-height: 1.28;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.train-product-card__price {
  display: flex;
  align-items: baseline;
  margin-top: auto;
  color: #ff4b24;
}

.train-product-card__currency {
  display: inline-block;
  font-size: 20rpx;
  line-height: 1;
}

.train-product-card__amount {
  display: inline-block;
  font-size: 31rpx;
  font-weight: 900;
  line-height: 1;
}

.train-product-card__unit,
.train-product-card__stock,
.train-product-card__route {
  color: #667085;
  font-size: 20rpx;
}

.train-product-card__unit {
  display: inline-block;
  margin-left: 2rpx;
  color: #ff4b24;
  line-height: 1;
}

.train-product-card__stock {
  display: block;
  margin-top: 4rpx;
  line-height: 1.35;
}

.train-product-card__route {
  display: flex;
  align-items: center;
  gap: 6rpx;
  margin-top: 4rpx;
}

.train-product-card__pin {
  width: 12rpx;
  height: 12rpx;
  border: 3rpx solid #8a94a6;
  border-radius: 50%;
}
</style>

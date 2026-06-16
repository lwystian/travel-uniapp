<template>
  <view class="train-search-sort">
    <button
      v-for="item in options"
      :key="item.value"
      class="train-search-sort__item"
      :class="{ 'train-search-sort__item--active': active === item.value }"
      hover-class="none"
      @tap="$emit('change', item.value)"
    >
      <text>{{ item.label }}</text>
      <text v-if="item.value !== 'default'" class="train-search-sort__arrows">
        <text class="train-search-sort__arrow train-search-sort__arrow--up"></text>
        <text class="train-search-sort__arrow train-search-sort__arrow--down"></text>
      </text>
    </button>
  </view>
</template>

<script setup lang="ts">
import type { TrainSearchSort } from '@/types/train'

defineProps<{
  active: TrainSearchSort
}>()

defineEmits<{
  change: [value: TrainSearchSort]
}>()

const options: Array<{ label: string; value: TrainSearchSort }> = [
  { label: '默认排序', value: 'default' },
  { label: '销量', value: 'sales' },
  { label: '价格', value: 'price' }
]
</script>

<style lang="scss" scoped>
.train-search-sort {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 22rpx 10rpx 18rpx;
  background: #fff;
  border-radius: 28rpx 28rpx 0 0;
}

.train-search-sort__item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rpx;
  min-width: 0;
  height: 42rpx;
  padding: 0;
  color: #8a94a6;
  font-size: 28rpx;
  font-weight: 800;
  line-height: 42rpx;
  background: transparent;
  border: 0;
}

.train-search-sort__item::after {
  border: 0;
}

.train-search-sort__item--active {
  color: #ff4b24;
}

.train-search-sort__arrows {
  display: flex;
  flex-direction: column;
  gap: 3rpx;
}

.train-search-sort__arrow {
  width: 0;
  height: 0;
  border-right: 8rpx solid transparent;
  border-left: 8rpx solid transparent;
}

.train-search-sort__arrow--up {
  border-bottom: 9rpx solid currentColor;
}

.train-search-sort__arrow--down {
  border-top: 9rpx solid currentColor;
}
</style>

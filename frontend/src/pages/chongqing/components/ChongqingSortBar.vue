<template>
  <view class="chongqing-sort">
    <button
      v-for="item in filters"
      :key="item.value"
      class="chongqing-sort__item"
      :class="{ 'chongqing-sort__item--active': isActive(item.value) }"
      hover-class="none"
      @tap="$emit('change', item.value)"
    >
      <text>{{ item.label }}</text>
      <view v-if="item.value === 'price_asc'" class="chongqing-sort__arrows">
        <text
          class="chongqing-sort__arrow chongqing-sort__arrow--up"
          :class="{ 'chongqing-sort__arrow--active': active === 'price_asc' }"
        ></text>
        <text
          class="chongqing-sort__arrow chongqing-sort__arrow--down"
          :class="{ 'chongqing-sort__arrow--active': active === 'price_desc' }"
        ></text>
      </view>
      <view v-else-if="item.value === 'sales'" class="chongqing-sort__arrows">
        <text class="chongqing-sort__arrow chongqing-sort__arrow--up"></text>
        <text class="chongqing-sort__arrow chongqing-sort__arrow--down"></text>
      </view>
    </button>
  </view>
</template>

<script setup lang="ts">
import type { ChongqingChannelData, ChongqingTourSort } from '@/types/chongqing'

const props = defineProps<{
  filters: ChongqingChannelData['filters']
  active: ChongqingTourSort
}>()

defineEmits<{
  change: [value: ChongqingTourSort]
}>()

function isActive(value: ChongqingTourSort) {
  if (value === 'price_asc') {
    return props.active === 'price_asc' || props.active === 'price_desc'
  }
  return props.active === value
}
</script>

<style lang="scss" scoped>
.chongqing-sort {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  padding: 22rpx 8rpx 16rpx;
  background: #fff;
  border-radius: 28rpx 28rpx 0 0;
}

.chongqing-sort__item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  padding: 0;
  color: #7a8290;
  font-size: 28rpx;
  font-weight: 700;
  line-height: 1;
  background: transparent;
  border: 0;
}

.chongqing-sort__item::after {
  border: 0;
}

.chongqing-sort__item--active {
  color: #ff4b24;
}

.chongqing-sort__arrows {
  display: flex;
  flex-direction: column;
  gap: 4rpx;
  margin-left: 8rpx;
}

.chongqing-sort__arrow {
  width: 0;
  height: 0;
  border-right: 8rpx solid transparent;
  border-left: 8rpx solid transparent;
}

.chongqing-sort__arrow--up {
  border-bottom: 10rpx solid #b5bbc5;
}

.chongqing-sort__arrow--down {
  border-top: 10rpx solid #b5bbc5;
}

.chongqing-sort__arrow--up.chongqing-sort__arrow--active {
  border-bottom-color: #ff4b24;
}

.chongqing-sort__arrow--down.chongqing-sort__arrow--active {
  border-top-color: #ff4b24;
}
</style>

<template>
  <view class="tour-detail-guarantee" @tap="$emit('select')">
    <view class="tour-detail-guarantee__items">
      <view v-for="item in items" :key="item.id" class="tour-detail-guarantee__item">
        <text class="tour-detail-guarantee__check">✓</text>
        <text>{{ item.title }}</text>
      </view>
    </view>
    <text class="tour-detail-guarantee__arrow">›</text>
  </view>
</template>

<script setup lang="ts">
import type { TourServiceGuarantee } from '@/types/tour'

defineProps<{
  items: TourServiceGuarantee[]
}>()

defineEmits<{
  select: []
}>()
</script>

<style lang="scss" scoped>
.tour-detail-guarantee {
  @include flex-between;

  min-height: 76rpx;
  margin-top: 16rpx;
  padding: 0 $space-md;
  background: $color-bg-white;
  border-radius: 14rpx;
}

.tour-detail-guarantee__items {
  display: flex;
  flex-wrap: wrap;
  gap: 22rpx;
  min-width: 0;
}

.tour-detail-guarantee__item {
  display: flex;
  align-items: center;
  color: #7b5d36;
  font-size: 24rpx;
  font-weight: 700;
}

.tour-detail-guarantee__check {
  margin-right: 8rpx;
  color: #b9915d;
  font-size: 28rpx;
  font-weight: 900;
}

.tour-detail-guarantee__arrow {
  flex: 0 0 auto;
  color: #9aa1ad;
  font-size: 38rpx;
  line-height: 1;
}
</style>

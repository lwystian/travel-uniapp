<template>
  <view class="chongqing-card" @tap="$emit('select', tour)">
    <image class="chongqing-card__cover" :src="tour.cover" mode="aspectFill" />
    <view class="chongqing-card__body">
      <text class="chongqing-card__title">{{ tour.title }}</text>
      <text class="chongqing-card__summary">{{ tour.summary }}</text>
      <view class="chongqing-card__meta">
        <text class="chongqing-card__refund">{{ tour.refundText }}</text>
        <text>{{ tour.days }}天{{ tour.nights }}晚</text>
        <text>{{ tour.departureCity }}出发</text>
      </view>
      <view class="chongqing-card__tags">
        <text v-for="tag in visibleTags" :key="tag" class="chongqing-card__tag">{{ tag }}</text>
      </view>
      <view class="chongqing-card__footer">
        <view class="chongqing-card__price">
          <text class="chongqing-card__currency">¥</text>
          <text class="chongqing-card__amount">{{ tour.price }}</text>
          <text class="chongqing-card__unit">起/人</text>
        </view>
        <text class="chongqing-card__sales">{{ tour.saleCount }}人报名</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ChongqingTourItem } from '@/types/chongqing'

const props = defineProps<{
  tour: ChongqingTourItem
}>()

defineEmits<{
  select: [tour: ChongqingTourItem]
}>()

const visibleTags = computed(() => props.tour.tags.slice(0, 3))
</script>

<style lang="scss" scoped>
.chongqing-card {
  display: flex;
  gap: 18rpx;
  padding: 16rpx;
  background: #fff;
  border-radius: 12rpx;
  box-shadow: 0 10rpx 26rpx rgba(31, 41, 55, 0.045);
}

.chongqing-card__cover {
  flex-shrink: 0;
  width: 240rpx;
  height: 214rpx;
  background: #e8edf4;
  border-radius: 10rpx;
}

.chongqing-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
}

.chongqing-card__title {
  display: -webkit-box;
  overflow: hidden;
  color: #111;
  font-size: 29rpx;
  font-weight: 900;
  line-height: 1.18;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.chongqing-card__summary {
  display: -webkit-box;
  margin-top: 8rpx;
  overflow: hidden;
  color: #667085;
  font-size: 22rpx;
  line-height: 1.35;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.chongqing-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8rpx;
  align-items: center;
  margin-top: 12rpx;
  color: #687385;
  font-size: 22rpx;
}

.chongqing-card__refund {
  padding: 4rpx 10rpx;
  color: #6b7280;
  background: #f1f5f9;
  border-radius: 4rpx;
}

.chongqing-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8rpx;
  min-height: 34rpx;
  margin-top: 10rpx;
  overflow: hidden;
}

.chongqing-card__tag {
  max-width: 132rpx;
  padding: 4rpx 10rpx;
  overflow: hidden;
  color: #ff6a3d;
  font-size: 20rpx;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #fff3ed;
  border-radius: 4rpx;
}

.chongqing-card__footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 8rpx;
}

.chongqing-card__price {
  display: flex;
  align-items: baseline;
  min-width: 0;
  color: #ff4b24;
}

.chongqing-card__currency {
  font-size: 22rpx;
}

.chongqing-card__amount {
  font-size: 38rpx;
  font-weight: 900;
  line-height: 1;
}

.chongqing-card__unit {
  margin-left: 4rpx;
  font-size: 20rpx;
}

.chongqing-card__sales {
  flex-shrink: 0;
  margin-left: 8rpx;
  color: #9aa3b2;
  font-size: 21rpx;
}
</style>

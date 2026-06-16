<template>
  <view class="tour-detail-summary">
    <view class="tour-detail-summary__price-row">
      <view class="tour-detail-summary__price">
        <text class="tour-detail-summary__price-symbol">¥</text>
        <text class="tour-detail-summary__price-value">{{ displayPrice }}</text>
        <text class="tour-detail-summary__price-unit">起/人</text>
      </view>
      <text class="tour-detail-summary__sales">{{ formatSales(detail.saleCount) }}人参加过</text>
    </view>

    <view class="tour-detail-summary__title">{{ detail.title }}</view>
    <view class="tour-detail-summary__overview">{{ detail.overview }}</view>

    <view class="tour-detail-summary__tags">
      <text
        v-for="tag in detail.detailTags?.slice(0, 6) || detail.tags"
        :key="tag"
        class="tour-detail-summary__tag"
      >
        {{ tag }}
      </text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TourDetail } from '@/types/tour'
import { formatSales } from '@/utils/format'

const props = defineProps<{
  detail: TourDetail
  price?: number
}>()

const displayPrice = computed(() => props.price ?? props.detail.price)
</script>

<style lang="scss" scoped>
.tour-detail-summary {
  padding: 28rpx $space-md 26rpx;
  background: $color-bg-white;
  border-radius: 0 0 18rpx 18rpx;
}

.tour-detail-summary__price-row {
  @include flex-between;

  gap: 20rpx;
}

.tour-detail-summary__price {
  display: flex;
  align-items: baseline;
  min-width: 0;
  color: #ff4d2e;
  font-weight: 900;
}

.tour-detail-summary__price-symbol {
  font-size: 30rpx;
}

.tour-detail-summary__price-value {
  font-size: 44rpx;
  line-height: 1;
}

.tour-detail-summary__price-unit {
  margin-left: 8rpx;
  color: #9aa1ad;
  font-size: 23rpx;
  font-weight: 700;
}

.tour-detail-summary__sales {
  flex: 0 0 auto;
  color: #6c7480;
  font-size: 24rpx;
}

.tour-detail-summary__title {
  margin-top: 18rpx;
  color: #182230;
  font-size: 34rpx;
  font-weight: 900;
  line-height: 1.35;
}

.tour-detail-summary__overview {
  display: -webkit-box;
  margin-top: 16rpx;
  overflow: hidden;
  color: #596574;
  font-size: 26rpx;
  line-height: 1.55;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.tour-detail-summary__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10rpx;
  margin-top: 20rpx;
}

.tour-detail-summary__tag {
  max-width: 210rpx;
  height: 36rpx;
  padding: 0 10rpx;
  overflow: hidden;
  color: #6d7b69;
  font-size: 21rpx;
  font-weight: 700;
  line-height: 36rpx;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #f1f7ed;
  border-radius: 6rpx;
}
</style>

<template>
  <view class="home-weekly-activities">
    <view
      v-for="item in items"
      :key="item.id"
      class="home-weekly-activities__item"
      @tap="$emit('select', item)"
    >
      <view class="home-weekly-activities__cover">
        <BaseImage :src="item.cover" />
        <text class="home-weekly-activities__depart">{{ item.departureTag }}</text>
      </view>
      <view class="home-weekly-activities__body">
        <text class="home-weekly-activities__title">{{ item.title }}</text>
        <text class="home-weekly-activities__subtitle">{{ item.subtitle }}</text>
        <view class="home-weekly-activities__footer">
          <view class="home-weekly-activities__price">
            <text>¥</text>
            <text class="home-weekly-activities__price-num">{{ item.price }}</text>
            <text>起</text>
          </view>
          <text class="home-weekly-activities__button">预订</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import BaseImage from '@/components/base/BaseImage/index.vue'
import type { HomeActivity } from '@/types/home'

defineProps<{
  items: HomeActivity[]
}>()

defineEmits<{
  select: [target: HomeActivity]
}>()
</script>

<style lang="scss" scoped>
.home-weekly-activities {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: $space-sm;
}

.home-weekly-activities__item {
  overflow: hidden;
  background: #fff;
  border: 1rpx solid rgba(226, 232, 240, 0.92);
  border-radius: 22rpx;
}

.home-weekly-activities__cover {
  position: relative;
  height: 172rpx;
  overflow: hidden;
  background: #e7edf4;
}

.home-weekly-activities__depart {
  position: absolute;
  top: 12rpx;
  left: 12rpx;
  max-width: 190rpx;
  padding: 6rpx 10rpx;
  overflow: hidden;
  color: #fff;
  font-size: 20rpx;
  font-weight: 800;
  white-space: nowrap;
  text-overflow: ellipsis;
  background: rgba(15, 23, 42, 0.46);
  border-radius: 999rpx;
}

.home-weekly-activities__body {
  padding: $space-sm;
}

.home-weekly-activities__title {
  @include text-ellipsis;

  display: block;
  color: #172033;
  font-size: 26rpx;
  font-weight: 900;
}

.home-weekly-activities__subtitle {
  @include text-ellipsis;

  display: block;
  margin-top: 7rpx;
  color: #667085;
  font-size: 21rpx;
}

.home-weekly-activities__footer {
  @include flex-between;

  gap: $space-xs;
  margin-top: 14rpx;
}

.home-weekly-activities__price {
  display: flex;
  align-items: baseline;
  color: #e5484d;
  font-size: 20rpx;
  font-weight: 900;
}

.home-weekly-activities__price-num {
  font-size: 32rpx;
}

.home-weekly-activities__button {
  flex: 0 0 auto;
  padding: 8rpx 14rpx;
  color: #fff;
  font-size: $font-size-sm;
  font-weight: 800;
  background: #172033;
  border-radius: 999rpx;
}
</style>

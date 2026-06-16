<template>
  <view class="home-city-tour-grid">
    <view
      v-for="item in items"
      :key="item.id"
      class="home-city-tour-grid__card"
      @tap="$emit('select', item)"
    >
      <view class="home-city-tour-grid__cover-stack">
        <view
          v-for="(tone, index) in getImageStack(item)"
          :key="`${item.id}-${tone}-${index}`"
          class="home-city-tour-grid__cover"
          :class="{ 'home-city-tour-grid__cover--single': getImageStack(item).length === 1 }"
        >
          <BaseImage v-if="index === 0 && item.cover" :src="item.cover" />
          <view
            v-else
            class="home-city-tour-grid__visual"
            :class="`home-city-tour-grid__visual--${tone}`"
          >
            <view class="home-city-tour-grid__skyline" />
            <view class="home-city-tour-grid__scene" />
            <view class="home-city-tour-grid__ground" />
          </view>
          <view v-if="index === 0 && item.departureCity" class="home-city-tour-grid__depart">
            {{ item.departureCity }}出发
          </view>
        </view>
        <view v-if="item.badge" class="home-city-tour-grid__badge">{{ item.badge }}</view>
      </view>

      <view class="home-city-tour-grid__body">
        <view class="home-city-tour-grid__title">{{ item.title }}</view>
        <view class="home-city-tour-grid__meta">
          <text v-if="item.subtitle">{{ item.subtitle }}</text>
          <text v-if="item.days">
            {{ item.subtitle ? ' · ' : '' }}{{ item.days }}天{{ item.nights || 0 }}晚
          </text>
        </view>
        <view class="home-city-tour-grid__tags">
          <text v-for="tag in item.tags.slice(0, 3)" :key="tag" class="home-city-tour-grid__tag">
            {{ tag }}
          </text>
        </view>
        <view class="home-city-tour-grid__footer">
          <view class="home-city-tour-grid__price">
            <text v-if="item.price" class="home-city-tour-grid__price-symbol">¥</text>
            <text class="home-city-tour-grid__price-num">
              {{ item.price ? item.price : item.actionText }}
            </text>
            <text v-if="item.price" class="home-city-tour-grid__price-unit">起</text>
          </view>
          <view v-if="item.joinedCount" class="home-city-tour-grid__joined">
            {{ item.joinedCount }}人已报名
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import BaseImage from '@/components/base/BaseImage/index.vue'
import type { HomeCityTourCard, HomeVisualTone } from '@/types/home'

defineProps<{
  items: HomeCityTourCard[]
}>()

defineEmits<{
  select: [target: HomeCityTourCard]
}>()

function getImageStack(item: HomeCityTourCard): HomeVisualTone[] {
  return item.imageStack?.length ? item.imageStack.slice(0, 3) : [item.visualTone]
}
</script>

<style lang="scss" scoped>
.home-city-tour-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20rpx;
  padding-right: $space-md;
}

.home-city-tour-grid__card {
  min-width: 0;
  overflow: hidden;
  background: #fff;
  border: 1rpx solid rgba(218, 226, 237, 0.9);
  border-radius: 10rpx;
  box-shadow: 0 8rpx 22rpx rgba(15, 23, 42, 0.1);
}

.home-city-tour-grid__cover-stack {
  position: relative;
  height: 258rpx;
  overflow: hidden;
  background: #dce7ef;
}

.home-city-tour-grid__cover {
  position: relative;
  height: 86rpx;
  overflow: hidden;
  border-bottom: 1rpx solid rgba(255, 255, 255, 0.72);
}

.home-city-tour-grid__cover--single {
  height: 258rpx;
  border-bottom: 0;
}

.home-city-tour-grid__visual {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #dff7ff 0%, #89c98c 46%, #2f5f43 100%);
}

.home-city-tour-grid__visual::before {
  position: absolute;
  top: 14rpx;
  left: 20rpx;
  width: 42rpx;
  height: 42rpx;
  background: rgba(255, 238, 170, 0.75);
  border-radius: 50%;
  content: '';
}

.home-city-tour-grid__skyline {
  position: absolute;
  right: -28rpx;
  bottom: 12rpx;
  width: 236rpx;
  height: 78rpx;
  background: rgba(31, 91, 61, 0.66);
  border-radius: 50% 46% 0 0;
}

.home-city-tour-grid__scene {
  position: absolute;
  right: 22rpx;
  bottom: 14rpx;
  width: 166rpx;
  height: 46rpx;
  background: linear-gradient(180deg, #263f2c 0%, #1d3528 100%);
  border-radius: 8rpx 8rpx 4rpx 4rpx;
  box-shadow:
    -80rpx 18rpx 0 -8rpx rgba(35, 70, 42, 0.92),
    -122rpx 36rpx 0 -12rpx rgba(27, 59, 39, 0.86);
}

.home-city-tour-grid__ground {
  position: absolute;
  right: -40rpx;
  bottom: -44rpx;
  left: -40rpx;
  height: 82rpx;
  background: rgba(223, 239, 218, 0.7);
  border-radius: 50%;
}

.home-city-tour-grid__visual--night {
  background: linear-gradient(180deg, #142347 0%, #081326 56%, #111827 100%);
}

.home-city-tour-grid__visual--night::before {
  background: rgba(255, 219, 118, 0.84);
}

.home-city-tour-grid__visual--night .home-city-tour-grid__skyline {
  right: 16rpx;
  bottom: 0;
  width: 36rpx;
  height: 82rpx;
  background: linear-gradient(180deg, #ffd166 0%, #f97316 100%);
  border-radius: 4rpx;
  box-shadow:
    -52rpx 16rpx 0 6rpx rgba(239, 68, 68, 0.84),
    -108rpx 4rpx 0 2rpx rgba(245, 158, 11, 0.8),
    -164rpx 20rpx 0 -2rpx rgba(59, 130, 246, 0.66);
}

.home-city-tour-grid__visual--night .home-city-tour-grid__scene {
  bottom: 6rpx;
  left: 22rpx;
  width: 260rpx;
  height: 24rpx;
  background: rgba(23, 37, 62, 0.92);
  box-shadow: none;
}

.home-city-tour-grid__visual--karst {
  background: linear-gradient(180deg, #d8f3ff 0%, #89c7bd 44%, #305744 100%);
}

.home-city-tour-grid__visual--karst .home-city-tour-grid__skyline {
  right: 18rpx;
  bottom: 0;
  width: 112rpx;
  height: 96rpx;
  background: linear-gradient(90deg, #d7ddc6 0%, #3d5348 100%);
  border-radius: 50% 48% 20rpx 20rpx;
}

.home-city-tour-grid__visual--river,
.home-city-tour-grid__visual--cruise {
  background: linear-gradient(180deg, #d8efff 0%, #6eb4d2 46%, #1f5f83 100%);
}

.home-city-tour-grid__visual--cruise .home-city-tour-grid__scene,
.home-city-tour-grid__visual--river .home-city-tour-grid__scene {
  bottom: 20rpx;
  left: 22rpx;
  width: 190rpx;
  height: 38rpx;
  background: linear-gradient(180deg, #f7fbff 0%, #c6d7e3 100%);
  border-radius: 8rpx 18rpx 22rpx 32rpx;
  box-shadow: none;
}

.home-city-tour-grid__visual--heritage {
  background: linear-gradient(180deg, #fff3d6 0%, #c98736 46%, #56351f 100%);
}

.home-city-tour-grid__depart {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 34rpx;
  padding: 0 12rpx;
  color: #fff;
  font-size: 20rpx;
  font-weight: 800;
  line-height: 34rpx;
  background: rgba(15, 23, 42, 0.66);
  border-radius: 0 0 10rpx;
}

.home-city-tour-grid__badge {
  position: absolute;
  bottom: 0;
  left: 0;
  min-width: 70rpx;
  height: 34rpx;
  padding: 0 10rpx;
  color: #1f2937;
  font-size: 22rpx;
  font-weight: 900;
  line-height: 34rpx;
  background: linear-gradient(135deg, #ffe84a, #ffd21f);
  border-radius: 0 10rpx 0 0;
}

.home-city-tour-grid__body {
  padding: 14rpx 12rpx 16rpx;
}

.home-city-tour-grid__title {
  display: -webkit-box;
  min-height: 78rpx;
  overflow: hidden;
  color: #344054;
  font-size: 29rpx;
  font-weight: 900;
  line-height: 1.34;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.home-city-tour-grid__meta {
  @include text-ellipsis;

  margin-top: 8rpx;
  color: #8b94a3;
  font-size: 22rpx;
}

.home-city-tour-grid__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8rpx;
  min-height: 62rpx;
  margin-top: 12rpx;
}

.home-city-tour-grid__tag {
  @include text-ellipsis;

  max-width: 196rpx;
  height: 30rpx;
  padding: 0 8rpx;
  color: #c66a00;
  font-size: 20rpx;
  font-weight: 700;
  line-height: 30rpx;
  background: #fff8ed;
  border: 1rpx solid rgba(245, 158, 11, 0.58);
  border-radius: 4rpx;
}

.home-city-tour-grid__footer {
  @include flex-between;

  gap: 8rpx;
  min-height: 38rpx;
  margin-top: 8rpx;
}

.home-city-tour-grid__price {
  display: flex;
  align-items: baseline;
  min-width: 0;
  color: #ff6a00;
  font-weight: 900;
}

.home-city-tour-grid__price-symbol {
  font-size: 22rpx;
}

.home-city-tour-grid__price-num {
  font-size: 34rpx;
}

.home-city-tour-grid__price-unit {
  margin-left: 2rpx;
  font-size: 20rpx;
}

.home-city-tour-grid__joined {
  @include text-ellipsis;

  flex: 1;
  min-width: 0;
  color: #8b94a3;
  font-size: 21rpx;
  text-align: right;
}
</style>

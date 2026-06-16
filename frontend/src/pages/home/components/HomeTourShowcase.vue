<template>
  <view class="home-tour-showcase" :class="`home-tour-showcase--${section.tone}`">
    <view class="home-tour-showcase__visual" @tap="$emit('more', section)">
      <BaseImage :src="section.cover" />
      <view class="home-tour-showcase__shade" />
      <view class="home-tour-showcase__hero">
        <view class="home-tour-showcase__eyebrow">{{ section.eyebrow }}</view>
        <view class="home-tour-showcase__title">{{ section.title }}</view>
        <view class="home-tour-showcase__subtitle">{{ section.subtitle }}</view>
      </view>
      <view class="home-tour-showcase__stats">
        <view v-for="stat in section.stats" :key="stat.label" class="home-tour-showcase__stat">
          <text class="home-tour-showcase__stat-value">{{ stat.value }}</text>
          <text class="home-tour-showcase__stat-label">{{ stat.label }}</text>
        </view>
      </view>
    </view>

    <view class="home-tour-showcase__body">
      <view class="home-tour-showcase__top">
        <view>
          <text class="home-tour-showcase__name">{{ section.title }}精选</text>
          <text class="home-tour-showcase__desc">可配置专题产品池</text>
        </view>
        <view class="home-tour-showcase__more" @tap="$emit('more', section)">查看更多</view>
      </view>

      <view class="home-tour-showcase__list">
        <view
          v-for="tour in section.items"
          :key="tour.id"
          class="home-tour-showcase__item"
          @tap="$emit('select', tour)"
        >
          <view class="home-tour-showcase__thumb">
            <BaseImage :src="tour.cover" />
          </view>
          <view class="home-tour-showcase__info">
            <view class="home-tour-showcase__item-title">{{ tour.title }}</view>
            <view class="home-tour-showcase__item-meta">
              {{ tour.departureCity }}出发 · {{ tour.days }}天{{ tour.nights }}晚
            </view>
            <view class="home-tour-showcase__tags">
              <text v-for="tag in tour.tags.slice(0, 2)" :key="tag" class="home-tour-showcase__tag">
                {{ tag }}
              </text>
            </view>
          </view>
          <view class="home-tour-showcase__price">
            <text class="home-tour-showcase__price-symbol">¥</text>
            <text class="home-tour-showcase__price-num">{{ tour.price }}</text>
            <text class="home-tour-showcase__price-unit">起</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import BaseImage from '@/components/base/BaseImage/index.vue'
import type { HomeTourSection } from '@/types/home'
import type { TourProduct } from '@/types/tour'

defineProps<{
  section: HomeTourSection
}>()

defineEmits<{
  more: [section: HomeTourSection]
  select: [tour: TourProduct]
}>()
</script>

<style lang="scss" scoped>
.home-tour-showcase {
  overflow: hidden;
  background: #fff;
  border: 1rpx solid rgba(218, 226, 237, 0.9);
  border-radius: 28rpx;
  box-shadow: 0 18rpx 42rpx rgba(17, 31, 52, 0.07);
}

.home-tour-showcase__visual {
  position: relative;
  height: 318rpx;
  overflow: hidden;
  background: #e7edf4;
}

.home-tour-showcase__shade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(7, 18, 34, 0.7), rgba(7, 18, 34, 0.18) 62%, transparent),
    linear-gradient(180deg, transparent 42%, rgba(7, 18, 34, 0.34));
}

.home-tour-showcase__hero {
  position: absolute;
  top: 42rpx;
  left: $space-lg;
  width: 470rpx;
  color: #fff;
}

.home-tour-showcase__eyebrow {
  display: inline-flex;
  padding: 8rpx 16rpx;
  font-size: $font-size-xs;
  font-weight: 800;
  background: rgba(255, 255, 255, 0.18);
  border: 1rpx solid rgba(255, 255, 255, 0.34);
  border-radius: 999rpx;
}

.home-tour-showcase__title {
  margin-top: $space-sm;
  font-size: 46rpx;
  font-weight: 900;
  line-height: 1.15;
}

.home-tour-showcase__subtitle {
  display: -webkit-box;
  margin-top: $space-xs;
  overflow: hidden;
  font-size: $font-size-sm;
  line-height: 1.55;
  opacity: 0.92;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.home-tour-showcase__stats {
  position: absolute;
  right: $space-md;
  bottom: $space-md;
  left: $space-md;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  overflow: hidden;
  background: rgba(255, 255, 255, 0.92);
  border: 1rpx solid rgba(255, 255, 255, 0.68);
  border-radius: 20rpx;
  box-shadow: 0 14rpx 34rpx rgba(7, 18, 34, 0.16);
}

.home-tour-showcase__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
  padding: 18rpx 8rpx;
}

.home-tour-showcase__stat + .home-tour-showcase__stat {
  border-left: 1rpx solid rgba(219, 226, 236, 0.8);
}

.home-tour-showcase__stat-value {
  @include text-ellipsis;

  max-width: 100%;
  color: #0f172a;
  font-size: $font-size-md;
  font-weight: 900;
}

.home-tour-showcase__stat-label {
  margin-top: 4rpx;
  color: #64748b;
  font-size: 20rpx;
}

.home-tour-showcase__body {
  padding: 24rpx;
}

.home-tour-showcase__top {
  @include flex-between;

  gap: $space-md;
  margin-bottom: $space-sm;
}

.home-tour-showcase__name,
.home-tour-showcase__desc {
  display: block;
}

.home-tour-showcase__name {
  color: #101828;
  font-size: $font-size-md;
  font-weight: 900;
}

.home-tour-showcase__desc {
  margin-top: 6rpx;
  color: #8a94a6;
  font-size: $font-size-xs;
}

.home-tour-showcase__more {
  flex: 0 0 auto;
  padding: 12rpx 20rpx;
  color: #2563eb;
  font-size: $font-size-sm;
  font-weight: 800;
  background: #eff6ff;
  border-radius: 999rpx;
}

.home-tour-showcase__list {
  display: flex;
  flex-direction: column;
  gap: $space-sm;
}

.home-tour-showcase__item {
  display: flex;
  align-items: center;
  min-height: 156rpx;
  padding: 14rpx;
  background: #f8fafc;
  border: 1rpx solid rgba(226, 232, 240, 0.88);
  border-radius: 20rpx;
}

.home-tour-showcase__thumb {
  flex: 0 0 auto;
  width: 132rpx;
  height: 112rpx;
  overflow: hidden;
  background: #e7edf4;
  border-radius: 16rpx;
}

.home-tour-showcase__info {
  flex: 1;
  min-width: 0;
  margin-left: $space-sm;
}

.home-tour-showcase__item-title {
  @include text-ellipsis;

  color: #182230;
  font-size: $font-size-sm;
  font-weight: 900;
}

.home-tour-showcase__item-meta {
  @include text-ellipsis;

  margin-top: 8rpx;
  color: #667085;
  font-size: $font-size-xs;
}

.home-tour-showcase__tags {
  display: flex;
  gap: 8rpx;
  margin-top: 12rpx;
  overflow: hidden;
}

.home-tour-showcase__tag {
  @include text-ellipsis;

  max-width: 132rpx;
  padding: 5rpx 10rpx;
  color: #2563eb;
  font-size: 20rpx;
  background: #eef4ff;
  border-radius: 999rpx;
}

.home-tour-showcase__price {
  display: flex;
  flex: 0 0 auto;
  align-items: baseline;
  margin-left: $space-xs;
  color: #e5484d;
  font-weight: 900;
}

.home-tour-showcase__price-symbol {
  font-size: 20rpx;
}

.home-tour-showcase__price-num {
  font-size: 34rpx;
}

.home-tour-showcase__price-unit {
  margin-left: 2rpx;
  color: #98a2b3;
  font-size: 20rpx;
  font-weight: 700;
}

.home-tour-showcase--ocean .home-tour-showcase__more,
.home-tour-showcase--ocean .home-tour-showcase__tag {
  color: #0369a1;
  background: #e0f2fe;
}

.home-tour-showcase--river .home-tour-showcase__more,
.home-tour-showcase--river .home-tour-showcase__tag {
  color: #0f766e;
  background: #e6fffb;
}

.home-tour-showcase--forest .home-tour-showcase__more,
.home-tour-showcase--forest .home-tour-showcase__tag {
  color: #15803d;
  background: #ecfdf3;
}
</style>

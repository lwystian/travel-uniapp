<template>
  <view class="home-brand-matrix">
    <HomeSectionHeader title="主题企划" subtitle="从专题内容到可售线路的运营入口" tag="灵感" />
    <view class="home-brand-matrix__grid">
      <view
        v-for="item in items"
        :key="item.id"
        class="home-brand-matrix__item"
        :class="{ 'home-brand-matrix__item--large': item.large }"
        @tap="$emit('select', item)"
      >
        <BaseImage :src="item.cover" />
        <view class="home-brand-matrix__shade" />
        <view class="home-brand-matrix__content">
          <text class="home-brand-matrix__title">{{ item.title }}</text>
          <text class="home-brand-matrix__subtitle">{{ item.subtitle }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import BaseImage from '@/components/base/BaseImage/index.vue'
import type { HomeBrandActivity } from '@/types/home'
import HomeSectionHeader from './HomeSectionHeader.vue'

defineProps<{
  items: HomeBrandActivity[]
}>()

defineEmits<{
  select: [target: HomeBrandActivity]
}>()
</script>

<style lang="scss" scoped>
.home-brand-matrix {
  margin: $space-lg $space-md 0;
  padding: 26rpx;
  background: #fff;
  border: 1rpx solid rgba(218, 226, 237, 0.88);
  border-radius: 28rpx;
  box-shadow: 0 18rpx 42rpx rgba(17, 31, 52, 0.06);
}

.home-brand-matrix__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: $space-sm;
}

.home-brand-matrix__item {
  position: relative;
  height: 168rpx;
  overflow: hidden;
  background: #e7edf4;
  border-radius: 22rpx;
}

.home-brand-matrix__item--large {
  height: 230rpx;
  grid-row: span 2;
}

.home-brand-matrix__shade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(15, 23, 42, 0.04), rgba(15, 23, 42, 0.62)),
    linear-gradient(90deg, rgba(15, 23, 42, 0.34), transparent);
}

.home-brand-matrix__content {
  position: absolute;
  right: 18rpx;
  bottom: 18rpx;
  left: 18rpx;
  color: #fff;
}

.home-brand-matrix__title {
  @include text-ellipsis;

  display: block;
  font-size: 28rpx;
  font-weight: 900;
}

.home-brand-matrix__subtitle {
  @include text-ellipsis;

  display: block;
  margin-top: 6rpx;
  font-size: 21rpx;
  opacity: 0.88;
}
</style>

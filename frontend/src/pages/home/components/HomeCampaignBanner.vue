<template>
  <scroll-view class="home-campaign-banner" scroll-x>
    <view class="home-campaign-banner__inner">
      <view
        v-for="item in items"
        :key="item.id"
        class="home-campaign-banner__card"
        @tap="$emit('select', item)"
      >
        <BaseImage :src="item.image" />
        <view class="home-campaign-banner__shade" />
        <view class="home-campaign-banner__content">
          <text class="home-campaign-banner__label">精选专题</text>
          <text class="home-campaign-banner__title">{{ item.title }}</text>
          <text class="home-campaign-banner__subtitle">{{ item.subtitle }}</text>
        </view>
        <view class="home-campaign-banner__action">查看</view>
      </view>
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import BaseImage from '@/components/base/BaseImage/index.vue'
import type { HomeMarketingBanner } from '@/types/home'

defineProps<{
  items: HomeMarketingBanner[]
}>()

defineEmits<{
  select: [target: HomeMarketingBanner]
}>()
</script>

<style lang="scss" scoped>
.home-campaign-banner {
  width: 100%;
  margin-top: $space-lg;
  white-space: nowrap;
}

.home-campaign-banner__inner {
  display: inline-flex;
  gap: $space-sm;
  padding: 0 $space-md;
}

.home-campaign-banner__card {
  position: relative;
  box-sizing: border-box;
  width: 620rpx;
  height: 196rpx;
  overflow: hidden;
  white-space: normal;
  background: #dfe8f1;
  border-radius: 26rpx;
  box-shadow: 0 18rpx 42rpx rgba(17, 31, 52, 0.09);
}

.home-campaign-banner__shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(12, 24, 44, 0.72),
    rgba(12, 24, 44, 0.2) 62%,
    transparent
  );
}

.home-campaign-banner__content {
  position: absolute;
  top: 26rpx;
  left: 26rpx;
  display: flex;
  width: 390rpx;
  flex-direction: column;
  color: #fff;
}

.home-campaign-banner__label {
  align-self: flex-start;
  padding: 6rpx 12rpx;
  font-size: 20rpx;
  font-weight: 800;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 999rpx;
}

.home-campaign-banner__title {
  @include text-ellipsis;

  margin-top: 14rpx;
  font-size: 34rpx;
  font-weight: 900;
}

.home-campaign-banner__subtitle {
  @include text-ellipsis;

  margin-top: 8rpx;
  font-size: $font-size-sm;
  opacity: 0.9;
}

.home-campaign-banner__action {
  position: absolute;
  right: 24rpx;
  bottom: 24rpx;
  padding: 10rpx 18rpx;
  color: #172033;
  font-size: $font-size-sm;
  font-weight: 900;
  background: #fff;
  border-radius: 999rpx;
}
</style>

<template>
  <view class="sanxia-activity-banner">
    <view class="sanxia-activity-banner__title">热门活动</view>
    <swiper
      class="sanxia-activity-banner__swiper"
      indicator-dots
      autoplay
      circular
      :interval="4200"
      :duration="450"
      indicator-color="rgba(32, 42, 56, 0.16)"
      indicator-active-color="#18cdd2"
    >
      <swiper-item v-for="banner in banners" :key="banner.id">
        <view class="sanxia-activity-banner__item" @tap="$emit('select', banner)">
          <BaseImage :src="banner.cover" />
          <view class="sanxia-activity-banner__copy">
            <text class="sanxia-activity-banner__headline">{{ banner.title }}</text>
            <text class="sanxia-activity-banner__subtitle">{{ banner.subtitle }}</text>
          </view>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup lang="ts">
import BaseImage from '@/components/base/BaseImage/index.vue'
import type { SanxiaActivityBanner } from '@/types/sanxia'

defineProps<{
  banners: SanxiaActivityBanner[]
}>()

defineEmits<{
  select: [banner: SanxiaActivityBanner]
}>()
</script>

<style lang="scss" scoped>
.sanxia-activity-banner {
  padding: 26rpx $space-md 30rpx;
  background: #f4f6fb;
}

.sanxia-activity-banner__title {
  margin-bottom: 20rpx;
  color: #151b26;
  font-size: 32rpx;
  font-weight: 900;
}

.sanxia-activity-banner__swiper {
  height: 186rpx;
  overflow: hidden;
  border-radius: 18rpx;
}

.sanxia-activity-banner__item {
  position: relative;
  height: 168rpx;
  overflow: hidden;
  border-radius: 18rpx;
}

.sanxia-activity-banner__copy {
  position: absolute;
  top: 30rpx;
  left: 28rpx;
  display: flex;
  flex-direction: column;
  gap: 10rpx;
  max-width: 360rpx;
}

.sanxia-activity-banner__headline {
  color: #ff6a1a;
  font-size: 34rpx;
  font-weight: 900;
}

.sanxia-activity-banner__subtitle {
  color: #5d6675;
  font-size: 22rpx;
  line-height: 1.4;
}
</style>

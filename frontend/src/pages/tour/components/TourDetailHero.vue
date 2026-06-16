<template>
  <view class="tour-detail-hero">
    <swiper
      class="tour-detail-hero__swiper"
      circular
      :autoplay="images.length > 1"
      :current="activeIndex"
      :duration="360"
      :interval="3500"
      :indicator-dots="false"
      @change="handleChange"
    >
      <swiper-item v-for="image in images" :key="image">
        <view class="tour-detail-hero__slide" @tap="$emit('preview', image)">
          <BaseImage :src="image" />
        </view>
      </swiper-item>
    </swiper>

    <view class="tour-detail-hero__mask" />

    <view class="tour-detail-hero__content">
      <view class="tour-detail-hero__brand">山城精选</view>
      <view class="tour-detail-hero__title">{{ title }}</view>
      <view class="tour-detail-hero__meta">{{ categoryLabel }}</view>
    </view>

    <view v-if="images.length > 1" class="tour-detail-hero__counter">
      {{ activeIndex + 1 }} / {{ images.length }}
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseImage from '@/components/base/BaseImage/index.vue'

withDefaults(
  defineProps<{
    title: string
    categoryLabel: string
    images: string[]
  }>(),
  {
    images: () => []
  }
)

defineEmits<{
  preview: [image: string]
}>()

const activeIndex = ref(0)

function handleChange(event: { detail: { current: number } }) {
  activeIndex.value = event.detail.current
}
</script>

<style lang="scss" scoped>
.tour-detail-hero {
  position: relative;
  height: 430rpx;
  overflow: hidden;
  background: #153b4e;
}

.tour-detail-hero__swiper,
.tour-detail-hero__slide {
  width: 100%;
  height: 430rpx;
}

.tour-detail-hero__slide {
  position: relative;
  background: linear-gradient(135deg, rgba(40, 120, 124, 0.42), rgba(15, 53, 69, 0.68)), #d8edf5;
}

.tour-detail-hero__mask {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(4, 20, 33, 0.36) 0%,
      rgba(4, 20, 33, 0.08) 42%,
      rgba(4, 20, 33, 0.74) 100%
    ),
    linear-gradient(90deg, rgba(8, 28, 41, 0.3), transparent 58%);
}

.tour-detail-hero__content {
  position: absolute;
  right: 28rpx;
  bottom: 28rpx;
  left: 28rpx;
  color: #fff;
}

.tour-detail-hero__brand {
  display: inline-flex;
  align-items: center;
  height: 42rpx;
  padding: 0 16rpx;
  font-size: 22rpx;
  font-weight: 900;
  background: rgba(255, 82, 43, 0.92);
  border-radius: 8rpx;
}

.tour-detail-hero__title {
  display: -webkit-box;
  max-width: 580rpx;
  margin-top: 14rpx;
  overflow: hidden;
  font-size: 50rpx;
  font-weight: 900;
  line-height: 1.14;
  text-shadow: 0 6rpx 18rpx rgba(8, 18, 28, 0.32);
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.tour-detail-hero__meta {
  @include text-ellipsis;

  max-width: 520rpx;
  margin-top: 16rpx;
  font-size: 24rpx;
  font-weight: 700;
}

.tour-detail-hero__counter {
  position: absolute;
  right: 24rpx;
  bottom: 30rpx;
  min-width: 82rpx;
  height: 44rpx;
  color: #fff;
  font-size: 22rpx;
  font-weight: 800;
  line-height: 44rpx;
  text-align: center;
  background: rgba(4, 24, 32, 0.7);
  border-radius: 999rpx;
}
</style>

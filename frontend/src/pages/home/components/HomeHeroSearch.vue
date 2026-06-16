<template>
  <view class="home-hero-search" :style="rootStyle">
    <view class="home-hero-search__top" :style="topStyle">
      <view class="home-hero-search__logo">
        <view class="home-hero-search__logo-mark">
          <view class="home-hero-search__logo-route" />
        </view>
      </view>

      <view class="home-hero-search__search" @tap="$emit('search')">
        <view class="home-hero-search__search-icon" />
        <text class="home-hero-search__placeholder">{{ hero.searchPlaceholder }}</text>
        <text class="home-hero-search__button">{{ hero.searchActionText || '搜索' }}</text>
      </view>
    </view>

    <swiper
      class="home-hero-search__swiper"
      circular
      autoplay
      :current="activeIndex"
      :duration="420"
      :interval="3600"
      :indicator-dots="false"
      @change="handleSwiperChange"
    >
      <swiper-item v-for="slide in slides" :key="slide.id">
        <view class="home-hero-search__banner" @tap="$emit('select', slide)">
          <BaseImage v-if="slide.image" :src="slide.image" />
          <view
            v-else
            class="home-hero-search__banner-visual"
            :class="`home-hero-search__banner-visual--${slide.visualTone || 'cruise'}`"
          >
            <view class="home-hero-search__scene-sun" />
            <view class="home-hero-search__scene-ship">
              <view class="home-hero-search__scene-deck home-hero-search__scene-deck--top" />
              <view class="home-hero-search__scene-deck home-hero-search__scene-deck--mid" />
              <view class="home-hero-search__scene-body" />
            </view>
            <view class="home-hero-search__scene-mountain" />
            <view class="home-hero-search__scene-wave home-hero-search__scene-wave--one" />
            <view class="home-hero-search__scene-wave home-hero-search__scene-wave--two" />
          </view>
          <view class="home-hero-search__banner-mask" />
          <view class="home-hero-search__banner-content">
            <view v-if="slide.highlightTag" class="home-hero-search__banner-badge">
              {{ slide.highlightTag }}
            </view>
            <text class="home-hero-search__banner-title">{{ slide.title }}</text>
            <text class="home-hero-search__banner-subtitle">{{ slide.subtitle }}</text>
          </view>
          <view class="home-hero-search__banner-action">
            <text>{{ slide.actionText || '查看详情' }}</text>
            <view class="home-hero-search__banner-arrow" />
          </view>
        </view>
      </swiper-item>
    </swiper>

    <view class="home-hero-search__dots">
      <text
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="home-hero-search__dot"
        :class="{ 'home-hero-search__dot--active': index === activeIndex }"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import BaseImage from '@/components/base/BaseImage/index.vue'
import type { HomeHeroBanner } from '@/types/home'
import type { MenuButtonLayout } from '@/types/platform'

const props = withDefaults(
  defineProps<{
    hero: HomeHeroBanner
    banners?: HomeHeroBanner[]
    menuButtonLayout?: MenuButtonLayout
  }>(),
  {
    banners: () => [],
    menuButtonLayout: undefined
  }
)

defineEmits<{
  search: []
  select: [target: HomeHeroBanner]
}>()

const activeIndex = ref(0)
const slides = computed(() => (props.banners.length ? props.banners : [props.hero]))
const rootStyle = computed(() => {
  const layout = props.menuButtonLayout
  if (!layout) return ''
  const navHeight = layout.top + layout.height + 8
  return `--home-hero-nav-space:${navHeight}px`
})
const topStyle = computed(() => {
  const layout = props.menuButtonLayout
  if (!layout) return ''
  const rightReserve = (layout.width || 88) + 22
  const navHeight = layout.top + layout.height + 8
  return [
    `height:${navHeight}px`,
    `--home-nav-top:${layout.top}px`,
    `--home-nav-height:${layout.height}px`,
    `--home-nav-right-reserve:${rightReserve}px`
  ].join(';')
})

function handleSwiperChange(event: { detail: { current: number } }) {
  activeIndex.value = event.detail.current
}
</script>

<style lang="scss" scoped>
.home-hero-search {
  position: relative;
  padding: 0 $space-md 34rpx;
  padding-top: calc(var(--home-hero-nav-space, 84px) + 22rpx);
  overflow: hidden;
  background:
    radial-gradient(circle at 12% 6%, rgba(255, 255, 255, 0.72) 0, transparent 160rpx),
    radial-gradient(circle at 90% 12%, rgba(45, 212, 191, 0.24) 0, transparent 190rpx),
    linear-gradient(180deg, #dff8f4 0%, #c9efe9 44%, #effaf8 100%);
}

.home-hero-search::before,
.home-hero-search::after {
  position: absolute;
  width: 210rpx;
  height: 210rpx;
  background: rgba(255, 255, 255, 0.42);
  border-radius: 50%;
  content: '';
}

.home-hero-search::before {
  top: -78rpx;
  left: 142rpx;
}

.home-hero-search::after {
  top: 42rpx;
  right: -84rpx;
}

.home-hero-search__top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  display: flex;
  align-items: flex-start;
  gap: 14rpx;
  box-sizing: border-box;
  padding-top: var(--home-nav-top, 22px);
  padding-right: var(--home-nav-right-reserve, 110px);
  padding-left: $space-md;
  background:
    radial-gradient(circle at 8% 0, rgba(255, 255, 255, 0.76) 0, transparent 136rpx),
    linear-gradient(180deg, rgba(223, 248, 244, 0.98) 0%, rgba(210, 242, 236, 0.96) 100%);
  box-shadow: 0 1rpx 0 rgba(15, 118, 110, 0.06);
}

.home-hero-search__logo {
  @include flex-center;

  flex: 0 0 auto;
  width: var(--home-nav-height, 34px);
  height: var(--home-nav-height, 34px);
}

.home-hero-search__logo-mark {
  @include flex-center;

  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background:
    radial-gradient(circle at 34% 30%, #fff 0 12rpx, transparent 13rpx),
    linear-gradient(135deg, #14b8a6 0%, #0f766e 100%);
  border-radius: 12rpx;
  box-shadow: 0 8rpx 18rpx rgba(15, 118, 110, 0.22);
}

.home-hero-search__logo-route {
  position: absolute;
  right: 10rpx;
  bottom: 9rpx;
  left: 12rpx;
  height: 4rpx;
  background: rgba(255, 255, 255, 0.84);
  border-radius: 999rpx;
}

.home-hero-search__logo-route::before,
.home-hero-search__logo-route::after {
  position: absolute;
  top: -5rpx;
  width: 8rpx;
  height: 8rpx;
  background: #fff;
  border-radius: 50%;
  content: '';
}

.home-hero-search__logo-route::before {
  left: -2rpx;
}

.home-hero-search__logo-route::after {
  right: -2rpx;
}

.home-hero-search__search {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  flex: 1;
  height: var(--home-nav-height, 34px);
  min-width: 0;
  padding: 0 8rpx 0 22rpx;
  background: rgba(255, 255, 255, 0.94);
  border-radius: 999rpx;
  box-shadow:
    0 10rpx 22rpx rgba(15, 118, 110, 0.12),
    inset 0 0 0 1rpx rgba(255, 255, 255, 0.9);
}

.home-hero-search__search-icon {
  position: relative;
  width: 22rpx;
  height: 22rpx;
  border: 3rpx solid #8b98a8;
  border-radius: 50%;
}

.home-hero-search__search-icon::after {
  position: absolute;
  right: -9rpx;
  bottom: -7rpx;
  width: 13rpx;
  height: 3rpx;
  background: #8b98a8;
  border-radius: 999rpx;
  transform: rotate(45deg);
  content: '';
}

.home-hero-search__placeholder {
  @include text-ellipsis;

  flex: 1;
  margin-left: 16rpx;
  color: #788596;
  font-size: 24rpx;
  font-weight: 700;
}

.home-hero-search__button {
  flex: 0 0 auto;
  height: calc(var(--home-nav-height, 34px) - 8px);
  min-width: 70rpx;
  padding: 0 16rpx;
  color: #fff;
  font-size: 22rpx;
  font-weight: 800;
  line-height: calc(var(--home-nav-height, 34px) - 8px);
  text-align: center;
  background: linear-gradient(135deg, #11a191, #0f766e);
  border-radius: 999rpx;
}

.home-hero-search__swiper {
  position: relative;
  z-index: 2;
  height: 250rpx;
  margin-top: 0;
  overflow: hidden;
  border-radius: 16rpx;
  box-shadow: 0 18rpx 38rpx rgba(5, 32, 45, 0.24);
}

.home-hero-search__banner {
  position: relative;
  height: 250rpx;
  overflow: hidden;
  background: #9fc6e4;
  border-radius: 16rpx;
}

.home-hero-search__banner-visual {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background:
    linear-gradient(
      180deg,
      rgba(255, 206, 156, 0.32) 0%,
      rgba(132, 191, 225, 0.24) 38%,
      rgba(41, 123, 180, 0.92) 100%
    ),
    linear-gradient(115deg, #d7e9f5 0%, #8ebdda 45%, #1b658f 100%);
}

.home-hero-search__banner-visual--karst {
  background: linear-gradient(135deg, #c8f4d8 0%, #6dc28d 46%, #1f6a49 100%);
}

.home-hero-search__banner-visual--river {
  background: linear-gradient(135deg, #d8f4ff 0%, #6fb6d7 48%, #1d6990 100%);
}

.home-hero-search__scene-sun {
  position: absolute;
  top: 38rpx;
  left: 270rpx;
  width: 62rpx;
  height: 62rpx;
  background: rgba(255, 242, 196, 0.76);
  border-radius: 50%;
}

.home-hero-search__scene-ship {
  position: absolute;
  bottom: 40rpx;
  left: 34rpx;
  width: 360rpx;
  height: 128rpx;
  transform: skewX(-8deg);
}

.home-hero-search__scene-deck,
.home-hero-search__scene-body {
  position: absolute;
  left: 0;
  background: rgba(244, 248, 251, 0.92);
  box-shadow: 0 4rpx 0 rgba(22, 56, 86, 0.1);
}

.home-hero-search__scene-deck--top {
  bottom: 82rpx;
  left: 40rpx;
  width: 230rpx;
  height: 26rpx;
  border-radius: 16rpx 24rpx 4rpx 4rpx;
}

.home-hero-search__scene-deck--mid {
  bottom: 48rpx;
  left: 22rpx;
  width: 292rpx;
  height: 36rpx;
  border-radius: 18rpx 32rpx 6rpx 6rpx;
}

.home-hero-search__scene-body {
  bottom: 4rpx;
  width: 346rpx;
  height: 54rpx;
  background: linear-gradient(180deg, #f4f8fb 0%, #bcccd7 100%);
  border-radius: 10rpx 26rpx 46rpx 66rpx;
}

.home-hero-search__scene-body::after {
  position: absolute;
  right: 28rpx;
  bottom: 8rpx;
  width: 122rpx;
  height: 10rpx;
  background: linear-gradient(90deg, #f59e0b, #ea580c);
  border-radius: 999rpx;
  content: '';
}

.home-hero-search__scene-mountain {
  position: absolute;
  right: -52rpx;
  bottom: 36rpx;
  width: 260rpx;
  height: 136rpx;
  background: rgba(27, 82, 68, 0.34);
  border-radius: 50% 46% 0 0;
}

.home-hero-search__scene-wave {
  position: absolute;
  right: -26rpx;
  left: -26rpx;
  height: 28rpx;
  background: rgba(255, 255, 255, 0.38);
  border-radius: 50%;
}

.home-hero-search__scene-wave--one {
  bottom: 32rpx;
}

.home-hero-search__scene-wave--two {
  bottom: 10rpx;
  opacity: 0.42;
}

.home-hero-search__banner-mask {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(9, 28, 48, 0.2), rgba(7, 18, 34, 0.04) 48%, rgba(7, 18, 34, 0.34)),
    linear-gradient(180deg, transparent 42%, rgba(7, 18, 34, 0.24));
}

.home-hero-search__banner-content {
  position: absolute;
  top: 36rpx;
  right: 32rpx;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 340rpx;
  color: #fff;
  text-align: right;
}

.home-hero-search__banner-badge {
  padding: 5rpx 16rpx;
  color: #28415b;
  font-size: 21rpx;
  font-weight: 800;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 999rpx;
}

.home-hero-search__banner-title {
  display: block;
  max-width: 100%;
  margin-top: 10rpx;
  font-size: 36rpx;
  font-weight: 900;
  line-height: 1.15;
  text-shadow: 0 4rpx 10rpx rgba(15, 23, 42, 0.24);
}

.home-hero-search__banner-subtitle {
  display: -webkit-box;
  max-width: 318rpx;
  margin-top: 8rpx;
  overflow: hidden;
  font-size: 22rpx;
  line-height: 1.4;
  opacity: 0.92;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.home-hero-search__banner-action {
  position: absolute;
  right: 30rpx;
  bottom: 30rpx;
  display: flex;
  align-items: center;
  min-height: 42rpx;
  padding: 0 16rpx;
  color: #0f3d61;
  font-size: 22rpx;
  font-weight: 900;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 999rpx;
}

.home-hero-search__banner-arrow {
  width: 10rpx;
  height: 10rpx;
  margin-left: 8rpx;
  border-top: 2rpx solid #0f3d61;
  border-right: 2rpx solid #0f3d61;
  transform: rotate(45deg);
}

.home-hero-search__dots {
  position: absolute;
  bottom: 16rpx;
  left: 0;
  z-index: 4;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 8rpx;
}

.home-hero-search__dot {
  width: 9rpx;
  height: 9rpx;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
}

.home-hero-search__dot--active {
  width: 24rpx;
  background: #fff;
  border-radius: 999rpx;
}
</style>

<template>
  <view class="tour-detail-nav" :class="{ 'tour-detail-nav--solid': solid }" :style="navStyle">
    <view class="tour-detail-nav__bar">
      <button class="tour-detail-nav__back" @tap="$emit('back')">
        <text>‹</text>
      </button>
      <view class="tour-detail-nav__title">{{ title }}</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { MenuButtonLayout } from '@/types/platform'

const props = withDefaults(
  defineProps<{
    title: string
    solid?: boolean
    menuButtonLayout?: MenuButtonLayout
  }>(),
  {
    solid: false,
    menuButtonLayout: undefined
  }
)

defineEmits<{
  back: []
}>()

const navStyle = computed(() => {
  const layout = props.menuButtonLayout
  if (!layout) return ''
  const navHeight = layout.top + layout.height + 8
  const rightReserve = (layout.width || 88) + 18
  return [
    `height:${navHeight}px`,
    `--nav-content-top:${layout.top}px`,
    `--nav-content-height:${layout.height}px`,
    `--nav-right-reserve:${rightReserve}px`
  ].join(';')
})
</script>

<style lang="scss" scoped>
.tour-detail-nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 60;
  background: rgba(255, 255, 255, 0);
  transition:
    background 0.18s ease,
    box-shadow 0.18s ease;
}

.tour-detail-nav--solid {
  background: #fff;
  box-shadow: 0 1rpx 0 rgba(16, 24, 40, 0.08);
}

.tour-detail-nav__bar {
  position: absolute;
  top: var(--nav-content-top, 22px);
  right: var(--nav-right-reserve, 106px);
  left: 18rpx;
  display: flex;
  align-items: center;
  height: var(--nav-content-height, 34px);
}

.tour-detail-nav__back {
  @include flex-center;

  flex: 0 0 auto;
  width: var(--nav-content-height, 34px);
  height: var(--nav-content-height, 34px);
  margin: 0;
  padding: 0;
  color: #111827;
  background: rgba(255, 255, 255, 0.9);
  border: 1rpx solid rgba(229, 231, 235, 0.88);
  border-radius: 50%;
  box-shadow: 0 8rpx 18rpx rgba(15, 23, 42, 0.12);
}

.tour-detail-nav__back::after {
  border: 0;
}

.tour-detail-nav__back text {
  display: block;
  margin-top: -2rpx;
  font-size: 46rpx;
  font-weight: 700;
  line-height: 1;
}

.tour-detail-nav--solid .tour-detail-nav__back {
  background: #fff;
  box-shadow: none;
}

.tour-detail-nav__title {
  @include text-ellipsis;

  margin-left: 24rpx;
  color: #111827;
  font-size: 34rpx;
  font-weight: 900;
  opacity: 0;
  transition: opacity 0.16s ease;
}

.tour-detail-nav--solid .tour-detail-nav__title {
  opacity: 1;
}
</style>

<template>
  <view class="train-hero">
    <image class="train-hero__bg" :src="hero.backgroundImage" mode="aspectFill" />
    <view class="train-hero__shade"></view>
    <view class="train-hero__copy">
      <text class="train-hero__eyebrow">{{ hero.eyebrow }}</text>
      <text class="train-hero__title">{{ hero.title }}</text>
      <text class="train-hero__subtitle">{{ hero.subtitle }}</text>
    </view>
    <view class="train-hero__search">
      <text class="train-hero__search-icon"></text>
      <input
        class="train-hero__input"
        :value="modelValue"
        :placeholder="hero.searchPlaceholder"
        confirm-type="search"
        placeholder-class="train-hero__placeholder"
        @input="handleInput"
        @confirm="$emit('search')"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
import type { TrainHeroData } from '@/types/train'

defineProps<{
  hero: TrainHeroData
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  search: []
}>()

function handleInput(event: Event) {
  const detail = (event as unknown as { detail: { value: string } }).detail
  emit('update:modelValue', detail.value)
}
</script>

<style lang="scss" scoped>
.train-hero {
  position: relative;
  min-height: 500rpx;
  overflow: hidden;
  border-radius: 0 0 22rpx 22rpx;
  background: linear-gradient(180deg, #b9e6fb 0%, #eff6ff 100%);
}

.train-hero__bg,
.train-hero__shade {
  position: absolute;
  inset: 0;
}

.train-hero__bg {
  width: 100%;
  height: 100%;
}

.train-hero__shade {
  background:
    linear-gradient(
      180deg,
      rgba(3, 105, 161, 0.08) 0%,
      rgba(14, 165, 233, 0.08) 44%,
      rgba(15, 23, 42, 0.22) 100%
    ),
    linear-gradient(90deg, rgba(2, 132, 199, 0.08), rgba(255, 255, 255, 0.04));
}

.train-hero__copy {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 382rpx;
  padding: 26rpx 38rpx 0;
  text-align: center;
}

.train-hero__eyebrow {
  display: block;
  color: rgba(255, 245, 94, 0.96);
  font-size: 64rpx;
  font-weight: 500;
  line-height: 1;
  transform: rotate(-6deg);
}

.train-hero__title {
  display: block;
  margin-top: 8rpx;
  color: #fff;
  font-size: 48rpx;
  font-weight: 900;
  line-height: 1.14;
  text-shadow: 0 6rpx 18rpx rgba(15, 23, 42, 0.32);
}

.train-hero__subtitle {
  display: inline-block;
  margin-top: 14rpx;
  padding: 8rpx 20rpx;
  color: #fff;
  font-size: 28rpx;
  font-weight: 800;
  background: rgba(2, 132, 199, 0.86);
  border-radius: 999rpx;
}

.train-hero__search {
  position: absolute;
  right: 24rpx;
  bottom: 22rpx;
  left: 24rpx;
  z-index: 3;
  display: flex;
  align-items: center;
  height: 78rpx;
  padding: 0 28rpx;
  background: rgba(255, 255, 255, 0.88);
  border: 1rpx solid rgba(255, 255, 255, 0.78);
  border-radius: 999rpx;
  box-shadow: 0 18rpx 42rpx rgba(15, 23, 42, 0.16);
}

.train-hero__search-icon {
  position: relative;
  width: 26rpx;
  height: 26rpx;
  margin-right: 18rpx;
  border: 4rpx solid #8a94a6;
  border-radius: 50%;
}

.train-hero__search-icon::after {
  position: absolute;
  right: -8rpx;
  bottom: -5rpx;
  width: 12rpx;
  height: 4rpx;
  background: #8a94a6;
  border-radius: 999rpx;
  content: '';
  transform: rotate(45deg);
}

.train-hero__input {
  flex: 1;
  min-width: 0;
  color: #111827;
  font-size: 26rpx;
  text-align: center;
}

.train-hero__placeholder {
  color: #a0a8b4;
}
</style>

<template>
  <view class="home-section-header" :class="{ 'home-section-header--blue': tone === 'blue' }">
    <view class="home-section-header__main">
      <view class="home-section-header__title">{{ title }}</view>
      <view v-if="tag" class="home-section-header__tag">{{ tag }}</view>
      <view v-if="subtitle" class="home-section-header__subtitle">{{ subtitle }}</view>
    </view>
    <view v-if="moreText" class="home-section-header__more" @tap="$emit('more')">
      <text>{{ moreText }}</text>
      <text class="home-section-header__more-arrow">›</text>
    </view>
  </view>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    tag?: string
    moreText?: string
    tone?: 'cream' | 'blue'
  }>(),
  {
    subtitle: '',
    tag: '',
    moreText: '',
    tone: 'cream'
  }
)

defineEmits<{
  more: []
}>()
</script>

<style lang="scss" scoped>
.home-section-header {
  @include flex-between;

  position: relative;
  align-items: center;
  padding: 0 26rpx 22rpx 0;
}

.home-section-header__main {
  position: relative;
  min-width: 0;
  padding-top: 4rpx;
  padding-right: 58rpx;
}

.home-section-header__title {
  position: relative;
  color: #101828;
  font-size: 36rpx;
  font-weight: 900;
  line-height: 1.2;
}

.home-section-header__tag {
  display: inline-flex;
  align-items: center;
  min-height: 38rpx;
  margin-top: 18rpx;
  flex: 0 0 auto;
  padding: 0 16rpx;
  color: #0f766e;
  font-size: 22rpx;
  font-weight: 800;
  background: #e8faf8;
  border-radius: 6rpx;
}

.home-section-header--blue .home-section-header__tag {
  color: #0f766e;
  background: #dff6f2;
}

.home-section-header__subtitle {
  @include text-ellipsis;

  max-width: 520rpx;
  margin-top: 8rpx;
  color: #8a94a6;
  font-size: $font-size-xs;
}

.home-section-header__more {
  @include flex-center;

  flex: 0 0 auto;
  min-width: 118rpx;
  height: 42rpx;
  padding: 0 18rpx;
  color: #6b7280;
  font-size: 23rpx;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.9);
  border: 1rpx solid rgba(225, 232, 238, 0.86);
  border-radius: 999rpx;
}

.home-section-header__more-arrow {
  margin-left: 8rpx;
  color: #667085;
  font-size: 34rpx;
  line-height: 1;
}
</style>

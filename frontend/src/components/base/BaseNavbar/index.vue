<template>
  <view class="base-navbar">
    <view v-if="showBack" class="base-navbar__back" @tap="handleBack">‹</view>
    <view class="base-navbar__title">{{ title }}</view>
    <view class="base-navbar__right">
      <slot name="right" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { router } from '@/utils/router'

withDefaults(
  defineProps<{
    title: string
    showBack?: boolean
  }>(),
  {
    showBack: false
  }
)

function handleBack() {
  router.navigateBack()
}
</script>

<style lang="scss" scoped>
.base-navbar {
  @include flex-between;

  min-height: 88rpx;
  padding: 0 $space-md;
  background: $color-bg-white;
  border-bottom: 1rpx solid $color-border;
}

.base-navbar__back,
.base-navbar__right {
  width: 80rpx;
  color: $color-text;
  font-size: 44rpx;
}

.base-navbar__title {
  flex: 1;
  font-size: $font-size-lg;
  font-weight: 600;
  text-align: center;
}

.base-navbar__right {
  text-align: right;
}
</style>

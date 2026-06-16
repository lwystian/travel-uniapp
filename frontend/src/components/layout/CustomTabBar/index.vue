<template>
  <view class="custom-tab-bar">
    <slot />
  </view>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.custom-tab-bar {
  @include flex-between;

  min-height: 96rpx;
  padding: $space-sm $space-lg calc(#{$space-sm} + env(safe-area-inset-bottom));
  background: $color-bg-white;
  border-top: 1rpx solid $color-border;
}
</style>

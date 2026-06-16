<template>
  <view class="base-loading">
    <view class="base-loading__dot" />
    <text>{{ text }}</text>
  </view>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    text?: string
  }>(),
  {
    text: '加载中'
  }
)
</script>

<style lang="scss" scoped>
.base-loading {
  @include flex-center;

  gap: $space-sm;
  padding: $space-lg 0;
  color: $color-text-muted;
  font-size: $font-size-sm;
}

.base-loading__dot {
  width: 20rpx;
  height: 20rpx;
  background: $color-primary;
  border-radius: 50%;
}
</style>

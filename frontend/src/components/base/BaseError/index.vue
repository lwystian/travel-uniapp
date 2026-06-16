<template>
  <view class="base-error">
    <text class="base-error__title">{{ title }}</text>
    <text class="base-error__desc">{{ description }}</text>
    <button class="base-error__button" @tap="$emit('retry')">重试</button>
  </view>
</template>

<script setup lang="ts">
defineEmits<{
  retry: []
}>()

withDefaults(
  defineProps<{
    title?: string
    description?: string
  }>(),
  {
    title: '加载失败',
    description: '请检查网络后重试'
  }
)
</script>

<style lang="scss" scoped>
.base-error {
  @include flex-center;

  min-height: 260rpx;
  flex-direction: column;
  gap: $space-sm;
  color: $color-text-secondary;
}

.base-error__title {
  font-size: $font-size-lg;
  font-weight: 600;
}

.base-error__desc {
  color: $color-text-muted;
  font-size: $font-size-sm;
}

.base-error__button {
  min-width: 144rpx;
  height: 56rpx;
  color: #fff;
  font-size: $font-size-sm;
  line-height: 56rpx;
  background: $color-primary;
  border-radius: $radius-sm;
}
</style>

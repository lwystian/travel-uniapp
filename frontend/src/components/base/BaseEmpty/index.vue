<template>
  <view class="base-empty">
    <text class="base-empty__title">{{ title }}</text>
    <text v-if="description" class="base-empty__desc">{{ description }}</text>
    <slot />
  </view>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    description?: string
  }>(),
  {
    title: '暂无内容',
    description: ''
  }
)
</script>

<style lang="scss" scoped>
.base-empty {
  @include flex-center;

  min-height: 240rpx;
  flex-direction: column;
  gap: $space-xs;
  padding: $space-xl $space-md;
  color: $color-text-muted;
}

.base-empty__title {
  color: $color-text-secondary;
  font-size: $font-size-md;
}

.base-empty__desc {
  font-size: $font-size-sm;
}
</style>

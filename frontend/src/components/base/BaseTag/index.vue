<template>
  <text class="base-tag" :class="`base-tag--${type}`">{{ text }}</text>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string
    type?: 'primary' | 'accent' | 'plain'
  }>(),
  {
    type: 'plain'
  }
)
</script>

<style lang="scss" scoped>
.base-tag {
  display: inline-flex;
  align-items: center;
  min-height: 36rpx;
  padding: 0 $space-xs;
  color: $color-text-secondary;
  font-size: $font-size-xs;
  background: #f1f5f9;
  border-radius: $radius-xs;
}

.base-tag--primary {
  color: $color-primary;
  background: $color-primary-light;
}

.base-tag--accent {
  color: $color-accent;
  background: #fff4e8;
}
</style>

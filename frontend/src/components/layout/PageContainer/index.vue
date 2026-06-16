<template>
  <view class="page-container" :class="{ 'page-container--safe': safeBottom }">
    <slot />
  </view>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    safeBottom?: boolean
  }>(),
  {
    safeBottom: true
  }
)
</script>

<style lang="scss" scoped>
.page-container {
  min-height: 100vh;
  padding: $space-md;
  background: $color-bg;
}

.page-container--safe {
  padding-bottom: calc(#{$space-xl} + env(safe-area-inset-bottom));
}
</style>

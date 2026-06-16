<template>
  <view class="base-safe-area">
    <slot />
  </view>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.base-safe-area {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>

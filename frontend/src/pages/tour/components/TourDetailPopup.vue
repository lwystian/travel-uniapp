<template>
  <view v-if="modelValue" class="tour-detail-popup-shell">
    <view class="tour-detail-popup-shell__mask" @tap="$emit('update:modelValue', false)" />
    <view class="tour-detail-popup-shell__content">
      <slot />
    </view>
  </view>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean
}>()

defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<style lang="scss" scoped>
.tour-detail-popup-shell {
  position: fixed;
  inset: 0;
  z-index: $z-index-popup;
}

.tour-detail-popup-shell__mask {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
}

.tour-detail-popup-shell__content {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  max-height: 78vh;
  padding: $space-lg $space-md calc(#{$space-lg} + env(safe-area-inset-bottom));
  overflow-y: auto;
  background: $color-bg-white;
  border-radius: $radius-lg $radius-lg 0 0;
}
</style>

<template>
  <view v-if="modelValue" class="base-popup">
    <view class="base-popup__mask" @tap="$emit('update:modelValue', false)" />
    <view class="base-popup__content">
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
.base-popup {
  position: fixed;
  inset: 0;
  z-index: $z-index-popup;
}

.base-popup__mask {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
}

.base-popup__content {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: $space-lg $space-md calc(#{$space-lg} + env(safe-area-inset-bottom));
  background: $color-bg-white;
  border-radius: $radius-lg $radius-lg 0 0;
}
</style>

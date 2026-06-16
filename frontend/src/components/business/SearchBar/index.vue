<template>
  <view class="search-bar" @tap="$emit('tap')">
    <text class="search-bar__icon">⌕</text>
    <input
      class="search-bar__input"
      :value="modelValue"
      :placeholder="placeholder"
      confirm-type="search"
      @input="handleInput"
      @confirm="$emit('search', modelValue)"
    />
  </view>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: string
    placeholder?: string
  }>(),
  {
    modelValue: '',
    placeholder: '搜索目的地、线路、攻略'
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  search: [value: string]
  tap: []
}>()

function handleInput(event: Event) {
  const detail = (event as unknown as { detail: { value: string } }).detail
  emit('update:modelValue', detail.value)
}
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  align-items: center;
  gap: $space-sm;
  min-height: 72rpx;
  padding: 0 $space-md;
  background: $color-bg-white;
  border: 1rpx solid $color-border;
  border-radius: $radius-md;
}

.search-bar__icon {
  color: $color-text-muted;
  font-size: $font-size-lg;
}

.search-bar__input {
  flex: 1;
  height: 72rpx;
  color: $color-text;
  font-size: $font-size-md;
}
</style>

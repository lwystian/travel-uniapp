<template>
  <view class="order-search-panel">
    <view class="order-search-panel__search">
      <text class="order-search-panel__icon">⌕</text>
      <input
        class="order-search-panel__input"
        :value="modelValue"
        confirm-type="search"
        placeholder="搜索订单号、目的地、线路名称"
        placeholder-class="order-search-panel__placeholder"
        @confirm="handleConfirm"
        @input="handleInput"
      />
      <view
        v-if="modelValue"
        class="order-search-panel__clear"
        @tap="$emit('update:modelValue', '')"
      >
        ×
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  search: []
}>()

function handleInput(event: Event) {
  const value = (event as { detail?: { value?: string } }).detail?.value || ''
  emit('update:modelValue', value)
}

function handleConfirm() {
  emit('search')
}
</script>

<style lang="scss" scoped>
.order-search-panel {
  padding: 22rpx 28rpx 24rpx;
  background: #fff;
}

.order-search-panel__search {
  display: flex;
  align-items: center;
  height: 68rpx;
  padding: 0 22rpx;
  background: #f0f1f7;
  border-radius: 999rpx;
}

.order-search-panel__icon {
  color: #313846;
  font-size: 34rpx;
  font-weight: 800;
}

.order-search-panel__input {
  flex: 1;
  min-width: 0;
  height: 68rpx;
  margin-left: $space-xs;
  color: #2b3445;
  font-size: 26rpx;
}

.order-search-panel__placeholder {
  color: #7d8494;
}

.order-search-panel__clear {
  @include flex-center;

  flex: 0 0 auto;
  width: 42rpx;
  height: 42rpx;
  color: #9aa1ad;
  font-size: 34rpx;
  line-height: 1;
}
</style>

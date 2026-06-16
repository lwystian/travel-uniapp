<template>
  <view class="traveler-form">
    <view class="traveler-form__field">
      <text>姓名</text>
      <input
        :value="modelValue.name"
        placeholder="请输入出行人姓名"
        @input="update('name', $event)"
      />
    </view>
    <view class="traveler-form__field">
      <text>手机号</text>
      <input
        :value="modelValue.phone"
        placeholder="请输入手机号"
        @input="update('phone', $event)"
      />
    </view>
    <view class="traveler-form__field">
      <text>证件号</text>
      <input :value="modelValue.idNo" placeholder="请输入证件号" @input="update('idNo', $event)" />
    </view>
  </view>
</template>

<script setup lang="ts">
import type { Traveler } from '@/types/user'

const props = defineProps<{
  modelValue: Traveler
}>()

const emit = defineEmits<{
  'update:modelValue': [value: Traveler]
}>()

function update(key: keyof Traveler, event: Event) {
  const detail = (event as unknown as { detail: { value: string } }).detail
  emit('update:modelValue', {
    ...props.modelValue,
    [key]: detail.value
  })
}
</script>

<style lang="scss" scoped>
.traveler-form {
  @include card;

  padding: 0 $space-md;
}

.traveler-form__field {
  display: flex;
  align-items: center;
  min-height: 92rpx;
  border-bottom: 1rpx solid $color-border;
}

.traveler-form__field:last-child {
  border-bottom: 0;
}

.traveler-form__field text {
  width: 140rpx;
  color: $color-text-secondary;
  font-size: $font-size-sm;
}

.traveler-form__field input {
  flex: 1;
  height: 92rpx;
  font-size: $font-size-md;
}
</style>

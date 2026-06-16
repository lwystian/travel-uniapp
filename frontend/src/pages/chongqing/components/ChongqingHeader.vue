<template>
  <view class="chongqing-header">
    <view class="chongqing-header__bar">
      <text class="chongqing-header__title">{{ title }}</text>
    </view>
    <view class="chongqing-header__search">
      <text class="chongqing-header__search-icon"></text>
      <input
        class="chongqing-header__input"
        :value="modelValue"
        :placeholder="placeholder"
        confirm-type="search"
        placeholder-class="chongqing-header__placeholder"
        @input="handleInput"
        @confirm="$emit('search')"
      />
      <button class="chongqing-header__search-action" hover-class="none" @tap="$emit('search')">
        搜索
      </button>
    </view>
  </view>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  placeholder: string
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  search: []
}>()

function handleInput(event: Event) {
  const detail = (event as unknown as { detail: { value: string } }).detail
  emit('update:modelValue', detail.value)
}
</script>

<style lang="scss" scoped>
.chongqing-header {
  padding: 22rpx 20rpx 20rpx;
  background:
    radial-gradient(circle at 90% 0, rgba(255, 255, 255, 0.72) 0, transparent 210rpx),
    linear-gradient(135deg, #ffe8df 0%, #ffd9d9 48%, #fff3ee 100%);
}

.chongqing-header__bar {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56rpx;
}

.chongqing-header__title {
  max-width: 420rpx;
  overflow: hidden;
  color: #111827;
  font-size: 32rpx;
  font-weight: 800;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.chongqing-header__search {
  display: flex;
  align-items: center;
  height: 88rpx;
  margin-top: 26rpx;
  padding: 0 20rpx;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 10rpx;
  box-shadow: 0 18rpx 42rpx rgba(185, 78, 64, 0.08);
}

.chongqing-header__search-icon {
  position: relative;
  width: 28rpx;
  height: 28rpx;
  margin-right: 16rpx;
  border: 4rpx solid #8b94a5;
  border-radius: 50%;
}

.chongqing-header__search-icon::after {
  position: absolute;
  right: -7rpx;
  bottom: -5rpx;
  width: 12rpx;
  height: 4rpx;
  background: #8b94a5;
  border-radius: 999rpx;
  content: '';
  transform: rotate(45deg);
}

.chongqing-header__input {
  flex: 1;
  min-width: 0;
  color: #111827;
  font-size: 28rpx;
}

.chongqing-header__placeholder {
  color: #9aa3b2;
}

.chongqing-header__search-action {
  flex-shrink: 0;
  padding: 0 0 0 20rpx;
  color: #ff4b24;
  font-size: 28rpx;
  line-height: 1;
  background: transparent;
  border: 0;
}

.chongqing-header__search-action::after {
  border: 0;
}
</style>

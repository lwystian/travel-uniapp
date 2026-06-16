<template>
  <view class="train-search-header">
    <view class="train-search-header__intro">
      <text class="train-search-header__title">旅游专列搜索</text>
      <text class="train-search-header__subtitle">专列线路、目的地、出发地一站查询</text>
    </view>

    <view class="train-search-header__search">
      <text class="train-search-header__search-icon"></text>
      <input
        class="train-search-header__input"
        :value="modelValue"
        :placeholder="placeholder"
        confirm-type="search"
        placeholder-class="train-search-header__placeholder"
        @input="handleInput"
        @confirm="$emit('search')"
      />
      <button class="train-search-header__action" hover-class="none" @tap="$emit('search')">
        搜索
      </button>
    </view>
  </view>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  placeholder: string
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
.train-search-header {
  padding: 26rpx 20rpx;
  background:
    radial-gradient(circle at 12% 4%, rgba(255, 255, 255, 0.9) 0, transparent 150rpx),
    linear-gradient(180deg, #e7f6ff 0%, #f7f9ff 100%);
}

.train-search-header__action::after {
  border: 0;
}

.train-search-header__intro {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.train-search-header__title {
  overflow: hidden;
  color: #132131;
  font-size: 36rpx;
  font-weight: 900;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.train-search-header__subtitle {
  color: #657186;
  font-size: 24rpx;
  line-height: 1.3;
}

.train-search-header__search {
  display: flex;
  align-items: center;
  height: 86rpx;
  margin-top: 22rpx;
  padding: 0 18rpx;
  background: rgba(255, 255, 255, 0.98);
  border: 1rpx solid rgba(213, 226, 240, 0.76);
  border-radius: 18rpx;
  box-shadow: 0 18rpx 44rpx rgba(42, 102, 143, 0.08);
}

.train-search-header__search-icon {
  position: relative;
  width: 28rpx;
  height: 28rpx;
  margin-right: 16rpx;
  border: 4rpx solid #8a94a6;
  border-radius: 50%;
}

.train-search-header__search-icon::after {
  position: absolute;
  right: -7rpx;
  bottom: -5rpx;
  width: 12rpx;
  height: 4rpx;
  background: #8a94a6;
  border-radius: 999rpx;
  content: '';
  transform: rotate(45deg);
}

.train-search-header__input {
  flex: 1;
  min-width: 0;
  color: #111827;
  font-size: 28rpx;
}

.train-search-header__placeholder {
  color: #9aa3b2;
}

.train-search-header__action {
  flex-shrink: 0;
  padding: 0 0 0 22rpx;
  color: #0f7fbf;
  font-size: 28rpx;
  font-weight: 700;
  line-height: 1;
  background: transparent;
  border: 0;
}
</style>

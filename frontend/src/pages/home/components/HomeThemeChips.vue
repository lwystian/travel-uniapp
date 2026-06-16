<template>
  <scroll-view class="home-theme-chips" scroll-x>
    <view class="home-theme-chips__inner">
      <view
        v-for="item in items"
        :key="item"
        class="home-theme-chips__item"
        @tap="$emit('select', item)"
      >
        {{ item }}
      </view>
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
defineProps<{
  items: string[]
}>()

defineEmits<{
  select: [keyword: string]
}>()
</script>

<style lang="scss" scoped>
.home-theme-chips {
  width: 100%;
  margin: -4rpx 0 $space-md;
  white-space: nowrap;
}

.home-theme-chips__inner {
  display: inline-flex;
  gap: $space-xs;
}

.home-theme-chips__item {
  padding: 12rpx 20rpx;
  color: #344054;
  font-size: $font-size-sm;
  font-weight: 800;
  background: #f5f8fc;
  border: 1rpx solid rgba(218, 226, 237, 0.9);
  border-radius: 999rpx;
}
</style>

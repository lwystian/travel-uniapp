<template>
  <view class="user-asset-panel">
    <view
      v-for="item in items"
      :key="item.key"
      class="user-asset-panel__item"
      @tap="$emit('select', item.key)"
    >
      <text class="user-asset-panel__value">{{ item.value }}</text>
      <text class="user-asset-panel__label">{{ item.label }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
export interface UserAssetItem {
  key: string
  label: string
  value: string | number
}

defineProps<{
  items: UserAssetItem[]
}>()

defineEmits<{
  select: [key: string]
}>()
</script>

<style lang="scss" scoped>
.user-asset-panel {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: -28rpx $space-md 0;
  padding: 24rpx 0;
  background: #fff;
  border: 1rpx solid rgba(219, 226, 236, 0.92);
  border-radius: 28rpx;
  box-shadow: 0 18rpx 44rpx rgba(18, 31, 56, 0.1);
}

.user-asset-panel__item {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.user-asset-panel__value {
  @include text-ellipsis;

  max-width: 130rpx;
  color: #101828;
  font-size: 34rpx;
  font-weight: 900;
  line-height: 1.15;
}

.user-asset-panel__label {
  margin-top: 8rpx;
  color: #8a94a6;
  font-size: $font-size-xs;
}
</style>

<template>
  <view class="base-price">
    <text class="base-price__symbol">¥</text>
    <text class="base-price__value">{{ displayValue }}</text>
    <text v-if="unit" class="base-price__unit">/{{ unit }}</text>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    value: number
    unit?: string
  }>(),
  {
    unit: ''
  }
)

const displayValue = computed(() => Math.round(props.value))
</script>

<style lang="scss" scoped>
.base-price {
  display: inline-flex;
  align-items: baseline;
  color: $color-accent;
  font-weight: 700;
}

.base-price__symbol,
.base-price__unit {
  font-size: $font-size-xs;
}

.base-price__value {
  font-size: 36rpx;
}
</style>

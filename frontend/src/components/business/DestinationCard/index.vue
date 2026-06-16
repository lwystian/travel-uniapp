<template>
  <view class="destination-card" @tap="$emit('click', destination)">
    <view class="destination-card__cover">
      <BaseImage :src="destination.cover" />
    </view>
    <view class="destination-card__body">
      <text class="destination-card__name">{{ destination.name }}</text>
      <text class="destination-card__desc">{{
        destination.subtitle || destination.description
      }}</text>
      <view class="destination-card__tags">
        <BaseTag
          v-for="tag in destination.tags.slice(0, 2)"
          :key="tag"
          :text="tag"
          type="primary"
        />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import BaseImage from '@/components/base/BaseImage/index.vue'
import BaseTag from '@/components/base/BaseTag/index.vue'
import type { Destination } from '@/types/destination'

defineProps<{
  destination: Destination
}>()

defineEmits<{
  click: [destination: Destination]
}>()
</script>

<style lang="scss" scoped>
.destination-card {
  @include card;

  overflow: hidden;
}

.destination-card__cover {
  height: 180rpx;
}

.destination-card__body {
  padding: $space-md;
}

.destination-card__name {
  display: block;
  font-size: $font-size-lg;
  font-weight: 700;
}

.destination-card__desc {
  @include text-ellipsis;

  display: block;
  margin-top: 4rpx;
  color: $color-text-secondary;
  font-size: $font-size-sm;
}

.destination-card__tags {
  display: flex;
  gap: $space-xs;
  margin-top: $space-sm;
}
</style>

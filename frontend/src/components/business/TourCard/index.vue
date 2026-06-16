<template>
  <view class="tour-card" @tap="$emit('click', tour)">
    <view class="tour-card__cover">
      <BaseImage :src="tour.cover" />
    </view>
    <view class="tour-card__body">
      <view class="tour-card__title">{{ tour.title }}</view>
      <view v-if="tour.subtitle" class="tour-card__subtitle">{{ tour.subtitle }}</view>
      <view class="tour-card__tags">
        <BaseTag v-for="tag in tour.tags.slice(0, 3)" :key="tag" :text="tag" />
      </view>
      <view class="tour-card__meta">
        <text>{{ tour.departureCity }}出发</text>
        <text>{{ tour.days }}天{{ tour.nights }}晚</text>
        <text>{{ tour.score }}分</text>
      </view>
      <view class="tour-card__footer">
        <BasePrice :value="tour.price" :unit="priceUnitText" />
        <text class="tour-card__sales">已售 {{ tour.saleCount }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseImage from '@/components/base/BaseImage/index.vue'
import BasePrice from '@/components/base/BasePrice/index.vue'
import BaseTag from '@/components/base/BaseTag/index.vue'
import type { TourProduct } from '@/types/tour'
import { formatPriceUnit } from '@/utils/price'

const props = defineProps<{
  tour: TourProduct
}>()

defineEmits<{
  click: [tour: TourProduct]
}>()

const priceUnitText = computed(() => formatPriceUnit(props.tour.priceUnit))
</script>

<style lang="scss" scoped>
.tour-card {
  @include card;

  display: flex;
  gap: $space-md;
  padding: $space-md;
}

.tour-card__cover {
  width: 220rpx;
  height: 164rpx;
  overflow: hidden;
  border-radius: $radius-sm;
}

.tour-card__body {
  flex: 1;
  min-width: 0;
}

.tour-card__title {
  @include text-ellipsis;

  color: $color-text;
  font-size: $font-size-md;
  font-weight: 700;
}

.tour-card__subtitle {
  @include text-ellipsis;

  margin-top: 4rpx;
  color: $color-text-secondary;
  font-size: $font-size-sm;
}

.tour-card__tags,
.tour-card__meta,
.tour-card__footer {
  display: flex;
  align-items: center;
}

.tour-card__tags {
  flex-wrap: wrap;
  gap: $space-xs;
  margin-top: $space-sm;
}

.tour-card__meta {
  gap: $space-sm;
  margin-top: $space-sm;
  color: $color-text-muted;
  font-size: $font-size-xs;
}

.tour-card__footer {
  justify-content: space-between;
  margin-top: $space-sm;
}

.tour-card__sales {
  color: $color-text-muted;
  font-size: $font-size-xs;
}
</style>

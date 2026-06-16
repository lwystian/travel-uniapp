<template>
  <view class="price-calendar">
    <view
      v-for="schedule in schedules"
      :key="schedule.id"
      class="price-calendar__item"
      :class="{ 'price-calendar__item--disabled': schedule.status !== 'open' }"
      @tap="handleSelect(schedule)"
    >
      <text class="price-calendar__date">{{ schedule.date }}</text>
      <BasePrice :value="schedule.adultPrice" unit="人" />
      <text class="price-calendar__stock">余 {{ schedule.stock }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import BasePrice from '@/components/base/BasePrice/index.vue'
import type { TourSchedule } from '@/types/tour'

defineProps<{
  schedules: TourSchedule[]
}>()

const emit = defineEmits<{
  select: [schedule: TourSchedule]
}>()

function handleSelect(schedule: TourSchedule) {
  if (schedule.status !== 'open') return
  emit('select', schedule)
}
</script>

<style lang="scss" scoped>
.price-calendar {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: $space-md;
}

.price-calendar__item {
  @include card;

  padding: $space-md;
}

.price-calendar__item--disabled {
  opacity: 0.45;
}

.price-calendar__date,
.price-calendar__stock {
  display: block;
  color: $color-text-secondary;
  font-size: $font-size-sm;
}

.price-calendar__stock {
  margin-top: 4rpx;
}
</style>

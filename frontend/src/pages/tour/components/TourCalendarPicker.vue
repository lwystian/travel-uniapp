<template>
  <TourDetailPopup
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <view class="tour-calendar-picker">
      <view class="tour-calendar-picker__header">
        <view>
          <view class="tour-calendar-picker__title">选择日期</view>
          <view class="tour-calendar-picker__subtitle">可订团期展示实时余位与起价</view>
        </view>
        <button class="tour-calendar-picker__close" @tap="$emit('update:modelValue', false)">
          ×
        </button>
      </view>

      <view class="tour-calendar-picker__weekdays">
        <text v-for="weekday in weekdays" :key="weekday">{{ weekday }}</text>
      </view>

      <scroll-view class="tour-calendar-picker__months" scroll-y>
        <view v-for="month in months" :key="month.key" class="tour-calendar-picker__month">
          <view class="tour-calendar-picker__month-title">{{ month.title }}</view>
          <view class="tour-calendar-picker__grid">
            <view
              v-for="day in month.days"
              :key="day.key"
              class="tour-calendar-picker__day"
              :class="{
                'tour-calendar-picker__day--empty': !day.date,
                'tour-calendar-picker__day--active': day.schedule?.id === selectedSchedule?.id,
                'tour-calendar-picker__day--disabled': day.date && day.schedule?.status !== 'open',
                'tour-calendar-picker__day--available': day.schedule?.status === 'open'
              }"
              @tap="handleSelect(day.schedule)"
            >
              <template v-if="day.date">
                <text class="tour-calendar-picker__date">{{ day.day }}</text>
                <text v-if="day.schedule" class="tour-calendar-picker__price">
                  ¥{{ day.schedule.adultPrice }}
                </text>
                <text v-if="day.schedule" class="tour-calendar-picker__stock">
                  {{ day.schedule.status === 'full' ? '已满' : `余${day.schedule.stock}` }}
                </text>
              </template>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </TourDetailPopup>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TourSchedule } from '@/types/tour'
import TourDetailPopup from './TourDetailPopup.vue'

interface CalendarDay {
  key: string
  date?: string
  day?: number
  schedule?: TourSchedule
}

interface CalendarMonth {
  key: string
  title: string
  days: CalendarDay[]
}

const props = defineProps<{
  modelValue: boolean
  schedules: TourSchedule[]
  selectedSchedule?: TourSchedule
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  select: [schedule: TourSchedule]
}>()

const weekdays = ['日', '一', '二', '三', '四', '五', '六']

const scheduleMap = computed(() => {
  const result: Record<string, TourSchedule> = {}
  props.schedules.forEach((schedule) => {
    result[schedule.date] = schedule
  })
  return result
})

const months = computed(() => {
  if (!props.schedules.length) return []
  const keys = Array.from(
    new Set(
      props.schedules
        .map((schedule) => schedule.date.slice(0, 7))
        .sort((first, second) => first.localeCompare(second))
    )
  )
  return keys.map(buildMonth)
})

function buildMonth(monthKey: string): CalendarMonth {
  const [year, month] = monthKey.split('-').map(Number)
  const firstDay = new Date(year, month - 1, 1)
  const dayCount = new Date(year, month, 0).getDate()
  const days: CalendarDay[] = []

  for (let index = 0; index < firstDay.getDay(); index += 1) {
    days.push({ key: `${monthKey}-empty-${index}` })
  }

  for (let day = 1; day <= dayCount; day += 1) {
    const date = `${monthKey}-${String(day).padStart(2, '0')}`
    days.push({
      key: date,
      date,
      day,
      schedule: scheduleMap.value[date]
    })
  }

  return {
    key: monthKey,
    title: `${year}年${month}月`,
    days
  }
}

function handleSelect(schedule?: TourSchedule) {
  if (!schedule) return
  if (schedule.status !== 'open') {
    uni.showToast({ title: '该团期暂不可订', icon: 'none' })
    return
  }
  emit('select', schedule)
  emit('update:modelValue', false)
}
</script>

<style lang="scss" scoped>
$choice-primary: #0f766e;
$choice-primary-strong: #115e59;
$choice-primary-soft: #e8faf8;

.tour-calendar-picker {
  max-height: 74vh;
}

.tour-calendar-picker__header {
  @include flex-between;

  gap: 24rpx;
}

.tour-calendar-picker__title {
  color: #101828;
  font-size: 32rpx;
  font-weight: 900;
}

.tour-calendar-picker__subtitle {
  margin-top: 8rpx;
  color: #8a93a3;
  font-size: 23rpx;
}

.tour-calendar-picker__close {
  @include flex-center;

  width: 58rpx;
  height: 58rpx;
  margin: 0;
  padding: 0;
  color: #667085;
  font-size: 38rpx;
  line-height: 58rpx;
  background: #f3f5f8;
  border-radius: 50%;
}

.tour-calendar-picker__close::after {
  border: 0;
}

.tour-calendar-picker__weekdays {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  margin-top: 28rpx;
  padding: 14rpx 0;
  color: #8a93a3;
  font-size: 23rpx;
  font-weight: 800;
  text-align: center;
  background: #f8fafc;
  border-radius: 10rpx;
}

.tour-calendar-picker__months {
  max-height: 58vh;
}

.tour-calendar-picker__month {
  margin-top: 26rpx;
}

.tour-calendar-picker__month-title {
  color: #101828;
  font-size: 29rpx;
  font-weight: 900;
  text-align: center;
}

.tour-calendar-picker__grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 10rpx;
  margin-top: 18rpx;
}

.tour-calendar-picker__day {
  @include flex-center;

  flex-direction: column;
  min-width: 0;
  height: 94rpx;
  color: #c4c9d2;
  background: #f7f8fb;
  border: 1rpx solid transparent;
  border-radius: 8rpx;
}

.tour-calendar-picker__day--empty {
  background: transparent;
}

.tour-calendar-picker__day--available {
  color: $choice-primary-strong;
  background: #f8fffe;
  border-color: #d8eeeb;
}

.tour-calendar-picker__day--active {
  color: $choice-primary-strong;
  background: $choice-primary-soft;
  border-color: $choice-primary;
  box-shadow:
    0 0 0 1rpx rgba(15, 118, 110, 0.16) inset,
    0 10rpx 22rpx rgba(15, 118, 110, 0.14);
}

.tour-calendar-picker__day--disabled {
  color: #b7bdc7;
  background: #f3f4f6;
  border-color: #e5e7eb;
}

.tour-calendar-picker__date {
  font-size: 25rpx;
  font-weight: 900;
  line-height: 1;
}

.tour-calendar-picker__price {
  margin-top: 8rpx;
  color: #e45a1f;
  font-size: 20rpx;
  font-weight: 900;
}

.tour-calendar-picker__stock {
  margin-top: 4rpx;
  font-size: 18rpx;
  font-weight: 700;
}

.tour-calendar-picker__day--active .tour-calendar-picker__price,
.tour-calendar-picker__day--active .tour-calendar-picker__stock {
  color: $choice-primary;
}
</style>

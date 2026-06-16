<template>
  <view class="tour-booking-panel">
    <view class="tour-booking-panel__section">
      <view class="tour-booking-panel__section-title">出行套餐</view>
      <view class="tour-booking-panel__packages">
        <view
          v-for="(item, index) in packages"
          :key="`${item.id}-${index}`"
          class="tour-booking-panel__package"
          :class="{
            'tour-booking-panel__package--active': selectedPackageKey === getPackageKey(item, index)
          }"
          @tap="$emit('selectPackage', item, getPackageKey(item, index))"
        >
          <view class="tour-booking-panel__package-head">
            <view class="tour-booking-panel__package-name">{{ item.name }}</view>
            <text
              v-if="selectedPackageKey === getPackageKey(item, index)"
              class="tour-booking-panel__package-selected"
            >
              已选
            </text>
          </view>
          <view class="tour-booking-panel__package-meta">
            <text>天数 {{ item.days }}天{{ item.nights }}晚</text>
            <text>出发 {{ item.departureCity }}</text>
          </view>
          <view v-if="item.description" class="tour-booking-panel__package-desc">
            {{ item.description }}
          </view>
          <view class="tour-booking-panel__package-footer">
            <view class="tour-booking-panel__package-tags">
              <text v-for="tag in item.tags?.slice(0, 2)" :key="tag">{{ tag }}</text>
            </view>
            <view class="tour-booking-panel__package-price">¥{{ item.price }} 起/人</view>
          </view>
        </view>
      </view>
    </view>

    <view class="tour-booking-panel__divider" />

    <view class="tour-booking-panel__section">
      <view class="tour-booking-panel__section-title">选择日期</view>
      <view class="tour-booking-panel__dates">
        <view
          v-for="schedule in visibleSchedules"
          :key="schedule.id"
          class="tour-booking-panel__date"
          :class="{
            'tour-booking-panel__date--active': selectedSchedule?.id === schedule.id,
            'tour-booking-panel__date--disabled': schedule.status !== 'open'
          }"
          @tap="handleSelectSchedule(schedule)"
        >
          <view>{{ getWeekday(schedule.date) }}</view>
          <view>{{ getMonthDay(schedule.date) }}</view>
          <view>¥{{ schedule.adultPrice }}</view>
        </view>
        <view class="tour-booking-panel__more-date" @tap="$emit('moreDate')">
          更多
          <text>日期 ›</text>
        </view>
      </view>
    </view>

    <view class="tour-booking-panel__section tour-booking-panel__section--quantity">
      <view>
        <view class="tour-booking-panel__section-title">选择数量</view>
        <view class="tour-booking-panel__stock">
          余位 {{ selectedSchedule?.stock ?? '--' }}，最多可订 {{ maxQuantity }} 份
        </view>
      </view>
      <view class="tour-booking-panel__stepper">
        <button
          class="tour-booking-panel__step"
          :class="{ 'tour-booking-panel__step--disabled': quantity <= 1 }"
          @tap="$emit('changeQuantity', quantity - 1)"
        >
          −
        </button>
        <text class="tour-booking-panel__quantity">{{ quantity }}</text>
        <button
          class="tour-booking-panel__step tour-booking-panel__step--plus"
          :class="{ 'tour-booking-panel__step--disabled': quantity >= maxQuantity }"
          @tap="$emit('changeQuantity', quantity + 1)"
        >
          +
        </button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TourDetail, TourPackage, TourSchedule } from '@/types/tour'

const props = defineProps<{
  detail: TourDetail
  schedules: TourSchedule[]
  selectedSchedule?: TourSchedule
  selectedPackageKey?: string
  quantity: number
}>()

const emit = defineEmits<{
  selectSchedule: [schedule: TourSchedule]
  selectPackage: [item: TourPackage, key: string]
  changeQuantity: [quantity: number]
  moreDate: []
}>()

const packages = computed<TourPackage[]>(() => {
  if (props.detail.packages?.length) return props.detail.packages
  return (props.detail.ticketTypes || []).map((ticket) => ({
    id: ticket.id,
    tourId: props.detail.id,
    name: ticket.name,
    days: props.detail.days,
    nights: props.detail.nights,
    departureCity: props.detail.departureCity,
    destination: props.detail.destination,
    description: ticket.description,
    price: ticket.price,
    stock: ticket.stock,
    tags: props.detail.tags.slice(0, 2)
  }))
})
const visibleSchedules = computed(() => props.schedules.slice(0, 3))
const maxQuantity = computed(() => Math.max(1, Math.min(props.selectedSchedule?.stock || 1, 9)))

function getMonthDay(date: string) {
  const [, month, day] = date.split('-')
  return `${month}/${day}`
}

function getWeekday(date: string) {
  const weekday = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  return weekday[new Date(date.replace(/-/g, '/')).getDay()]
}

function getPackageKey(item: TourPackage, index: number) {
  return `${item.id || 'package'}-${index}`
}

function handleSelectSchedule(schedule: TourSchedule) {
  if (schedule.status !== 'open') {
    uni.showToast({ title: '该团期暂不可订', icon: 'none' })
    return
  }
  emit('selectSchedule', schedule)
}
</script>

<style lang="scss" scoped>
$choice-primary: #0f766e;
$choice-primary-strong: #115e59;
$choice-primary-soft: #e8faf8;

.tour-booking-panel {
  margin-top: 18rpx;
  padding: $space-md;
  background: $color-bg-white;
  border-radius: 16rpx;
}

.tour-booking-panel__section {
  margin-top: 30rpx;
}

.tour-booking-panel__section:first-child {
  margin-top: 0;
}

.tour-booking-panel__section--quantity {
  @include flex-between;

  align-items: center;
}

.tour-booking-panel__section-title {
  color: #101828;
  font-size: 31rpx;
  font-weight: 900;
}

.tour-booking-panel__dates {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)) 88rpx;
  gap: 16rpx;
  margin-top: 18rpx;
}

.tour-booking-panel__date {
  min-width: 0;
  padding: 16rpx 8rpx;
  color: #344054;
  font-size: 24rpx;
  font-weight: 800;
  line-height: 1.35;
  text-align: center;
  background: #fff;
  border: 1rpx solid #e5e7eb;
  border-radius: 8rpx;
  box-shadow: none;
}

.tour-booking-panel__date--active {
  color: $choice-primary-strong;
  background: $choice-primary-soft;
  border-color: $choice-primary;
  box-shadow:
    0 0 0 1rpx rgba(15, 118, 110, 0.16) inset,
    0 10rpx 22rpx rgba(15, 118, 110, 0.13);
}

.tour-booking-panel__date--disabled {
  color: #b7bdc7;
  background: #f3f4f6;
  border-color: #e5e7eb;
}

.tour-booking-panel__more-date {
  @include flex-center;

  flex-direction: column;
  min-height: 92rpx;
  color: $choice-primary;
  font-size: 23rpx;
  font-weight: 800;
  line-height: 1.35;
  background: #f8fffe;
  border: 1rpx dashed #b9e4df;
  border-radius: 8rpx;
}

.tour-booking-panel__divider {
  height: 1rpx;
  margin-top: 30rpx;
  background: #eef0f4;
}

.tour-booking-panel__packages {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16rpx;
  margin-top: 18rpx;
}

.tour-booking-panel__package {
  position: relative;
  min-width: 0;
  padding: 22rpx;
  color: #344054;
  background: #fff;
  border: 1rpx solid #e5e7eb;
  border-radius: 10rpx;
  box-shadow: none;
}

.tour-booking-panel__package--active {
  background: $choice-primary-soft;
  border-color: $choice-primary;
  box-shadow:
    0 0 0 1rpx rgba(15, 118, 110, 0.16) inset,
    0 12rpx 28rpx rgba(15, 118, 110, 0.13);
}

.tour-booking-panel__package-head {
  display: flex;
  align-items: center;
  gap: 14rpx;
}

.tour-booking-panel__package-selected {
  flex: 0 0 auto;
  height: 34rpx;
  padding: 0 12rpx;
  color: #fff;
  font-size: 20rpx;
  font-weight: 900;
  line-height: 34rpx;
  background: $choice-primary;
  border-radius: 999rpx;
}

.tour-booking-panel__package-name {
  @include text-ellipsis;

  flex: 1;
  min-width: 0;
  color: #101828;
  font-size: 30rpx;
  font-weight: 900;
}

.tour-booking-panel__package-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10rpx;
  margin-top: 14rpx;
}

.tour-booking-panel__package-meta text {
  max-width: 260rpx;
  padding: 4rpx 10rpx;
  overflow: hidden;
  color: #667085;
  font-size: 23rpx;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #f8fafc;
  border: 1rpx solid #e5e7eb;
  border-radius: 999rpx;
}

.tour-booking-panel__package--active .tour-booking-panel__package-meta text {
  color: $choice-primary-strong;
  background: #fff;
  border-color: #a8ddd7;
}

.tour-booking-panel__package-desc {
  @include text-ellipsis;

  margin-top: 10rpx;
  color: #667085;
  font-size: 25rpx;
  line-height: 1.45;
}

.tour-booking-panel__package-footer {
  @include flex-between;

  gap: 18rpx;
  margin-top: 14rpx;
}

.tour-booking-panel__package-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8rpx;
  min-width: 0;
}

.tour-booking-panel__package-tags text {
  height: 32rpx;
  padding: 0 10rpx;
  color: #667085;
  font-size: 20rpx;
  font-weight: 700;
  line-height: 32rpx;
  background: #f2f4f7;
  border-radius: 6rpx;
}

.tour-booking-panel__package--active .tour-booking-panel__package-tags text {
  color: $choice-primary-strong;
  background: #d7f4ef;
}

.tour-booking-panel__package-price {
  flex: 0 0 auto;
  color: $choice-primary;
  font-size: 26rpx;
  font-weight: 900;
}

.tour-booking-panel__stock {
  margin-top: 8rpx;
  color: #9aa1ad;
  font-size: 22rpx;
}

.tour-booking-panel__stepper {
  display: flex;
  align-items: center;
  gap: 28rpx;
}

.tour-booking-panel__step {
  @include flex-center;

  width: 72rpx;
  height: 72rpx;
  margin: 0;
  padding: 0;
  color: $choice-primary;
  font-size: 34rpx;
  font-weight: 900;
  line-height: 72rpx;
  background: $choice-primary-soft;
  border-radius: 22rpx;
}

.tour-booking-panel__step::after {
  border: 0;
}

.tour-booking-panel__step--disabled {
  color: #d8dce3;
  background: #f7f8fb;
}

.tour-booking-panel__quantity {
  width: 42rpx;
  color: #172033;
  font-size: 30rpx;
  font-weight: 700;
  text-align: center;
}
</style>

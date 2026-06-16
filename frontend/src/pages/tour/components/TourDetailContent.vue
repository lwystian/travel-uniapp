<template>
  <view class="tour-detail-content">
    <view class="tour-detail-content__tabs">
      <view
        v-for="tab in tabs"
        :key="tab.key"
        class="tour-detail-content__tab"
        :class="{ 'tour-detail-content__tab--active': activeTab === tab.key }"
        @tap="$emit('changeTab', tab.key)"
      >
        {{ tab.label }}
      </view>
    </view>

    <view v-if="activeTab === 'highlight'" class="tour-detail-content__panel">
      <view class="tour-detail-content__section-title">产品亮点</view>
      <view
        v-for="reason in detail.recommendedReason"
        :key="reason"
        class="tour-detail-content__highlight"
      >
        {{ reason }}
      </view>
    </view>

    <view v-if="activeTab === 'itinerary'" class="tour-detail-content__panel">
      <view class="tour-detail-content__section-title">参考行程</view>
      <view class="tour-detail-content__notice"> ⓘ {{ detail.itineraryNotice }} </view>
      <view class="tour-detail-content__info-grid">
        <view class="tour-detail-content__info-item">
          <view class="tour-detail-content__info-icon">▣</view>
          <view>
            <view class="tour-detail-content__info-label">天数</view>
            <view class="tour-detail-content__info-value">{{ detail.days }}天</view>
          </view>
        </view>
        <view class="tour-detail-content__info-item">
          <view class="tour-detail-content__info-icon">○</view>
          <view>
            <view class="tour-detail-content__info-label">人数</view>
            <view class="tour-detail-content__info-value">
              {{ detail.groupSizeText || '8-30人' }}
            </view>
          </view>
        </view>
      </view>

      <view v-for="day in detail.itinerary" :key="day.day" class="tour-detail-content__day">
        <view class="tour-detail-content__day-header">
          <view class="tour-detail-content__day-index">
            <text>D{{ day.day }}</text>
            <text>{{ getScheduleMonthDay(day.day) }}</text>
          </view>
          <view class="tour-detail-content__day-title">
            {{ day.routeTitle || day.title }}
          </view>
        </view>

        <view class="tour-detail-content__timeline">
          <view v-for="node in day.nodes" :key="node.id" class="tour-detail-content__node">
            <view
              class="tour-detail-content__node-icon"
              :class="`tour-detail-content__node-icon--${node.icon || 'morning'}`"
            >
              {{ getNodeIcon(node.icon) }}
            </view>
            <view class="tour-detail-content__node-body">
              <view class="tour-detail-content__node-title">{{ node.title }}</view>
              <view v-if="node.time" class="tour-detail-content__node-time">{{ node.time }}</view>
              <view class="tour-detail-content__node-content">{{ node.content }}</view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view v-if="activeTab === 'fee'" class="tour-detail-content__panel">
      <view class="tour-detail-content__section-title">费用说明</view>
      <view class="tour-detail-content__list-title">费用包含</view>
      <view v-for="item in detail.feeIncludes" :key="item" class="tour-detail-content__list-item">
        {{ item }}
      </view>
      <view class="tour-detail-content__list-title">费用不含</view>
      <view v-for="item in detail.feeExcludes" :key="item" class="tour-detail-content__list-item">
        {{ item }}
      </view>
    </view>

    <view v-if="activeTab === 'notice'" class="tour-detail-content__panel">
      <view class="tour-detail-content__section-title">预订须知</view>
      <view
        v-for="item in [...detail.bookingNotice, ...detail.refundPolicy]"
        :key="item"
        class="tour-detail-content__list-item"
      >
        {{ item }}
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { TourDetail, TourItineraryNode } from '@/types/tour'
import { addDays } from '@/utils/date'

defineProps<{
  detail: TourDetail
  activeTab: 'highlight' | 'itinerary' | 'fee' | 'notice'
  selectedDate?: string
}>()

defineEmits<{
  changeTab: [tab: 'highlight' | 'itinerary' | 'fee' | 'notice']
}>()

const tabs = [
  { key: 'highlight', label: '亮点' },
  { key: 'itinerary', label: '行程' },
  { key: 'fee', label: '费用' },
  { key: 'notice', label: '须知' }
] as const

function getScheduleMonthDay(day: number) {
  const date = addDays(new Date(), day - 1)
  const [, month, value] = date.split('-')
  return `${month}.${value}`
}

function getNodeIcon(icon?: TourItineraryNode['icon']) {
  const iconMap: Record<NonNullable<TourItineraryNode['icon']>, string> = {
    highlight: '👍',
    morning: '›',
    afternoon: '›',
    evening: '›'
  }
  return icon ? iconMap[icon] : '›'
}
</script>

<style lang="scss" scoped>
.tour-detail-content {
  margin-top: 20rpx;
  background: $color-bg-white;
  border-radius: 16rpx;
}

.tour-detail-content__tabs {
  position: sticky;
  top: 0;
  z-index: 4;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  height: 82rpx;
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1rpx solid #edf0f4;
}

.tour-detail-content__tab {
  @include flex-center;

  position: relative;
  color: #8a93a3;
  font-size: 28rpx;
  font-weight: 700;
}

.tour-detail-content__tab--active {
  color: #1d2738;
  font-weight: 900;
}

.tour-detail-content__tab--active::after {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 88rpx;
  height: 8rpx;
  background: #ffe100;
  border-radius: 999rpx;
  transform: translateX(-50%);
  content: '';
}

.tour-detail-content__panel {
  padding: 30rpx $space-md 36rpx;
}

.tour-detail-content__section-title {
  position: relative;
  padding-left: 14rpx;
  color: #1d2738;
  font-size: 31rpx;
  font-weight: 900;
}

.tour-detail-content__section-title::before {
  position: absolute;
  top: 4rpx;
  bottom: 4rpx;
  left: 0;
  width: 6rpx;
  background: #ffe100;
  border-radius: 999rpx;
  content: '';
}

.tour-detail-content__notice {
  margin-top: 24rpx;
  padding: 20rpx 22rpx;
  color: #969eaa;
  font-size: 24rpx;
  line-height: 1.55;
  text-align: center;
  background: #f6fbff;
  border-radius: 8rpx;
}

.tour-detail-content__info-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18rpx;
  margin-top: 18rpx;
  padding: 24rpx 28rpx;
  background: #f2f8fb;
  border-radius: 8rpx;
}

.tour-detail-content__info-item {
  display: flex;
  align-items: center;
  gap: 18rpx;
}

.tour-detail-content__info-icon {
  color: #6d7785;
  font-size: 36rpx;
}

.tour-detail-content__info-label {
  color: #646e7c;
  font-size: 25rpx;
}

.tour-detail-content__info-value {
  margin-top: 6rpx;
  color: #253043;
  font-size: 26rpx;
}

.tour-detail-content__day {
  margin-top: 34rpx;
}

.tour-detail-content__day-header {
  display: flex;
  align-items: flex-start;
  gap: 20rpx;
}

.tour-detail-content__day-index {
  flex: 0 0 56rpx;
  color: #7b8491;
  font-weight: 800;
}

.tour-detail-content__day-index text {
  display: block;
}

.tour-detail-content__day-index text:first-child {
  color: #2d3648;
  font-size: 30rpx;
  font-weight: 900;
}

.tour-detail-content__day-index text:last-child {
  margin-top: 4rpx;
  font-size: 22rpx;
}

.tour-detail-content__day-title {
  flex: 1;
  color: #1d2738;
  font-size: 31rpx;
  font-weight: 900;
  line-height: 1.35;
}

.tour-detail-content__timeline {
  position: relative;
  margin-top: 28rpx;
  padding-left: 34rpx;
}

.tour-detail-content__timeline::before {
  position: absolute;
  top: 18rpx;
  bottom: 20rpx;
  left: 12rpx;
  width: 2rpx;
  background: #eef0f4;
  content: '';
}

.tour-detail-content__node {
  position: relative;
  display: flex;
  gap: 18rpx;
  padding-bottom: 34rpx;
}

.tour-detail-content__node-icon {
  @include flex-center;

  position: absolute;
  top: 2rpx;
  left: -34rpx;
  z-index: 1;
  width: 28rpx;
  height: 28rpx;
  color: #fff;
  font-size: 18rpx;
  font-weight: 900;
  background: #ffe676;
  border-radius: 50%;
}

.tour-detail-content__node-icon--highlight {
  background: #ff9f43;
}

.tour-detail-content__node-body {
  flex: 1;
}

.tour-detail-content__node-title {
  color: #263344;
  font-size: 30rpx;
  font-weight: 900;
}

.tour-detail-content__node-time {
  margin-top: 14rpx;
  color: #596574;
  font-size: 25rpx;
}

.tour-detail-content__node-content {
  margin-top: 16rpx;
  color: #596574;
  font-size: 27rpx;
  line-height: 1.75;
}

.tour-detail-content__highlight,
.tour-detail-content__list-item {
  margin-top: 18rpx;
  padding: 18rpx 22rpx;
  color: #4f5b6b;
  font-size: 26rpx;
  line-height: 1.55;
  background: #f7f9fb;
  border-radius: 8rpx;
}

.tour-detail-content__list-title {
  margin-top: 30rpx;
  color: #263344;
  font-size: 28rpx;
  font-weight: 900;
}
</style>

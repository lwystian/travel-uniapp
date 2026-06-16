<template>
  <view class="sanxia-query-panel">
    <view class="sanxia-query-panel__tabs">
      <view
        v-for="tab in tabs"
        :key="tab.value"
        class="sanxia-query-panel__tab"
        :class="{ 'sanxia-query-panel__tab--active': model.mode === tab.value }"
        @tap="changeMode(tab.value)"
      >
        {{ tab.label }}
      </view>
    </view>

    <view class="sanxia-query-panel__route">
      <view class="sanxia-query-panel__city">
        <text>{{ model.fromCity }}</text>
      </view>
      <view class="sanxia-query-panel__swap" @tap="swapRoute">
        <view class="sanxia-query-panel__ship-icon" />
      </view>
      <view class="sanxia-query-panel__city sanxia-query-panel__city--right">
        <text>{{ model.toCity }}</text>
      </view>
    </view>

    <picker
      v-if="model.mode === 'date'"
      mode="date"
      :value="model.departureDate"
      :start="today"
      @change="handleDateChange"
    >
      <view class="sanxia-query-panel__date-row">
        <view class="sanxia-query-panel__date">
          <text class="sanxia-query-panel__date-main">{{ dateText }}</text>
          <text class="sanxia-query-panel__weekday">{{ weekdayText }}</text>
        </view>
        <text class="sanxia-query-panel__reset" @tap.stop="resetDate">重新选择</text>
      </view>
    </picker>

    <view v-else-if="model.mode === 'cruise'" class="sanxia-query-panel__select-row">
      <scroll-view scroll-x class="sanxia-query-panel__chips">
        <view
          v-for="name in preset.cruiseNames"
          :key="name"
          class="sanxia-query-panel__chip"
          :class="{ 'sanxia-query-panel__chip--active': model.cruiseName === name }"
          @tap="selectCruise(name)"
        >
          {{ name }}
        </view>
      </scroll-view>
    </view>

    <view v-else class="sanxia-query-panel__select-row">
      <scroll-view scroll-x class="sanxia-query-panel__chips">
        <view
          v-for="route in preset.hotRoutes"
          :key="route.id"
          class="sanxia-query-panel__chip"
          :class="{ 'sanxia-query-panel__chip--active': route.id === model.routeId }"
          @tap="selectRoute(route)"
        >
          {{ route.label }}
        </view>
      </scroll-view>
    </view>

    <button class="sanxia-query-panel__button" @tap="$emit('search', model)">立即查询</button>

    <view class="sanxia-query-panel__hot">
      <text class="sanxia-query-panel__hot-label">热门线路：</text>
      <text v-for="route in preset.hotRoutes" :key="route.id" class="sanxia-query-panel__hot-item">
        {{ route.label }}
      </text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, reactive, watch } from 'vue'
import type { SanxiaQueryMode, SanxiaQueryPreset, SanxiaRouteOption } from '@/types/sanxia'
import { formatDate, formatWeekday, formatZeroMonthDay } from '@/utils/date'

const props = defineProps<{
  preset: SanxiaQueryPreset
}>()

defineEmits<{
  search: [
    payload: {
      mode: SanxiaQueryMode
      departureDate: string
      fromCity: string
      toCity: string
      routeId?: string
      cruiseName?: string
    }
  ]
}>()

const tabs: Array<{ label: string; value: SanxiaQueryMode }> = [
  { label: '出行日期', value: 'date' },
  { label: '游轮查询', value: 'cruise' },
  { label: '航线查询', value: 'route' }
]

const today = formatDate(new Date())

const model = reactive({
  mode: props.preset.defaultMode,
  departureDate: props.preset.defaultDate,
  fromCity: props.preset.fromCity,
  toCity: props.preset.toCity,
  routeId: props.preset.hotRoutes[0]?.id,
  cruiseName: props.preset.cruiseNames[0]
})

const dateText = computed(() => formatZeroMonthDay(model.departureDate))
const weekdayText = computed(() => formatWeekday(model.departureDate))

watch(
  () => props.preset,
  (preset) => {
    model.mode = preset.defaultMode
    model.departureDate = preset.defaultDate
    model.fromCity = preset.fromCity
    model.toCity = preset.toCity
    model.routeId = preset.hotRoutes[0]?.id
    model.cruiseName = preset.cruiseNames[0]
  }
)

function changeMode(mode: SanxiaQueryMode) {
  model.mode = mode
}

function swapRoute() {
  const fromCity = model.fromCity
  model.fromCity = model.toCity
  model.toCity = fromCity
}

function resetDate() {
  model.departureDate = props.preset.defaultDate
}

function handleDateChange(event: { detail: { value: string } }) {
  model.departureDate = event.detail.value
}

function selectCruise(name: string) {
  model.cruiseName = name
}

function selectRoute(route: SanxiaRouteOption) {
  model.routeId = route.id
  model.fromCity = route.fromCity
  model.toCity = route.toCity
}
</script>

<style lang="scss" scoped>
.sanxia-query-panel {
  overflow: hidden;
  background: #fff;
  border-radius: 22rpx;
  box-shadow: 0 20rpx 46rpx rgba(15, 43, 66, 0.08);
}

.sanxia-query-panel__tabs {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  height: 86rpx;
  background: #f3f5fa;
}

.sanxia-query-panel__tab {
  @include flex-center;

  position: relative;
  color: #525866;
  font-size: 28rpx;
}

.sanxia-query-panel__tab--active {
  color: #101828;
  font-weight: 800;
  background: #fff;
  border-radius: 22rpx 22rpx 0 0;
}

.sanxia-query-panel__tab--active::after {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 72rpx;
  height: 6rpx;
  background: linear-gradient(90deg, #1ed6d0, rgba(30, 214, 208, 0));
  border-radius: 999rpx;
  transform: translateX(-50%);
  content: '';
}

.sanxia-query-panel__route {
  display: grid;
  grid-template-columns: 1fr 92rpx 1fr;
  align-items: center;
  padding: 48rpx 52rpx 28rpx;
}

.sanxia-query-panel__city {
  color: #0b1220;
  font-size: 40rpx;
  font-weight: 900;
  line-height: 1;
}

.sanxia-query-panel__city--right {
  text-align: right;
}

.sanxia-query-panel__swap {
  @include flex-center;
}

.sanxia-query-panel__ship-icon {
  position: relative;
  width: 48rpx;
  height: 48rpx;
  border: 5rpx solid #29d4d8;
  border-radius: 50%;
}

.sanxia-query-panel__ship-icon::before,
.sanxia-query-panel__ship-icon::after {
  position: absolute;
  content: '';
}

.sanxia-query-panel__ship-icon::before {
  top: 17rpx;
  left: 11rpx;
  width: 22rpx;
  height: 12rpx;
  background: #29d4d8;
  border-radius: 2rpx 2rpx 8rpx 8rpx;
}

.sanxia-query-panel__ship-icon::after {
  top: -8rpx;
  right: -5rpx;
  width: 14rpx;
  height: 14rpx;
  background: #fff;
}

.sanxia-query-panel__date-row,
.sanxia-query-panel__select-row {
  min-height: 78rpx;
  padding: 0 52rpx;
}

.sanxia-query-panel__date-row {
  @include flex-between;
}

.sanxia-query-panel__date {
  display: flex;
  align-items: baseline;
  gap: 20rpx;
}

.sanxia-query-panel__date-main {
  color: #111827;
  font-size: 34rpx;
  font-weight: 900;
}

.sanxia-query-panel__weekday,
.sanxia-query-panel__reset {
  color: #8f96a3;
  font-size: 24rpx;
}

.sanxia-query-panel__chips {
  width: 100%;
  white-space: nowrap;
}

.sanxia-query-panel__chip {
  display: inline-flex;
  align-items: center;
  height: 56rpx;
  margin-right: 16rpx;
  padding: 0 24rpx;
  color: #596273;
  font-size: 24rpx;
  background: #f5f7fb;
  border: 1rpx solid #edf0f5;
  border-radius: 999rpx;
}

.sanxia-query-panel__chip--active {
  color: #00a9bb;
  font-weight: 800;
  background: #e9fbfc;
  border-color: rgba(38, 203, 213, 0.48);
}

.sanxia-query-panel__button {
  height: 76rpx;
  margin: 26rpx 52rpx 24rpx;
  color: #fff;
  font-size: 28rpx;
  font-weight: 800;
  line-height: 76rpx;
  background: linear-gradient(90deg, #ff9561 0%, #ff455a 100%);
  border: 0;
  border-radius: 999rpx;
}

.sanxia-query-panel__hot {
  display: flex;
  gap: 18rpx;
  align-items: center;
  padding: 0 52rpx 32rpx;
  overflow: hidden;
  color: #8f96a3;
  font-size: 24rpx;
  white-space: nowrap;
}

.sanxia-query-panel__hot-label {
  font-weight: 800;
}

.sanxia-query-panel__hot-item {
  flex-shrink: 0;
}
</style>

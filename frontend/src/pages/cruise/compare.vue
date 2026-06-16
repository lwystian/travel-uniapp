<template>
  <view class="cruise-compare-page">
    <view class="cruise-compare-page__hero">
      <view class="cruise-compare-page__eyebrow">Cruise PK</view>
      <view class="cruise-compare-page__title">邮轮对比</view>
      <view class="cruise-compare-page__desc">按航线、船期、房型、价格和服务差异快速筛选</view>
    </view>

    <view class="cruise-compare-page__panel">
      <view class="cruise-compare-page__slot">
        <text class="cruise-compare-page__slot-label">游轮 A</text>
        <text class="cruise-compare-page__slot-value">美维凯璇</text>
      </view>
      <view class="cruise-compare-page__pk">PK</view>
      <view class="cruise-compare-page__slot">
        <text class="cruise-compare-page__slot-label">游轮 B</text>
        <text class="cruise-compare-page__slot-value">长江传说</text>
      </view>
    </view>

    <view class="cruise-compare-page__metrics">
      <view v-for="item in metrics" :key="item.label" class="cruise-compare-page__metric">
        <text class="cruise-compare-page__metric-label">{{ item.label }}</text>
        <text class="cruise-compare-page__metric-value">{{ item.value }}</text>
      </view>
    </view>

    <button class="cruise-compare-page__button" @tap="goXisha">去查西沙游轮</button>
  </view>
</template>

<script setup lang="ts">
import { ROUTES } from '@/constants/routes'
import { router } from '@/utils/router'

const metrics = [
  { label: '航线方向', value: '重庆-宜昌 / 宜昌-重庆' },
  { label: '出行天数', value: '4天3晚 / 5天4晚' },
  { label: '价格区间', value: '￥1600-￥4400' },
  { label: '适合人群', value: '亲子 / 父母安心 / 轻奢度假' }
]

function goXisha() {
  router.navigateTo(ROUTES.XISHA_HOME)
}
</script>

<style lang="scss" scoped>
.cruise-compare-page {
  min-height: 100vh;
  padding: 30rpx $space-md calc(56rpx + env(safe-area-inset-bottom));
  background: #f4f6fb;
}

.cruise-compare-page__hero {
  padding: 34rpx 30rpx;
  color: #102033;
  background:
    radial-gradient(circle at 92% 12%, rgba(35, 210, 216, 0.28) 0, transparent 150rpx),
    linear-gradient(135deg, #e5f8ff 0%, #fff 100%);
  border-radius: 22rpx;
}

.cruise-compare-page__eyebrow {
  color: #16a6b5;
  font-size: 22rpx;
  font-weight: 900;
  text-transform: uppercase;
}

.cruise-compare-page__title {
  margin-top: 12rpx;
  font-size: 42rpx;
  font-weight: 900;
}

.cruise-compare-page__desc {
  margin-top: 12rpx;
  color: #667085;
  font-size: 24rpx;
}

.cruise-compare-page__panel {
  display: grid;
  grid-template-columns: 1fr 92rpx 1fr;
  gap: 18rpx;
  align-items: center;
  margin-top: 24rpx;
  padding: 28rpx;
  background: #fff;
  border-radius: 18rpx;
  box-shadow: 0 12rpx 30rpx rgba(15, 23, 42, 0.05);
}

.cruise-compare-page__slot {
  min-width: 0;
  padding: 22rpx 18rpx;
  background: #f8fafc;
  border: 1rpx solid #edf0f5;
  border-radius: 14rpx;
}

.cruise-compare-page__slot-label,
.cruise-compare-page__slot-value {
  display: block;
}

.cruise-compare-page__slot-label {
  color: #98a2b3;
  font-size: 22rpx;
}

.cruise-compare-page__slot-value {
  @include text-ellipsis;

  margin-top: 8rpx;
  color: #111827;
  font-size: 28rpx;
  font-weight: 900;
}

.cruise-compare-page__pk {
  @include flex-center;

  width: 80rpx;
  height: 80rpx;
  color: #fff;
  font-size: 26rpx;
  font-weight: 900;
  background: linear-gradient(135deg, #23d2d8, #1976ff);
  border-radius: 50%;
}

.cruise-compare-page__metrics {
  margin-top: 24rpx;
  overflow: hidden;
  background: #fff;
  border-radius: 18rpx;
}

.cruise-compare-page__metric {
  @include flex-between;

  padding: 28rpx;
  border-bottom: 1rpx solid #eef0f5;
}

.cruise-compare-page__metric:last-child {
  border-bottom: 0;
}

.cruise-compare-page__metric-label {
  color: #667085;
  font-size: 24rpx;
}

.cruise-compare-page__metric-value {
  max-width: 430rpx;
  color: #111827;
  font-size: 24rpx;
  font-weight: 800;
  text-align: right;
}

.cruise-compare-page__button {
  height: 82rpx;
  margin-top: 30rpx;
  color: #fff;
  font-size: 28rpx;
  font-weight: 800;
  line-height: 82rpx;
  background: linear-gradient(90deg, #23d2d8, #1976ff);
  border: 0;
  border-radius: 999rpx;
}
</style>

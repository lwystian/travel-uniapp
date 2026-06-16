<template>
  <view class="home-service-grid">
    <view
      v-for="item in items"
      :key="item.id"
      class="home-service-grid__item"
      @tap="$emit('select', item)"
    >
      <view class="home-service-grid__icon" :class="`home-service-grid__icon--${item.theme}`">
        <view class="home-service-grid__shine" />
        <text>{{ item.iconText }}</text>
        <view v-if="item.badge" class="home-service-grid__badge">{{ item.badge }}</view>
      </view>
      <text class="home-service-grid__title">{{ item.title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { HomeCategory } from '@/types/home'

defineProps<{
  items: HomeCategory[]
}>()

defineEmits<{
  select: [target: HomeCategory]
}>()
</script>

<style lang="scss" scoped>
.home-service-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12rpx;
  padding: 18rpx 0 4rpx;
}

.home-service-grid__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14rpx;
  min-width: 0;
}

.home-service-grid__icon {
  @include flex-center;

  position: relative;
  width: 78rpx;
  height: 78rpx;
  overflow: hidden;
  color: #fff;
  font-size: 26rpx;
  font-weight: 900;
  background: linear-gradient(145deg, #61b8ff, #3f78ef);
  border-radius: 20rpx;
  box-shadow: 0 10rpx 18rpx rgba(37, 99, 235, 0.2);
}

.home-service-grid__icon::after {
  position: absolute;
  bottom: -18rpx;
  left: 50%;
  width: 70rpx;
  height: 40rpx;
  background: rgba(255, 255, 255, 0.26);
  border-radius: 50%;
  transform: translateX(-50%);
  content: '';
}

.home-service-grid__shine {
  position: absolute;
  top: 10rpx;
  right: 10rpx;
  width: 18rpx;
  height: 18rpx;
  background: rgba(255, 255, 255, 0.58);
  border-radius: 50%;
}

.home-service-grid__badge {
  position: absolute;
  top: -8rpx;
  right: -8rpx;
  padding: 3rpx 8rpx;
  color: #fff;
  font-size: 18rpx;
  font-weight: 900;
  background: #ef4444;
  border: 2rpx solid #fff;
  border-radius: 999rpx;
}

.home-service-grid__icon--green {
  background: linear-gradient(145deg, #7fe45c, #41b95f);
  box-shadow: 0 10rpx 18rpx rgba(65, 185, 95, 0.2);
}

.home-service-grid__icon--orange {
  background: linear-gradient(145deg, #ffbd4a, #ff8a3d);
  box-shadow: 0 10rpx 18rpx rgba(255, 138, 61, 0.2);
}

.home-service-grid__icon--purple {
  background: linear-gradient(145deg, #9f8cff, #5b75f1);
  box-shadow: 0 10rpx 18rpx rgba(91, 117, 241, 0.2);
}

.home-service-grid__icon--pink {
  background: linear-gradient(145deg, #ff8cc6, #f45a87);
  box-shadow: 0 10rpx 18rpx rgba(244, 90, 135, 0.2);
}

.home-service-grid__icon--yellow {
  background: linear-gradient(145deg, #ffd85b, #f6a81a);
  box-shadow: 0 10rpx 18rpx rgba(246, 168, 26, 0.2);
}

.home-service-grid__icon--blue {
  background: linear-gradient(145deg, #77d4ff, #4388ff);
  box-shadow: 0 10rpx 18rpx rgba(67, 136, 255, 0.2);
}

.home-service-grid__icon--red {
  background: linear-gradient(145deg, #ff8a8a, #ff5b62);
  box-shadow: 0 10rpx 18rpx rgba(255, 91, 98, 0.2);
}

.home-service-grid__title {
  @include text-ellipsis;

  width: 100%;
  color: #5f6b7a;
  font-size: 24rpx;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
}
</style>

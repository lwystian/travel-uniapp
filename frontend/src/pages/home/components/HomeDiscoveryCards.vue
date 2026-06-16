<template>
  <scroll-view class="home-discovery-cards" scroll-x>
    <view class="home-discovery-cards__inner">
      <view
        v-for="item in items"
        :key="item.id"
        class="home-discovery-cards__card"
        @tap="$emit('select', item)"
      >
        <view class="home-discovery-cards__cover">
          <BaseImage v-if="item.cover" :src="item.cover" />
          <view
            v-else
            class="home-discovery-cards__visual"
            :class="`home-discovery-cards__visual--${item.visualTone}`"
          >
            <view class="home-discovery-cards__mountain" />
            <view class="home-discovery-cards__landmark" />
            <view class="home-discovery-cards__path" />
          </view>
          <view v-if="item.badge" class="home-discovery-cards__badge">{{ item.badge }}</view>
          <view v-if="item.departureCity" class="home-discovery-cards__depart">
            {{ item.departureCity }}出发
          </view>
        </view>

        <view class="home-discovery-cards__body">
          <view class="home-discovery-cards__title">{{ item.title }}</view>
          <view v-if="item.subtitle" class="home-discovery-cards__summary">
            {{ item.subtitle }}
          </view>
          <view class="home-discovery-cards__route">
            <text v-if="item.days" class="home-discovery-cards__route-item">
              {{ item.days }}天{{ item.nights || 0 }}晚
            </text>
            <text v-if="item.departureCity" class="home-discovery-cards__route-item">
              {{ item.departureCity }}出发
            </text>
          </view>
          <view class="home-discovery-cards__tags">
            <text
              v-for="(tag, index) in item.tags.slice(0, 3)"
              :key="tag"
              class="home-discovery-cards__tag"
              :class="{ 'home-discovery-cards__tag--hot': index === 0 }"
            >
              {{ tag }}
            </text>
          </view>
          <view class="home-discovery-cards__footer">
            <view class="home-discovery-cards__price">
              <template v-if="item.price">
                <text class="home-discovery-cards__price-symbol">¥</text>
                <text class="home-discovery-cards__price-num">{{ item.price }}</text>
                <text class="home-discovery-cards__price-unit">起</text>
              </template>
              <text v-else class="home-discovery-cards__consult">
                {{ item.actionText || '请电询' }}
              </text>
            </view>
            <view v-if="item.joinedCount" class="home-discovery-cards__joined">
              {{ item.joinedCount }}人已报名
            </view>
          </view>
        </view>
      </view>
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import BaseImage from '@/components/base/BaseImage/index.vue'
import type { HomeDiscoveryCard } from '@/types/home'

defineProps<{
  items: HomeDiscoveryCard[]
}>()

defineEmits<{
  select: [target: HomeDiscoveryCard]
}>()
</script>

<style lang="scss" scoped>
.home-discovery-cards {
  width: 100%;
  white-space: nowrap;
}

.home-discovery-cards__inner {
  display: inline-flex;
  gap: 18rpx;
  min-width: 100%;
  padding-right: $space-md;
}

.home-discovery-cards__card {
  box-sizing: border-box;
  width: 344rpx;
  overflow: hidden;
  white-space: normal;
  background: #fff;
  border: 1rpx solid rgba(218, 226, 237, 0.9);
  border-radius: 12rpx;
  box-shadow: 0 10rpx 24rpx rgba(15, 23, 42, 0.08);
}

.home-discovery-cards__cover {
  position: relative;
  height: 206rpx;
  overflow: hidden;
  background: #e7edf4;
}

.home-discovery-cards__visual {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #dff4ff 0%, #9ec7da 48%, #22475e 100%);
}

.home-discovery-cards__visual::before {
  position: absolute;
  right: -30rpx;
  bottom: 28rpx;
  left: -30rpx;
  height: 52rpx;
  background: rgba(255, 255, 255, 0.24);
  border-radius: 50%;
  content: '';
}

.home-discovery-cards__visual::after {
  position: absolute;
  top: 36rpx;
  right: 42rpx;
  width: 44rpx;
  height: 44rpx;
  background: rgba(255, 239, 178, 0.76);
  border-radius: 50%;
  content: '';
}

.home-discovery-cards__mountain {
  position: absolute;
  right: -36rpx;
  bottom: 70rpx;
  width: 218rpx;
  height: 160rpx;
  background: rgba(32, 78, 85, 0.76);
  border-radius: 46% 54% 0 0;
  transform: rotate(-12deg);
}

.home-discovery-cards__landmark {
  position: absolute;
  bottom: 44rpx;
  left: 34rpx;
  width: 112rpx;
  height: 120rpx;
  background: linear-gradient(180deg, #f6c34c 0%, #b86b22 100%);
  border-radius: 12rpx 12rpx 4rpx 4rpx;
  box-shadow:
    34rpx 18rpx 0 -6rpx rgba(244, 180, 54, 0.92),
    68rpx 36rpx 0 -12rpx rgba(214, 122, 32, 0.9);
}

.home-discovery-cards__landmark::before {
  position: absolute;
  top: -22rpx;
  left: 10rpx;
  width: 0;
  height: 0;
  background: transparent;
  border-right: 45rpx solid transparent;
  border-bottom: 34rpx solid #7b3e14;
  border-left: 45rpx solid transparent;
  content: '';
}

.home-discovery-cards__path {
  position: absolute;
  right: 24rpx;
  bottom: -18rpx;
  width: 78rpx;
  height: 168rpx;
  background: rgba(235, 238, 225, 0.82);
  border-radius: 999rpx;
  transform: rotate(18deg);
}

.home-discovery-cards__visual--karst {
  background: linear-gradient(180deg, #e5f7ff 0%, #a7d7cb 42%, #315a44 100%);
}

.home-discovery-cards__visual--karst .home-discovery-cards__mountain {
  right: 24rpx;
  bottom: 30rpx;
  width: 150rpx;
  height: 224rpx;
  background: linear-gradient(90deg, #d8e0cd 0%, #465c4e 100%);
  border-radius: 48% 52% 24rpx 20rpx;
}

.home-discovery-cards__visual--karst .home-discovery-cards__landmark {
  bottom: 16rpx;
  left: -10rpx;
  width: 92rpx;
  height: 178rpx;
  background: rgba(100, 141, 79, 0.9);
  border-radius: 50%;
}

.home-discovery-cards__visual--night {
  background: linear-gradient(180deg, #1c274a 0%, #081326 58%, #111827 100%);
}

.home-discovery-cards__visual--night .home-discovery-cards__landmark {
  bottom: 36rpx;
  left: 34rpx;
  width: 36rpx;
  height: 132rpx;
  background: linear-gradient(180deg, #ffd36b 0%, #e84d2f 100%);
  box-shadow:
    50rpx -16rpx 0 2rpx rgba(246, 119, 49, 0.86),
    100rpx 14rpx 0 -2rpx rgba(252, 191, 73, 0.78),
    148rpx -28rpx 0 4rpx rgba(244, 114, 42, 0.72);
}

.home-discovery-cards__visual--night .home-discovery-cards__mountain {
  background: rgba(9, 23, 42, 0.72);
}

.home-discovery-cards__visual--cruise {
  background: linear-gradient(180deg, #bfe8ff 0%, #5faccf 48%, #196b91 100%);
}

.home-discovery-cards__visual--cruise .home-discovery-cards__landmark {
  bottom: 70rpx;
  left: 24rpx;
  width: 178rpx;
  height: 70rpx;
  background: linear-gradient(180deg, #f7fbff 0%, #c6d7e3 100%);
  border-radius: 12rpx 22rpx 34rpx 42rpx;
}

.home-discovery-cards__visual--forest {
  background: linear-gradient(180deg, #d8f6df 0%, #77bf7f 52%, #25613d 100%);
}

.home-discovery-cards__visual--river {
  background: linear-gradient(180deg, #dff4ff 0%, #80bad5 45%, #2a627e 100%);
}

.home-discovery-cards__badge {
  position: absolute;
  bottom: 0;
  left: 0;
  min-width: 70rpx;
  height: 34rpx;
  padding: 0 10rpx;
  color: #1f2937;
  font-size: 21rpx;
  font-weight: 900;
  line-height: 34rpx;
  background: linear-gradient(135deg, #ffe84a, #ffd21f);
  border-radius: 0 10rpx 0 0;
}

.home-discovery-cards__depart {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 34rpx;
  padding: 0 12rpx;
  color: #fff;
  font-size: 20rpx;
  font-weight: 800;
  line-height: 34rpx;
  background: rgba(15, 23, 42, 0.66);
  border-radius: 0 0 10rpx;
}

.home-discovery-cards__body {
  padding: 14rpx 14rpx 16rpx;
}

.home-discovery-cards__title {
  display: -webkit-box;
  min-height: 76rpx;
  overflow: hidden;
  color: #263344;
  font-size: 28rpx;
  font-weight: 900;
  line-height: 1.36;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.home-discovery-cards__summary {
  display: -webkit-box;
  min-height: 60rpx;
  margin-top: 8rpx;
  overflow: hidden;
  color: #6b7482;
  font-size: 22rpx;
  line-height: 1.35;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.home-discovery-cards__route {
  display: flex;
  flex-wrap: wrap;
  gap: 8rpx;
  min-height: 30rpx;
  margin-top: 10rpx;
}

.home-discovery-cards__route-item {
  height: 30rpx;
  padding: 0 8rpx;
  color: #475467;
  font-size: 20rpx;
  font-weight: 700;
  line-height: 30rpx;
  background: #f4f7f9;
  border-radius: 4rpx;
}

.home-discovery-cards__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8rpx;
  min-height: 32rpx;
  margin-top: 12rpx;
}

.home-discovery-cards__tag {
  @include text-ellipsis;

  max-width: 132rpx;
  height: 28rpx;
  padding: 0 8rpx;
  color: #c66a00;
  font-size: 20rpx;
  font-weight: 800;
  line-height: 28rpx;
  background: #fff8ed;
  border: 1rpx solid rgba(245, 158, 11, 0.48);
  border-radius: 4rpx;
}

.home-discovery-cards__tag--hot {
  color: #fff;
  background: #f45d48;
  border-color: #f45d48;
}

.home-discovery-cards__footer {
  @include flex-between;

  gap: 8rpx;
  margin-top: 14rpx;
}

.home-discovery-cards__price {
  display: flex;
  align-items: baseline;
  min-width: 0;
  color: #ff6a00;
  font-weight: 900;
}

.home-discovery-cards__price-symbol {
  font-size: 22rpx;
}

.home-discovery-cards__price-num {
  font-size: 34rpx;
}

.home-discovery-cards__price-unit {
  margin-left: 2rpx;
  font-size: 20rpx;
}

.home-discovery-cards__consult {
  color: #ff3b30;
  font-size: 24rpx;
  font-weight: 900;
  line-height: 1.2;
}

.home-discovery-cards__joined {
  @include text-ellipsis;

  flex: 1;
  min-width: 0;
  color: #8b94a3;
  font-size: 21rpx;
  text-align: right;
}
</style>

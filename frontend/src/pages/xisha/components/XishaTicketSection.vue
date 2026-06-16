<template>
  <view class="xisha-ticket-section">
    <view class="xisha-ticket-section__banner" @tap="$emit('banner', banner)">
      <BaseImage :src="banner.cover" />
      <view class="xisha-ticket-section__banner-copy">
        <text class="xisha-ticket-section__banner-title">{{ banner.title }}</text>
        <text class="xisha-ticket-section__banner-subtitle">{{ banner.subtitle }}</text>
      </view>
      <view class="xisha-ticket-section__banner-action">抢</view>
    </view>

    <view class="xisha-ticket-section__panel">
      <XishaTicketCard
        v-for="ticket in tickets"
        :key="ticket.id"
        :ticket="ticket"
        variant="compact"
        @select="$emit('select', $event)"
      />
      <view v-if="tickets.length > 2" class="xisha-ticket-section__dots">
        <view class="xisha-ticket-section__dot xisha-ticket-section__dot--active" />
        <view class="xisha-ticket-section__dot" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import BaseImage from '@/components/base/BaseImage/index.vue'
import type { XishaActivityBanner, XishaCruiseTicket } from '@/types/xisha'
import XishaTicketCard from './XishaTicketCard.vue'

defineProps<{
  banner: XishaActivityBanner
  tickets: XishaCruiseTicket[]
}>()

defineEmits<{
  select: [ticket: XishaCruiseTicket]
  banner: [banner: XishaActivityBanner]
}>()
</script>

<style lang="scss" scoped>
.xisha-ticket-section {
  position: relative;
  margin-top: 26rpx;
  padding-top: 1rpx;
  overflow: hidden;
  background: linear-gradient(180deg, #ff495b 0%, #ffd7df 54%, rgba(255, 255, 255, 0) 100%);
}

.xisha-ticket-section__banner {
  position: relative;
  height: 146rpx;
  margin: 0 $space-md;
  overflow: hidden;
  border-radius: 18rpx 18rpx 0 0;
}

.xisha-ticket-section__banner-copy {
  position: absolute;
  top: 30rpx;
  left: 220rpx;
  display: flex;
  flex-direction: column;
  gap: 10rpx;
  max-width: 360rpx;
}

.xisha-ticket-section__banner-title {
  color: #fff;
  font-size: 34rpx;
  font-weight: 900;
  line-height: 1;
}

.xisha-ticket-section__banner-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 22rpx;
}

.xisha-ticket-section__banner-action {
  @include flex-center;

  position: absolute;
  top: 25rpx;
  right: 36rpx;
  width: 84rpx;
  height: 84rpx;
  color: #ff5d33;
  font-size: 34rpx;
  font-weight: 900;
  background: #fff7d7;
  border: 8rpx solid rgba(255, 221, 137, 0.82);
  border-radius: 50%;
}

.xisha-ticket-section__panel {
  position: relative;
  margin: -6rpx $space-md 0;
  padding: 18rpx 0 34rpx;
  overflow: hidden;
  background: #fff;
  border-radius: 18rpx;
}

.xisha-ticket-section__dots {
  @include flex-center;

  position: absolute;
  bottom: 12rpx;
  left: 0;
  width: 100%;
  gap: 8rpx;
}

.xisha-ticket-section__dot {
  width: 10rpx;
  height: 10rpx;
  background: #d9dde5;
  border-radius: 999rpx;
}

.xisha-ticket-section__dot--active {
  width: 24rpx;
  background: #21d4d8;
}
</style>

<template>
  <view
    class="sanxia-ticket-card"
    :class="`sanxia-ticket-card--${variant}`"
    @tap="$emit('select', ticket)"
  >
    <view class="sanxia-ticket-card__cover">
      <BaseImage :src="ticket.cover" />
      <view v-if="ticket.badge" class="sanxia-ticket-card__badge">{{ ticket.badge }}</view>
    </view>

    <view class="sanxia-ticket-card__body">
      <view class="sanxia-ticket-card__title">{{ ticket.title }}</view>
      <view class="sanxia-ticket-card__subtitle">{{ ticket.subtitle }}</view>
      <view class="sanxia-ticket-card__info">
        <view class="sanxia-ticket-card__route">
          <text>{{ ticket.fromCity }}</text>
          <text class="sanxia-ticket-card__arrow" />
          <text>{{ ticket.toCity }}</text>
        </view>
        <view class="sanxia-ticket-card__duration">{{ ticket.durationText }}</view>
        <view class="sanxia-ticket-card__date">{{ departureText }} 出发</view>
        <view class="sanxia-ticket-card__price">￥{{ ticket.price }}</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseImage from '@/components/base/BaseImage/index.vue'
import type { SanxiaCruiseTicket } from '@/types/sanxia'
import { formatZeroMonthDay } from '@/utils/date'

const props = withDefaults(
  defineProps<{
    ticket: SanxiaCruiseTicket
    variant?: 'compact' | 'wide'
  }>(),
  {
    variant: 'compact'
  }
)

defineEmits<{
  select: [ticket: SanxiaCruiseTicket]
}>()

const departureText = computed(() =>
  formatZeroMonthDay(props.ticket.departureDate).replace('月', '/').replace('日', '')
)
</script>

<style lang="scss" scoped>
.sanxia-ticket-card {
  display: grid;
  min-width: 0;
  overflow: hidden;
  background: #fff;
}

.sanxia-ticket-card--compact {
  grid-template-columns: 220rpx minmax(0, 1fr);
  gap: 18rpx;
  padding: 18rpx 18rpx 18rpx 20rpx;
}

.sanxia-ticket-card--wide {
  grid-template-columns: 320rpx minmax(0, 1fr);
  gap: 0;
  border-radius: 18rpx;
  box-shadow: 0 12rpx 28rpx rgba(22, 42, 74, 0.06);
}

.sanxia-ticket-card__cover {
  position: relative;
  height: 210rpx;
  overflow: hidden;
  border-radius: 12rpx;
}

.sanxia-ticket-card--wide .sanxia-ticket-card__cover {
  height: 260rpx;
  border-radius: 18rpx 0 0 18rpx;
}

.sanxia-ticket-card__badge {
  @include flex-center;

  position: absolute;
  top: 12rpx;
  right: 12rpx;
  min-width: 44rpx;
  height: 44rpx;
  color: #ff5f1f;
  font-size: 24rpx;
  font-weight: 900;
  background: #fff6e9;
  border: 2rpx solid #ffd5ac;
  border-radius: 50%;
}

.sanxia-ticket-card__body {
  min-width: 0;
  padding: 4rpx 0;
}

.sanxia-ticket-card--wide .sanxia-ticket-card__body {
  padding: 22rpx 20rpx 18rpx 28rpx;
}

.sanxia-ticket-card__title {
  @include text-ellipsis;

  color: #1d2530;
  font-size: 28rpx;
  font-weight: 900;
}

.sanxia-ticket-card__subtitle {
  display: -webkit-box;
  height: 64rpx;
  margin-top: 14rpx;
  overflow: hidden;
  color: #6b7280;
  font-size: 24rpx;
  line-height: 32rpx;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.sanxia-ticket-card__info {
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12rpx 14rpx;
  align-items: center;
  margin-top: 18rpx;
  padding: 18rpx 16rpx;
  background: #fbfcfd;
}

.sanxia-ticket-card__route {
  display: flex;
  gap: 16rpx;
  align-items: center;
  color: #101828;
  font-size: 28rpx;
  font-weight: 900;
}

.sanxia-ticket-card__arrow {
  width: 28rpx;
  height: 2rpx;
  background: #d6dbe4;
}

.sanxia-ticket-card__duration {
  align-self: start;
  padding: 3rpx 8rpx;
  color: #ff5b1d;
  font-size: 20rpx;
  line-height: 1.2;
  border: 1rpx solid #ff8e55;
  border-radius: 4rpx;
}

.sanxia-ticket-card__date {
  color: #111827;
  font-size: 24rpx;
}

.sanxia-ticket-card__price {
  color: #ff5b1d;
  font-size: 30rpx;
  font-weight: 500;
  text-align: right;
}
</style>

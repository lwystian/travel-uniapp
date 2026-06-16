<template>
  <view class="order-card" @tap="$emit('select', order)">
    <view class="order-card__header">
      <view class="order-card__no">
        <text class="order-card__no-label">订单号</text>
        <text class="order-card__no-value">{{ order.orderNo }}</text>
      </view>
      <view class="order-card__status" :class="`order-card__status--${order.status}`">
        {{ statusText }}
      </view>
    </view>

    <view class="order-card__body">
      <view class="order-card__cover">
        <BaseImage :src="order.cover" />
      </view>
      <view class="order-card__info">
        <view class="order-card__title">{{ order.tourTitle }}</view>
        <view class="order-card__meta">
          {{ order.departureCity || '出发地待定' }}出发 · {{ order.destination || '目的地待定' }}
        </view>
        <view class="order-card__tags">
          <text v-if="order.productType" class="order-card__tag">{{ order.productType }}</text>
          <text class="order-card__tag">{{ order.travelers.length }}人出行</text>
        </view>
      </view>
    </view>

    <view class="order-card__schedule">
      <view class="order-card__schedule-item">
        <text class="order-card__schedule-label">出发日期</text>
        <text class="order-card__schedule-value">{{ order.scheduleDate }}</text>
      </view>
      <view class="order-card__schedule-item">
        <text class="order-card__schedule-label">{{ deadlineLabel }}</text>
        <text class="order-card__schedule-value">{{ deadlineValue }}</text>
      </view>
    </view>

    <view v-if="order.refundReason || order.afterSalesStatus" class="order-card__notice">
      <text>{{ order.afterSalesStatus || order.refundReason }}</text>
    </view>

    <view class="order-card__footer">
      <view class="order-card__amount">
        <text class="order-card__amount-label">实付</text>
        <BasePrice :value="order.paidAmount || order.totalAmount" />
      </view>
      <view class="order-card__actions" @tap.stop>
        <view
          v-for="action in actions"
          :key="action.key"
          class="order-card__action"
          :class="{ 'order-card__action--primary': action.primary }"
          @tap="$emit('action', action.key, order)"
        >
          {{ action.text }}
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseImage from '@/components/base/BaseImage/index.vue'
import BasePrice from '@/components/base/BasePrice/index.vue'
import { ORDER_STATUS_TEXT } from '@/constants/enums'
import type { Order, OrderStatus } from '@/types/order'

type OrderActionKey = 'pay' | 'appoint' | 'use' | 'detail' | 'review' | 'refund'

interface OrderAction {
  key: OrderActionKey
  text: string
  primary?: boolean
}

const props = defineProps<{
  order: Order
}>()

defineEmits<{
  select: [order: Order]
  action: [action: OrderActionKey, order: Order]
}>()

const statusText = computed(() => ORDER_STATUS_TEXT[props.order.status])

const deadlineLabel = computed(() => {
  if (props.order.status === 'pending_payment') return '支付截止'
  if (props.order.status === 'pending_reservation') return '预约截止'
  if (props.order.status === 'pending_use') return '使用凭证'
  if (props.order.status === 'completed') return '完成时间'
  return '创建时间'
})

const deadlineValue = computed(() => {
  if (props.order.status === 'pending_reservation')
    return props.order.appointmentDeadline || '待确认'
  if (props.order.status === 'pending_use') return props.order.useCode || '待生成'
  if (props.order.status === 'completed') return props.order.scheduleDate
  return props.order.expireAt || props.order.createdAt
})

const ACTIONS_BY_STATUS: Record<OrderStatus, OrderAction[]> = {
  pending_payment: [
    { key: 'detail', text: '详情' },
    { key: 'pay', text: '去支付', primary: true }
  ],
  paid: [
    { key: 'detail', text: '详情' },
    { key: 'use', text: '查看凭证', primary: true }
  ],
  confirmed: [
    { key: 'detail', text: '详情' },
    { key: 'use', text: '查看凭证', primary: true }
  ],
  pending_reservation: [
    { key: 'detail', text: '详情' },
    { key: 'appoint', text: '去预约', primary: true }
  ],
  pending_use: [
    { key: 'detail', text: '详情' },
    { key: 'use', text: '查看凭证', primary: true }
  ],
  completed: [
    { key: 'detail', text: '详情' },
    { key: 'review', text: '评价', primary: true }
  ],
  cancelled: [{ key: 'detail', text: '详情' }],
  refunded: [{ key: 'detail', text: '详情' }],
  after_sales: [
    { key: 'detail', text: '详情' },
    { key: 'refund', text: '售后进度', primary: true }
  ]
}

const actions = computed(() => ACTIONS_BY_STATUS[props.order.status])
</script>

<style lang="scss" scoped>
.order-card {
  padding: $space-md;
  background: #fff;
  border: 1rpx solid rgba(219, 226, 236, 0.92);
  border-radius: 28rpx;
  box-shadow: 0 16rpx 38rpx rgba(18, 31, 56, 0.07);
}

.order-card__header,
.order-card__footer,
.order-card__schedule {
  @include flex-between;
}

.order-card__header {
  gap: $space-md;
}

.order-card__no {
  display: flex;
  min-width: 0;
  flex-direction: column;
}

.order-card__no-label {
  color: #98a2b3;
  font-size: 20rpx;
}

.order-card__no-value {
  @include text-ellipsis;

  margin-top: 4rpx;
  color: #344054;
  font-size: $font-size-xs;
  font-weight: 800;
}

.order-card__status {
  flex: 0 0 auto;
  padding: 8rpx 16rpx;
  color: #2563eb;
  font-size: $font-size-xs;
  font-weight: 900;
  background: #eef4ff;
  border-radius: 999rpx;
}

.order-card__status--pending_payment {
  color: #dc2626;
  background: #fff1f2;
}

.order-card__status--pending_reservation,
.order-card__status--pending_use,
.order-card__status--paid,
.order-card__status--confirmed {
  color: #0369a1;
  background: #e0f2fe;
}

.order-card__status--completed {
  color: #15803d;
  background: #ecfdf3;
}

.order-card__status--refunded,
.order-card__status--after_sales,
.order-card__status--cancelled {
  color: #7c3aed;
  background: #f3e8ff;
}

.order-card__body {
  display: flex;
  gap: $space-sm;
  margin-top: $space-md;
}

.order-card__cover {
  flex: 0 0 auto;
  width: 178rpx;
  height: 138rpx;
  overflow: hidden;
  background: #eef2f6;
  border-radius: 20rpx;
}

.order-card__info {
  flex: 1;
  min-width: 0;
}

.order-card__title {
  display: -webkit-box;
  height: 72rpx;
  overflow: hidden;
  color: #101828;
  font-size: $font-size-md;
  font-weight: 900;
  line-height: 1.32;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.order-card__meta {
  @include text-ellipsis;

  margin-top: 10rpx;
  color: #667085;
  font-size: $font-size-xs;
}

.order-card__tags {
  display: flex;
  gap: 8rpx;
  margin-top: 12rpx;
  overflow: hidden;
}

.order-card__tag {
  @include text-ellipsis;

  max-width: 150rpx;
  padding: 5rpx 10rpx;
  color: #2563eb;
  font-size: 20rpx;
  background: #eef4ff;
  border-radius: 999rpx;
}

.order-card__schedule {
  gap: $space-sm;
  margin-top: $space-md;
  padding: 18rpx;
  background: #f8fafc;
  border: 1rpx solid rgba(226, 232, 240, 0.86);
  border-radius: 20rpx;
}

.order-card__schedule-item {
  display: flex;
  min-width: 0;
  flex-direction: column;
}

.order-card__schedule-item:last-child {
  align-items: flex-end;
}

.order-card__schedule-label {
  color: #98a2b3;
  font-size: 20rpx;
}

.order-card__schedule-value {
  @include text-ellipsis;

  max-width: 300rpx;
  margin-top: 6rpx;
  color: #182230;
  font-size: $font-size-xs;
  font-weight: 900;
}

.order-card__notice {
  margin-top: $space-sm;
  padding: 14rpx 18rpx;
  color: #7c3aed;
  font-size: $font-size-xs;
  font-weight: 800;
  background: #f8f5ff;
  border-radius: 16rpx;
}

.order-card__footer {
  gap: $space-md;
  margin-top: $space-md;
}

.order-card__amount {
  display: flex;
  align-items: baseline;
  gap: 8rpx;
}

.order-card__amount-label {
  color: #8a94a6;
  font-size: $font-size-xs;
}

.order-card__actions {
  display: flex;
  flex: 0 0 auto;
  gap: $space-xs;
}

.order-card__action {
  padding: 12rpx 20rpx;
  color: #475467;
  font-size: $font-size-sm;
  font-weight: 800;
  background: #fff;
  border: 1rpx solid rgba(208, 213, 221, 0.94);
  border-radius: 999rpx;
}

.order-card__action--primary {
  color: #fff;
  background: #182230;
  border-color: #182230;
}
</style>

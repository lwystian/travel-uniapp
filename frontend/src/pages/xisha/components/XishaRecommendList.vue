<template>
  <view class="xisha-recommend-list">
    <view class="xisha-recommend-list__header">
      <view>
        <view class="xisha-recommend-list__title">{{ title }}</view>
        <view v-if="subtitle" class="xisha-recommend-list__subtitle">{{ subtitle }}</view>
      </view>
    </view>

    <view class="xisha-recommend-list__items">
      <XishaTicketCard
        v-for="ticket in visibleTickets"
        :key="ticket.id"
        :ticket="ticket"
        variant="wide"
        @select="$emit('select', $event)"
      />
    </view>

    <button v-if="showMore" class="xisha-recommend-list__more" @tap="$emit('more')">
      查看更多行程
      <text class="xisha-recommend-list__more-arrow" />
    </button>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { XishaCruiseTicket } from '@/types/xisha'
import XishaTicketCard from './XishaTicketCard.vue'

const props = withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    tickets: XishaCruiseTicket[]
    limit?: number
  }>(),
  {
    subtitle: '',
    limit: 6
  }
)

defineEmits<{
  select: [ticket: XishaCruiseTicket]
  more: []
}>()

const visibleTickets = computed(() => props.tickets.slice(0, props.limit))
const showMore = computed(() => props.tickets.length > props.limit - 1)
</script>

<style lang="scss" scoped>
.xisha-recommend-list {
  padding: 34rpx $space-md 28rpx;
  background:
    radial-gradient(circle at 95% 0, rgba(255, 255, 255, 0.85) 0, transparent 160rpx),
    linear-gradient(180deg, #b9edff 0%, #f5f7fb 42%);
}

.xisha-recommend-list__header {
  @include flex-between;

  margin-bottom: 22rpx;
}

.xisha-recommend-list__title {
  color: #132131;
  font-size: 34rpx;
  font-weight: 900;
}

.xisha-recommend-list__subtitle {
  margin-top: 8rpx;
  color: #627284;
  font-size: 22rpx;
}

.xisha-recommend-list__items {
  display: flex;
  flex-direction: column;
  gap: 18rpx;
}

.xisha-recommend-list__more {
  @include flex-center;

  height: 78rpx;
  margin-top: 24rpx;
  color: #5f6673;
  font-size: 26rpx;
  line-height: 78rpx;
  background: #fff;
  border: 0;
  border-radius: 8rpx;
}

.xisha-recommend-list__more-arrow {
  width: 14rpx;
  height: 14rpx;
  margin-left: 8rpx;
  border-top: 2rpx solid #8f96a3;
  border-right: 2rpx solid #8f96a3;
  transform: rotate(45deg);
}
</style>

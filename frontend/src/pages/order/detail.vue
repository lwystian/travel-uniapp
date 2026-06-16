<template>
  <PageContainer v-if="order">
    <SectionTitle title="订单详情" :subtitle="ORDER_STATUS_TEXT[order.status]" />
    <view class="order-detail__panel">
      <view class="order-detail__title">{{ order.tourTitle }}</view>
      <view class="order-detail__row">订单号：{{ order.orderNo }}</view>
      <view class="order-detail__row">出发日期：{{ order.scheduleDate }}</view>
      <view class="order-detail__row"
        >联系人：{{ order.contactName }} {{ order.contactPhone }}</view
      >
    </view>

    <SectionTitle title="出行人" />
    <view class="order-detail__panel">
      <view v-for="traveler in order.travelers" :key="traveler.id" class="order-detail__row">
        {{ traveler.name }} · {{ traveler.phone }}
      </view>
    </view>

    <SectionTitle title="费用明细" />
    <view class="order-detail__panel">
      <view v-for="item in order.costItems" :key="item.name" class="order-detail__cost">
        <text>{{ item.name }} x{{ item.count || 1 }}</text>
        <text>{{ item.amount }}</text>
      </view>
      <BasePrice :value="order.totalAmount" />
    </view>
  </PageContainer>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import BasePrice from '@/components/base/BasePrice/index.vue'
import SectionTitle from '@/components/business/SectionTitle/index.vue'
import PageContainer from '@/components/layout/PageContainer/index.vue'
import { ORDER_STATUS_TEXT } from '@/constants/enums'
import { orderApi } from '@/services/modules/order'
import type { Order } from '@/types/order'

const order = ref<Order>()

onLoad(async (query) => {
  order.value = await orderApi.getOrderDetail({ id: String(query?.id || 'order-1') })
})
</script>

<style lang="scss" scoped>
.order-detail__panel {
  @include card;

  padding: $space-md;
}

.order-detail__title {
  font-size: $font-size-lg;
  font-weight: 700;
}

.order-detail__row,
.order-detail__cost {
  margin-top: $space-sm;
  color: $color-text-secondary;
  font-size: $font-size-sm;
}

.order-detail__cost {
  @include flex-between;
}
</style>

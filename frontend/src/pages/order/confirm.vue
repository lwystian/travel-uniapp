<template>
  <PageContainer>
    <SectionTitle title="确认订单" subtitle="填写出行人与联系人信息" />
    <view v-if="tour" class="confirm-card">
      <BaseImage class="confirm-card__cover" :src="tour.cover" />
      <view class="confirm-card__info">
        <view class="confirm-card__title">{{ tour.title }}</view>
        <view class="confirm-card__date">团期：{{ schedule?.date || '待选择' }}</view>
        <BasePrice :value="schedule?.adultPrice || tour.price" />
      </view>
    </view>

    <SectionTitle title="联系人" />
    <TravelerForm v-model="contactTraveler" />

    <view class="fixed-bottom-bar confirm-actions">
      <BasePrice :value="schedule?.adultPrice || tour?.price || 0" />
      <button class="confirm-actions__button" @tap="submitOrder">提交订单</button>
    </view>
  </PageContainer>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import BaseImage from '@/components/base/BaseImage/index.vue'
import BasePrice from '@/components/base/BasePrice/index.vue'
import SectionTitle from '@/components/business/SectionTitle/index.vue'
import TravelerForm from '@/components/business/TravelerForm/index.vue'
import PageContainer from '@/components/layout/PageContainer/index.vue'
import { ROUTES } from '@/constants/routes'
import { orderApi } from '@/services/modules/order'
import { tourApi } from '@/services/modules/tour'
import type { TourDetail, TourSchedule } from '@/types/tour'
import type { Traveler } from '@/types/user'
import { router } from '@/utils/router'

const tour = ref<TourDetail>()
const schedule = ref<TourSchedule>()
const contactTraveler = ref<Traveler>({
  id: 'temp',
  name: '',
  phone: '',
  idType: 'id_card',
  idNo: ''
})

onLoad(async (query) => {
  tour.value = await tourApi.getTourDetail({ id: String(query?.tourId || 'tour-1001') })
  schedule.value =
    tour.value.schedules.find((item) => item.id === String(query?.scheduleId || '')) ||
    tour.value.schedules[0]
})

async function submitOrder() {
  if (!tour.value || !schedule.value) return
  const order = await orderApi.createOrder({
    tourId: tour.value.id,
    scheduleId: schedule.value.id,
    travelerIds: [contactTraveler.value.id],
    contactName: contactTraveler.value.name || '待补充',
    contactPhone: contactTraveler.value.phone || '待补充'
  })
  router.redirectTo(ROUTES.PAYMENT_RESULT, { orderId: order.id, status: 'pending' }, { auth: true })
}
</script>

<style lang="scss" scoped>
.confirm-card {
  @include card;

  display: flex;
  gap: $space-md;
  padding: $space-md;
}

.confirm-card__cover {
  width: 180rpx;
  height: 128rpx;
  overflow: hidden;
  border-radius: $radius-sm;
}

.confirm-card__info {
  flex: 1;
}

.confirm-card__title {
  font-weight: 700;
}

.confirm-card__date {
  margin: $space-xs 0;
  color: $color-text-muted;
  font-size: $font-size-sm;
}

.confirm-actions {
  @include flex-between;
}

.confirm-actions__button {
  width: 240rpx;
  height: 76rpx;
  color: #fff;
  font-size: $font-size-md;
  line-height: 76rpx;
  background: $color-primary;
  border-radius: $radius-sm;
}
</style>

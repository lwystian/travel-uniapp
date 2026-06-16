<template>
  <PageContainer>
    <SectionTitle title="我的优惠券" />
    <view class="coupon-list">
      <view v-for="coupon in userStore.coupons" :key="coupon.id" class="coupon-card">
        <view>
          <view class="coupon-card__title">{{ coupon.title }}</view>
          <view class="coupon-card__desc">{{ coupon.description }}</view>
        </view>
        <view class="coupon-card__amount">¥{{ coupon.amount }}</view>
      </view>
    </view>
    <BaseEmpty v-if="userStore.coupons.length === 0" title="暂无优惠券" />
  </PageContainer>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import BaseEmpty from '@/components/base/BaseEmpty/index.vue'
import SectionTitle from '@/components/business/SectionTitle/index.vue'
import PageContainer from '@/components/layout/PageContainer/index.vue'
import { useUserStore } from '@/stores'

const userStore = useUserStore()

onLoad(() => {
  userStore.fetchCoupons()
})
</script>

<style lang="scss" scoped>
.coupon-list {
  display: flex;
  flex-direction: column;
  gap: $space-md;
}

.coupon-card {
  @include card;
  @include flex-between;

  padding: $space-md;
}

.coupon-card__title {
  font-weight: 700;
}

.coupon-card__desc {
  margin-top: $space-xs;
  color: $color-text-secondary;
  font-size: $font-size-sm;
}

.coupon-card__amount {
  color: $color-accent;
  font-size: $font-size-xl;
  font-weight: 700;
}
</style>

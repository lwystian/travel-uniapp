<template>
  <PageContainer>
    <view class="payment-result">
      <view class="payment-result__title">{{ title }}</view>
      <view class="payment-result__desc">订单号：{{ orderId || '待生成' }}</view>
      <button
        class="payment-result__button"
        @tap="router.navigateTo(ROUTES.ORDER_LIST, undefined, { auth: true })"
      >
        查看订单
      </button>
      <button class="payment-result__ghost" @tap="router.switchTab(ROUTES.HOME)">返回首页</button>
    </view>
  </PageContainer>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { computed, ref } from 'vue'
import PageContainer from '@/components/layout/PageContainer/index.vue'
import { ROUTES } from '@/constants/routes'
import { router } from '@/utils/router'

const orderId = ref('')
const status = ref('pending')
const title = computed(() => (status.value === 'success' ? '支付成功' : '支付结果处理中'))

onLoad((query) => {
  orderId.value = String(query?.orderId || '')
  status.value = String(query?.status || 'pending')
})
</script>

<style lang="scss" scoped>
.payment-result {
  @include flex-center;

  min-height: 70vh;
  flex-direction: column;
  gap: $space-md;
}

.payment-result__title {
  font-size: $font-size-xl;
  font-weight: 700;
}

.payment-result__desc {
  color: $color-text-secondary;
}

.payment-result__button,
.payment-result__ghost {
  width: 360rpx;
  height: 80rpx;
  line-height: 80rpx;
  border-radius: $radius-sm;
}

.payment-result__button {
  color: #fff;
  background: $color-primary;
}

.payment-result__ghost {
  color: $color-primary;
  background: $color-primary-light;
}
</style>

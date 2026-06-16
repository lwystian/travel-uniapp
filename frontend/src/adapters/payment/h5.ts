import type { PaymentParams, PaymentResult } from '@/types/platform'

export const h5PaymentAdapter = {
  pay(params: PaymentParams) {
    if (params.redirectUrl) {
      uni.navigateTo({ url: `/pages/payment/result?orderId=${params.orderId}&status=pending` })
    }
    return Promise.resolve<PaymentResult>({
      success: true,
      orderId: params.orderId,
      message: 'H5 支付跳转能力已预留'
    })
  }
}

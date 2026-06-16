import type { PaymentParams } from '@/types/platform'
import { h5PaymentAdapter } from './h5'
import { weappPaymentAdapter } from './weapp'

export const paymentAdapter = {
  pay(params: PaymentParams) {
    // #ifdef MP-WEIXIN
    return weappPaymentAdapter.pay(params)
    // #endif
    // #ifdef H5
    return h5PaymentAdapter.pay(params)
    // #endif
    return Promise.resolve({
      success: false,
      orderId: params.orderId,
      message: '当前平台暂不支持支付'
    })
  }
}

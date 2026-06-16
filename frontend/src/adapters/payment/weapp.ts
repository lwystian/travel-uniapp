import type { PaymentParams, PaymentResult } from '@/types/platform'

export const weappPaymentAdapter = {
  pay(params: PaymentParams) {
    return new Promise<PaymentResult>((resolve, reject) => {
      const options = {
        provider: 'wxpay',
        orderInfo: params.packageValue || '',
        timeStamp: params.timeStamp || '',
        nonceStr: params.nonceStr || '',
        package: params.packageValue || '',
        signType: params.signType || 'MD5',
        paySign: params.paySign || '',
        success: () => resolve({ success: true, orderId: params.orderId }),
        fail: (error) => reject(error)
      } as UniApp.RequestPaymentOptions
      uni.requestPayment(options)
    })
  }
}

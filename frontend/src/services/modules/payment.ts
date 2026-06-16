import { API_ENDPOINTS } from '@/constants/api'
import { http } from '@/services/request'
import type { PaymentParams } from '@/types/platform'

export const paymentApi = {
  createPrepay(orderId: string) {
    return http.post<PaymentParams>(
      API_ENDPOINTS.PAYMENT_PREPAY,
      { orderId },
      {
        mock: () => ({
          orderId,
          orderNo: 'T202605290001',
          amount: 5798,
          subject: '旅游订单支付',
          payChannel: 'wechat_mp',
          timeStamp: String(Date.now()),
          nonceStr: 'mock-nonce',
          packageValue: 'prepay_id=mock',
          signType: 'MD5',
          paySign: 'mock-sign',
          redirectUrl: `/pages/payment/result?orderId=${orderId}`
        })
      }
    )
  },

  getPaymentStatus(orderId: string) {
    return http.get<{ paid: boolean; orderId: string }>(
      API_ENDPOINTS.PAYMENT_STATUS,
      { orderId },
      {
        mock: () => ({ paid: true, orderId })
      }
    )
  }
}

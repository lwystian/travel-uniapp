export interface PaymentParams {
  orderId: string
  orderNo: string
  amount: number
  subject: string
  payChannel: 'wechat_mp' | 'wechat_h5' | 'h5_redirect'
  timeStamp?: string
  nonceStr?: string
  packageValue?: string
  signType?: string
  paySign?: string
  redirectUrl?: string
}

export interface PaymentResult {
  success: boolean
  orderId: string
  message?: string
}

export interface ShareInfo {
  title: string
  path: string
  imageUrl?: string
  desc?: string
  query?: Record<string, string | number | boolean | undefined>
}

export interface PhoneAuthPayload {
  code?: string
  encryptedData?: string
  iv?: string
}

export interface CustomerServiceOptions {
  corpId?: string
  url?: string
  extInfo?: string
}

export interface MenuButtonLayout {
  top: number
  height: number
  left?: number
  right?: number
  width?: number
}

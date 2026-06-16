export interface Coupon {
  id: string
  title: string
  description: string
  amount: number
  threshold: number
  startAt: string
  endAt: string
  status: 'unused' | 'used' | 'expired'
  scope: 'all' | 'tour' | 'destination'
}

export interface MarketingActivity {
  id: string
  title: string
  cover: string
  type: 'coupon' | 'flash_sale' | 'group_buy' | 'member' | 'distribution'
  startAt: string
  endAt: string
  description: string
}

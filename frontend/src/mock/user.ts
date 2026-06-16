import type { Coupon } from '@/types/marketing'
import type { Traveler, UserInfo } from '@/types/user'

export const mockUserInfo: UserInfo = {
  id: 'user-1',
  nickname: '旅行玩家',
  avatar: '/static/images/mock/avatar.png',
  phone: '13800000000',
  gender: 'unknown',
  city: '杭州',
  memberLevel: '白银会员',
  points: 2680
}

export const mockTravelers: Traveler[] = [
  {
    id: 'traveler-1',
    name: '张三',
    phone: '13800000000',
    idType: 'id_card',
    idNo: '330100199001010000',
    gender: 'male',
    isDefault: true
  },
  {
    id: 'traveler-2',
    name: '李四',
    phone: '13900000000',
    idType: 'id_card',
    idNo: '330100199202020000',
    gender: 'female'
  }
]

export const mockCoupons: Coupon[] = [
  {
    id: 'coupon-1',
    title: '国内长线满减券',
    description: '满 3000 减 200',
    amount: 200,
    threshold: 3000,
    startAt: '2026-05-01',
    endAt: '2026-12-31',
    status: 'unused',
    scope: 'tour'
  },
  {
    id: 'coupon-2',
    title: '周边游新人券',
    description: '满 500 减 50',
    amount: 50,
    threshold: 500,
    startAt: '2026-05-01',
    endAt: '2026-12-31',
    status: 'unused',
    scope: 'all'
  }
]

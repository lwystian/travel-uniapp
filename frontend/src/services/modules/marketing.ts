import { API_ENDPOINTS } from '@/constants/api'
import { mockCoupons } from '@/mock/user'
import { http } from '@/services/request'
import type { Coupon, MarketingActivity } from '@/types/marketing'

export const marketingApi = {
  getActivities() {
    return http.get<MarketingActivity[]>(API_ENDPOINTS.MARKETING_ACTIVITIES, undefined, {
      mock: () => [
        {
          id: 'activity-1',
          title: '暑期亲子游早鸟活动',
          cover: '/static/images/mock/grassland.jpg',
          type: 'flash_sale',
          startAt: '2026-05-01',
          endAt: '2026-07-31',
          description: '草原、海岛、三峡游轮线路限时优惠。'
        }
      ]
    })
  },

  getCoupons() {
    return http.get<Coupon[]>(API_ENDPOINTS.MARKETING_COUPONS, undefined, {
      mock: () => mockCoupons
    })
  }
}

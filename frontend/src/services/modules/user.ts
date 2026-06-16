import { API_ENDPOINTS } from '@/constants/api'
import { mockCoupons } from '@/mock/user'
import { mockTravelers, mockUserInfo } from '@/mock/user'
import { http } from '@/services/request'
import type { Coupon } from '@/types/marketing'
import type { Traveler, UserInfo } from '@/types/user'

export const userApi = {
  getProfile() {
    return http.get<UserInfo>(API_ENDPOINTS.USER_PROFILE, undefined, {
      mock: () => mockUserInfo
    })
  },

  updateProfile(data: Partial<UserInfo>) {
    return http.put<UserInfo>(API_ENDPOINTS.USER_PROFILE, data, {
      mock: () => ({ ...mockUserInfo, ...data })
    })
  },

  getTravelers() {
    return http.get<Traveler[]>(API_ENDPOINTS.USER_TRAVELERS, undefined, {
      mock: () => mockTravelers
    })
  },

  getCoupons() {
    return http.get<Coupon[]>(API_ENDPOINTS.USER_COUPONS, undefined, {
      mock: () => mockCoupons
    })
  }
}

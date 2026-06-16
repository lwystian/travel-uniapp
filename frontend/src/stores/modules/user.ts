import { defineStore } from 'pinia'
import { userApi } from '@/services/modules/user'
import type { Coupon } from '@/types/marketing'
import type { Traveler, UserInfo } from '@/types/user'

export interface UserState {
  profile: UserInfo | null
  travelers: Traveler[]
  coupons: Coupon[]
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    profile: null,
    travelers: [],
    coupons: []
  }),
  getters: {
    hasTravelers: (state) => state.travelers.length > 0,
    availableCoupons: (state) => state.coupons.filter((item) => item.status === 'unused')
  },
  actions: {
    async fetchProfile() {
      this.profile = await userApi.getProfile()
      return this.profile
    },

    async fetchTravelers() {
      this.travelers = await userApi.getTravelers()
      return this.travelers
    },

    async fetchCoupons() {
      this.coupons = await userApi.getCoupons()
      return this.coupons
    },

    reset() {
      this.profile = null
      this.travelers = []
      this.coupons = []
    }
  }
})

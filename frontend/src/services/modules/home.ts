import { API_ENDPOINTS } from '@/constants/api'
import { mockHomeData } from '@/mock/home'
import { http } from '@/services/request'
import type { HomeData } from '@/types/home'

export const homeApi = {
  getHomeData() {
    return http.get<HomeData>(API_ENDPOINTS.HOME, undefined, {
      mock: () => mockHomeData
    })
  }
}

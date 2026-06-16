import { API_ENDPOINTS } from '@/constants/api'
import { getMockChongqingTours, mockChongqingChannelData } from '@/mock/chongqing'
import { http } from '@/services/request'
import type { PaginationResult } from '@/types/common'
import type {
  ChongqingChannelData,
  ChongqingTourItem,
  ChongqingTourListParams
} from '@/types/chongqing'

export const chongqingApi = {
  getChannelData() {
    return http.get<ChongqingChannelData>(API_ENDPOINTS.CHONGQING_HOME, undefined, {
      mock: () => mockChongqingChannelData
    })
  },

  getTourList(params: ChongqingTourListParams = {}) {
    return http.get<PaginationResult<ChongqingTourItem>>(API_ENDPOINTS.CHONGQING_TOURS, params, {
      mock: () => getMockChongqingTours(params)
    })
  }
}

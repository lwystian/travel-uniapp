import { API_ENDPOINTS } from '@/constants/api'
import { getMockDestination, mockDestinations } from '@/mock/destination'
import { http } from '@/services/request'
import type { PaginationResult } from '@/types/common'
import type { Destination } from '@/types/destination'

export const destinationApi = {
  getDestinationList() {
    return http.get<PaginationResult<Destination>>(API_ENDPOINTS.DESTINATION_LIST, undefined, {
      mock: () => ({
        list: mockDestinations,
        page: 1,
        pageSize: mockDestinations.length,
        total: mockDestinations.length,
        hasMore: false
      })
    })
  },

  getDestinationDetail(params: { id: string }) {
    return http.get<Destination>(API_ENDPOINTS.DESTINATION_DETAIL, params, {
      mock: () => getMockDestination(params.id)
    })
  }
}

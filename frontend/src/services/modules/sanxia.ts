import { API_ENDPOINTS } from '@/constants/api'
import { mockSanxiaHomeData, searchMockSanxiaTickets } from '@/mock/sanxia'
import { http } from '@/services/request'
import type { SanxiaCruiseTicket, SanxiaHomeData, SanxiaTicketSearchParams } from '@/types/sanxia'

export const sanxiaApi = {
  getHomeData() {
    return http.get<SanxiaHomeData>(API_ENDPOINTS.SANXIA_HOME, undefined, {
      mock: () => mockSanxiaHomeData
    })
  },

  searchTickets(params: SanxiaTicketSearchParams) {
    return http.get<SanxiaCruiseTicket[]>(API_ENDPOINTS.SANXIA_TICKET_SEARCH, params, {
      mock: () => searchMockSanxiaTickets(params)
    })
  }
}

import { API_ENDPOINTS } from '@/constants/api'
import { mockXishaHomeData, searchMockXishaTickets } from '@/mock/xisha'
import { http } from '@/services/request'
import type { XishaCruiseTicket, XishaHomeData, XishaTicketSearchParams } from '@/types/xisha'

export const xishaApi = {
  getHomeData() {
    return http.get<XishaHomeData>(API_ENDPOINTS.XISHA_HOME, undefined, {
      mock: () => mockXishaHomeData
    })
  },

  searchTickets(params: XishaTicketSearchParams) {
    return http.get<XishaCruiseTicket[]>(API_ENDPOINTS.XISHA_TICKET_SEARCH, params, {
      mock: () => searchMockXishaTickets(params)
    })
  }
}

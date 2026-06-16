import { API_ENDPOINTS } from '@/constants/api'
import { mockTeamCustomDetail } from '@/mock/team'
import { http } from '@/services/request'
import type { TeamCustomDetail } from '@/types/team'

export const teamApi = {
  getTeamCustomDetail(params?: { id?: string }) {
    return http.get<TeamCustomDetail>(API_ENDPOINTS.TEAM_CUSTOM_DETAIL, params, {
      mock: () => mockTeamCustomDetail
    })
  }
}

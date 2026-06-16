import { API_ENDPOINTS } from '@/constants/api'
import { mockUserInfo } from '@/mock/user'
import { http } from '@/services/request'
import type { LoginResult } from '@/types/user'

export interface LoginParams {
  code?: string
  phone?: string
  smsCode?: string
  token?: string
}

export const authApi = {
  login(data: LoginParams) {
    return http.post<LoginResult>(API_ENDPOINTS.AUTH_LOGIN, data, {
      skipAuth: true,
      mock: () => ({
        token: data.token || 'mock-token',
        refreshToken: 'mock-refresh-token',
        userInfo: mockUserInfo,
        expiresIn: 7200
      })
    })
  },

  refreshToken(refreshToken: string) {
    return http.post<{ token: string; refreshToken: string }>(
      API_ENDPOINTS.AUTH_REFRESH,
      { refreshToken },
      {
        skipAuth: true,
        mock: () => ({
          token: 'mock-token-refreshed',
          refreshToken: 'mock-refresh-token-refreshed'
        })
      }
    )
  },

  logout() {
    return http.post<{ success: boolean }>(API_ENDPOINTS.AUTH_LOGOUT, undefined, {
      mock: () => ({ success: true })
    })
  }
}

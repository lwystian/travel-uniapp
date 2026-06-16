import { defineStore } from 'pinia'
import { authAdapter } from '@/adapters/auth'
import { STORAGE_KEYS } from '@/constants/storageKeys'
import { authApi, type LoginParams } from '@/services/modules/auth'
import type { UserInfo } from '@/types/user'
import { storage } from '@/utils/storage'

export interface AuthState {
  token: string
  refreshToken: string
  userInfo: UserInfo | null
}

function createDefaultState(): AuthState {
  return {
    token: storage.get<string>(STORAGE_KEYS.TOKEN, '') || '',
    refreshToken: storage.get<string>(STORAGE_KEYS.REFRESH_TOKEN, '') || '',
    userInfo: storage.get<UserInfo | null>(STORAGE_KEYS.USER_INFO, null) || null
  }
}

export const useAuthStore = defineStore('auth', {
  state: createDefaultState,
  getters: {
    isLogin: (state) => Boolean(state.token),
    nickname: (state) => state.userInfo?.nickname || '未登录'
  },
  actions: {
    setAuth(payload: { token: string; refreshToken: string; userInfo: UserInfo }) {
      this.token = payload.token
      this.refreshToken = payload.refreshToken
      this.userInfo = payload.userInfo
      storage.set(STORAGE_KEYS.TOKEN, payload.token)
      storage.set(STORAGE_KEYS.REFRESH_TOKEN, payload.refreshToken)
      storage.set(STORAGE_KEYS.USER_INFO, payload.userInfo)
    },

    async login(params?: LoginParams) {
      const platformPayload = await authAdapter.login(params)
      const result = await authApi.login({ ...params, ...platformPayload })
      this.setAuth(result)
      return result
    },

    async loginBySms(phone: string, smsCode: string) {
      await authAdapter.loginBySms(phone, smsCode)
      return this.login({ phone, smsCode })
    },

    async refresh() {
      if (!this.refreshToken) return null
      const result = await authApi.refreshToken(this.refreshToken)
      this.token = result.token
      this.refreshToken = result.refreshToken
      storage.set(STORAGE_KEYS.TOKEN, result.token)
      storage.set(STORAGE_KEYS.REFRESH_TOKEN, result.refreshToken)
      return result
    },

    updateUserInfo(userInfo: Partial<UserInfo>) {
      this.userInfo = this.userInfo ? { ...this.userInfo, ...userInfo } : (userInfo as UserInfo)
      storage.set(STORAGE_KEYS.USER_INFO, this.userInfo)
    },

    async logout() {
      await authApi.logout()
      this.reset()
    },

    reset() {
      this.token = ''
      this.refreshToken = ''
      this.userInfo = null
      storage.remove(STORAGE_KEYS.TOKEN)
      storage.remove(STORAGE_KEYS.REFRESH_TOKEN)
      storage.remove(STORAGE_KEYS.USER_INFO)
    }
  }
})

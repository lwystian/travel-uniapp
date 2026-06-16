import { defineStore } from 'pinia'
import { platformAdapter } from '@/adapters/platform'

export interface AppState {
  platform: string
  statusBarHeight: number
  safeAreaBottom: number
  networkType: string
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    platform: platformAdapter.getPlatform(),
    statusBarHeight: 0,
    safeAreaBottom: 0,
    networkType: 'unknown'
  }),
  getters: {
    isWeapp: (state) => state.platform === 'mp-weixin',
    isH5: (state) => state.platform === 'h5'
  },
  actions: {
    initSystemInfo() {
      const info = platformAdapter.getSystemInfo()
      this.statusBarHeight = info.statusBarHeight || 0
      const screenHeight = info.screenHeight || 0
      const safeBottom = info.safeArea?.bottom || screenHeight
      this.safeAreaBottom = Math.max(screenHeight - safeBottom, 0)
    },

    setNetworkType(networkType: string) {
      this.networkType = networkType
    },

    reset() {
      this.networkType = 'unknown'
    }
  }
})

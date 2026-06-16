import type { CustomerServiceOptions, MenuButtonLayout } from '@/types/platform'

const fallbackMenuButtonLayout: MenuButtonLayout = {
  top: 24,
  height: 32,
  right: 8,
  width: 88
}

interface WeappMenuButtonApi {
  getMenuButtonBoundingClientRect?: () => MenuButtonLayout
}

export const weappPlatformAdapter = {
  getPlatform() {
    return 'mp-weixin' as const
  },

  getSystemInfo() {
    return uni.getSystemInfoSync()
  },

  getMenuButtonLayout() {
    // #ifdef MP-WEIXIN
    if (typeof wx !== 'undefined') {
      const weappApi = wx as typeof wx & WeappMenuButtonApi
      if (weappApi.getMenuButtonBoundingClientRect) {
        const rect = weappApi.getMenuButtonBoundingClientRect()
        return {
          top: rect.top,
          height: rect.height,
          left: rect.left,
          right: rect.right,
          width: rect.width
        }
      }
    }
    // #endif
    return fallbackMenuButtonLayout
  },

  previewImage(urls: string[], current?: string) {
    uni.previewImage({ urls, current: current || urls[0] })
  },

  makePhoneCall(phoneNumber: string) {
    uni.makePhoneCall({ phoneNumber })
  },

  openLocation(options: UniApp.OpenLocationOptions) {
    uni.openLocation(options)
  },

  getLocation() {
    return new Promise<UniApp.GetLocationSuccess>((resolve, reject) => {
      uni.getLocation({
        type: 'gcj02',
        success: resolve,
        fail: reject
      })
    })
  },

  openCustomerService(options?: CustomerServiceOptions) {
    // #ifdef MP-WEIXIN
    if (
      typeof wx !== 'undefined' &&
      wx.openCustomerServiceChat &&
      options?.corpId &&
      options?.extInfo
    ) {
      wx.openCustomerServiceChat({
        extInfo: { url: options.extInfo },
        corpId: options.corpId,
        success: () => undefined
      })
      return
    }
    // #endif

    uni.showToast({ title: '客服能力待接入', icon: 'none' })
  },

  saveImageToPhotosAlbum(filePath: string) {
    return new Promise<void>((resolve, reject) => {
      uni.saveImageToPhotosAlbum({
        filePath,
        success: () => resolve(),
        fail: reject
      })
    })
  },

  requestSubscribeMessage(tmplIds: string[]) {
    return new Promise<unknown>((resolve, reject) => {
      // #ifdef MP-WEIXIN
      uni.requestSubscribeMessage({
        tmplIds,
        success: resolve,
        fail: reject
      })
      // #endif
      // #ifndef MP-WEIXIN
      resolve({})
      // #endif
    })
  }
}

import type { CustomerServiceOptions, MenuButtonLayout } from '@/types/platform'

const defaultMenuButtonLayout: MenuButtonLayout = {
  top: 22,
  height: 34,
  right: 12,
  width: 88
}

export const h5PlatformAdapter = {
  getPlatform() {
    return 'h5' as const
  },

  getSystemInfo() {
    return uni.getSystemInfoSync()
  },

  getMenuButtonLayout() {
    return defaultMenuButtonLayout
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
    if (options?.url) {
      uni.navigateTo({ url: `/pages/webview/index?url=${encodeURIComponent(options.url)}` })
      return
    }
    uni.showToast({ title: '客服链接待配置', icon: 'none' })
  },

  saveImageToPhotosAlbum() {
    uni.showToast({ title: '请长按图片保存', icon: 'none' })
    return Promise.resolve()
  },

  requestSubscribeMessage() {
    return Promise.resolve({})
  }
}

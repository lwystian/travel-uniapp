import { h5PlatformAdapter } from './h5'
import { weappPlatformAdapter } from './weapp'

export const platformAdapter = {
  getPlatform() {
    // #ifdef MP-WEIXIN
    return weappPlatformAdapter.getPlatform()
    // #endif
    // #ifdef H5
    return h5PlatformAdapter.getPlatform()
    // #endif
    return 'unknown' as const
  },

  getSystemInfo() {
    return uni.getSystemInfoSync()
  },

  getMenuButtonLayout() {
    // #ifdef MP-WEIXIN
    return weappPlatformAdapter.getMenuButtonLayout()
    // #endif
    // #ifdef H5
    return h5PlatformAdapter.getMenuButtonLayout()
    // #endif
    return h5PlatformAdapter.getMenuButtonLayout()
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
    // #ifdef MP-WEIXIN
    return weappPlatformAdapter.getLocation()
    // #endif
    // #ifdef H5
    return h5PlatformAdapter.getLocation()
    // #endif
    return Promise.reject(new Error('当前平台暂不支持定位'))
  },

  openCustomerService(options?: Parameters<typeof weappPlatformAdapter.openCustomerService>[0]) {
    // #ifdef MP-WEIXIN
    return weappPlatformAdapter.openCustomerService(options)
    // #endif
    // #ifdef H5
    return h5PlatformAdapter.openCustomerService(options)
    // #endif
    return uni.showToast({ title: '客服能力待接入', icon: 'none' })
  },

  saveImageToPhotosAlbum(filePath: string) {
    // #ifdef MP-WEIXIN
    return weappPlatformAdapter.saveImageToPhotosAlbum(filePath)
    // #endif
    // #ifdef H5
    return h5PlatformAdapter.saveImageToPhotosAlbum()
    // #endif
    return Promise.resolve()
  },

  requestSubscribeMessage(tmplIds: string[]) {
    // #ifdef MP-WEIXIN
    return weappPlatformAdapter.requestSubscribeMessage(tmplIds)
    // #endif
    // #ifdef H5
    return h5PlatformAdapter.requestSubscribeMessage()
    // #endif
    return Promise.resolve({})
  }
}

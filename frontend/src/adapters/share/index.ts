import type { ShareInfo } from '@/types/platform'
import { h5ShareAdapter } from './h5'
import { weappShareAdapter } from './weapp'

export const shareAdapter = {
  sharePage(info: ShareInfo) {
    // #ifdef MP-WEIXIN
    return weappShareAdapter.sharePage(info)
    // #endif
    // #ifdef H5
    return h5ShareAdapter.sharePage(info)
    // #endif
    return Promise.resolve(info)
  },

  normalizeForWeapp(info: ShareInfo) {
    return weappShareAdapter.normalize(info)
  }
}

import type { ShareInfo } from '@/types/platform'
import { stringifyQuery } from '@/utils/qs'

export const weappShareAdapter = {
  normalize(info: ShareInfo) {
    return {
      title: info.title,
      path: `${info.path}${stringifyQuery(info.query)}`,
      imageUrl: info.imageUrl
    }
  },

  sharePage(info: ShareInfo) {
    return Promise.resolve(this.normalize(info))
  }
}

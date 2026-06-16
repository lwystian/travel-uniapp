import type { ShareInfo } from '@/types/platform'

export const h5ShareAdapter = {
  sharePage(info: ShareInfo) {
    uni.setClipboardData({
      data: `${info.title} ${info.path}`,
      success: () => {
        uni.showToast({ title: '链接已复制', icon: 'none' })
      }
    })
    return Promise.resolve(info)
  }
}

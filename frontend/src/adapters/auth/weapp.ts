import type { PhoneAuthPayload } from '@/types/platform'

export interface WeappLoginPayload {
  code: string
}

export const weappAuthAdapter = {
  login() {
    return new Promise<WeappLoginPayload>((resolve, reject) => {
      uni.login({
        provider: 'weixin',
        success: (res) => resolve({ code: res.code }),
        fail: reject
      })
    })
  },

  getPhoneNumber(payload: PhoneAuthPayload) {
    return Promise.resolve(payload)
  }
}

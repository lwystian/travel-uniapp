import type { PhoneAuthPayload } from '@/types/platform'
import { h5AuthAdapter, type H5LoginPayload } from './h5'
import { weappAuthAdapter } from './weapp'

export const authAdapter = {
  login(payload?: H5LoginPayload) {
    // #ifdef MP-WEIXIN
    return weappAuthAdapter.login()
    // #endif
    // #ifdef H5
    return h5AuthAdapter.login(payload)
    // #endif
    return Promise.resolve(payload || {})
  },

  getPhoneNumber(payload: PhoneAuthPayload) {
    // #ifdef MP-WEIXIN
    return weappAuthAdapter.getPhoneNumber(payload)
    // #endif
    return Promise.resolve(payload)
  },

  loginBySms(phone: string, smsCode: string) {
    return h5AuthAdapter.loginBySms(phone, smsCode)
  },

  loginByOAuth(oauthCode: string) {
    return h5AuthAdapter.loginByOAuth(oauthCode)
  }
}

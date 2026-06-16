export interface H5LoginPayload {
  token?: string
  phone?: string
  smsCode?: string
  oauthCode?: string
}

export const h5AuthAdapter = {
  login(payload?: H5LoginPayload) {
    return Promise.resolve(payload || {})
  },

  loginBySms(phone: string, smsCode: string) {
    return Promise.resolve({ phone, smsCode })
  },

  loginByOAuth(oauthCode: string) {
    return Promise.resolve({ oauthCode })
  }
}

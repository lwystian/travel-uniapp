export interface UserInfo {
  id: string
  nickname: string
  avatar: string
  phone?: string
  gender?: 'male' | 'female' | 'unknown'
  birthday?: string
  city?: string
  memberLevel: string
  points: number
}

export interface Traveler {
  id: string
  name: string
  phone: string
  idType: 'id_card' | 'passport' | 'other'
  idNo: string
  birthday?: string
  gender?: 'male' | 'female' | 'unknown'
  isDefault?: boolean
}

export interface LoginResult {
  token: string
  refreshToken: string
  userInfo: UserInfo
  expiresIn: number
}

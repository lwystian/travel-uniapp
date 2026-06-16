import { STORAGE_KEYS } from '@/constants/storageKeys'
import { storage } from '@/utils/storage'

export function getAuthHeader(skipAuth?: boolean): Record<string, string> {
  if (skipAuth) return {}
  const token = storage.get<string>(STORAGE_KEYS.TOKEN)
  return token ? { Authorization: `Bearer ${token}` } : {}
}

export async function refreshToken() {
  const refreshTokenValue = storage.get<string>(STORAGE_KEYS.REFRESH_TOKEN)
  if (!refreshTokenValue) return null
  return refreshTokenValue
}

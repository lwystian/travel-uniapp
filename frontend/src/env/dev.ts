import type { AppEnv } from '@/types/common'

export const devEnv: AppEnv = {
  name: 'dev',
  baseURL: 'https://api.example.com',
  uploadURL: 'https://api.example.com/upload',
  useMock: true,
  enableLog: true,
  timeout: 15000
}

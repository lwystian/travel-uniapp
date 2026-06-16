import type { AppEnv } from '@/types/common'

export const prodEnv: AppEnv = {
  name: 'prod',
  baseURL: 'https://api.travel.example.com',
  uploadURL: 'https://api.travel.example.com/upload',
  useMock: false,
  enableLog: false,
  timeout: 15000
}

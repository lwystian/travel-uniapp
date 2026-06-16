import type { AppEnv } from '@/types/common'

export const testEnv: AppEnv = {
  name: 'test',
  baseURL: 'https://test-api.example.com',
  uploadURL: 'https://test-api.example.com/upload',
  useMock: true,
  enableLog: true,
  timeout: 15000
}

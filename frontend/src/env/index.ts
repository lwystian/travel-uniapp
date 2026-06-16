import type { AppEnv } from '@/types/common'
import { devEnv } from './dev'
import { prodEnv } from './prod'
import { testEnv } from './test'

const envMap: Record<AppEnv['name'], AppEnv> = {
  dev: devEnv,
  test: testEnv,
  prod: prodEnv
}

const viteMode = import.meta.env.MODE
const envName = viteMode === 'production' ? 'prod' : viteMode === 'test' ? 'test' : 'dev'

export const appEnv: AppEnv = {
  ...envMap[envName],
  useMock: import.meta.env.VITE_USE_MOCK
    ? import.meta.env.VITE_USE_MOCK === 'true'
    : envMap[envName].useMock
}

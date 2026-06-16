import type { ApiResponse, HttpMethod } from '@/types/api'

export interface RequestConfig<T = unknown> {
  url: string
  method?: HttpMethod
  data?: UniApp.RequestOptions['data']
  params?: object
  header?: Record<string, string>
  loading?: boolean
  loadingText?: string
  mock?: () => Promise<T> | T
  skipAuth?: boolean
  skipPending?: boolean
}

export type RequestResponse<T> = ApiResponse<T>

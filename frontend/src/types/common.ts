export type EnvName = 'dev' | 'test' | 'prod'

export interface AppEnv {
  name: EnvName
  baseURL: string
  uploadURL: string
  useMock: boolean
  enableLog: boolean
  timeout: number
}

export interface PaginationParams {
  page?: number
  pageSize?: number
}

export interface PaginationResult<T> {
  list: T[]
  page: number
  pageSize: number
  total: number
  hasMore: boolean
}

export interface SelectOption<T = string> {
  label: string
  value: T
}

export type AsyncStatus = 'idle' | 'loading' | 'success' | 'error'

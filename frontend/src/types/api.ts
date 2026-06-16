export interface ApiResponse<T = unknown> {
  code: number
  message: string
  data: T
  traceId?: string
  timestamp?: number
}

export interface ApiErrorPayload {
  code: number
  message: string
  traceId?: string
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

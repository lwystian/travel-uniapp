import type { ApiErrorPayload } from '@/types/api'
import { reportError } from '@/utils/errorReport'

export class RequestError extends Error {
  code: number
  traceId?: string

  constructor(payload: ApiErrorPayload) {
    super(payload.message)
    this.name = 'RequestError'
    this.code = payload.code
    this.traceId = payload.traceId
  }
}

export function handleRequestError(error: unknown): never {
  reportError(error, { source: 'request' })
  if (error instanceof RequestError) throw error
  throw new RequestError({
    code: -1,
    message: error instanceof Error ? error.message : '网络异常，请稍后重试'
  })
}

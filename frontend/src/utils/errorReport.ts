import { logger } from './logger'

export interface ReportErrorOptions {
  source?: string
  extra?: Record<string, unknown>
}

export function reportError(error: unknown, options?: ReportErrorOptions) {
  logger.error('error-report', error, options || {})
}

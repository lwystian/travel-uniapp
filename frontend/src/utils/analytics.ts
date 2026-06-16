import { logger } from './logger'

export interface TrackPayload {
  event: string
  params?: Record<string, unknown>
}

export const analytics = {
  track(event: string, params?: Record<string, unknown>) {
    logger.info('analytics', event, params || {})
  },

  pageView(path: string, params?: Record<string, unknown>) {
    this.track('page_view', { path, ...params })
  }
}

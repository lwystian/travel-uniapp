export const PLATFORM = {
  H5: 'h5',
  MP_WEIXIN: 'mp-weixin',
  UNKNOWN: 'unknown'
} as const

export type PlatformType = (typeof PLATFORM)[keyof typeof PLATFORM]

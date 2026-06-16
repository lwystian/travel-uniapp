import { AUTH_REQUIRED_ROUTES, ROUTES, TAB_BAR_ROUTES, type RoutePath } from '@/constants/routes'
import { STORAGE_KEYS } from '@/constants/storageKeys'
import { storage } from './storage'
import { stringifyQuery, type QueryParams } from './qs'

export interface NavigateOptions {
  auth?: boolean
  replace?: boolean
}

function normalizePath(path: RoutePath): string {
  return path.startsWith('/') ? path : `/${path}`
}

function withQuery(path: RoutePath, query?: QueryParams): string {
  return `${normalizePath(path)}${stringifyQuery(query)}`
}

function isTabBar(path: RoutePath): boolean {
  return TAB_BAR_ROUTES.includes(path)
}

function needAuth(path: RoutePath, options?: NavigateOptions): boolean {
  return Boolean(options?.auth || AUTH_REQUIRED_ROUTES.includes(path))
}

function ensureAuth(path: RoutePath, query?: QueryParams, options?: NavigateOptions): boolean {
  if (!needAuth(path, options)) return true

  const token = storage.get<string>(STORAGE_KEYS.TOKEN)
  if (token) return true

  const redirect = `${normalizePath(path)}${stringifyQuery(query)}`
  uni.navigateTo({
    url: withQuery(ROUTES.AUTH_LOGIN, { redirect })
  })
  return false
}

export const router = {
  navigateTo(path: RoutePath, query?: QueryParams, options?: NavigateOptions) {
    if (!ensureAuth(path, query, options)) return
    if (isTabBar(path)) {
      uni.switchTab({ url: normalizePath(path) })
      return
    }
    uni.navigateTo({ url: withQuery(path, query) })
  },

  redirectTo(path: RoutePath, query?: QueryParams, options?: NavigateOptions) {
    if (!ensureAuth(path, query, options)) return
    if (isTabBar(path)) {
      uni.switchTab({ url: normalizePath(path) })
      return
    }
    uni.redirectTo({ url: withQuery(path, query) })
  },

  switchTab(path: RoutePath) {
    uni.switchTab({ url: normalizePath(path) })
  },

  reLaunch(path: RoutePath, query?: QueryParams) {
    uni.reLaunch({ url: withQuery(path, query) })
  },

  navigateBack(delta = 1) {
    uni.navigateBack({ delta })
  }
}

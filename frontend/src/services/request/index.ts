import { appEnv } from '@/env/index'
import type { ApiResponse } from '@/types/api'
import { stringifyQuery } from '@/utils/qs'
import { RequestError, handleRequestError } from './error'
import { getAuthHeader } from './interceptors'
import { addPending, getPendingKey, hasPending, removePending } from './pending'
import type { RequestConfig } from './types'

const SUCCESS_CODES = [0, 200]

function shouldUseMock<T>(config: RequestConfig<T>) {
  return Boolean(config.mock && (appEnv.useMock || appEnv.baseURL.includes('example.com')))
}

function buildUrl(url: string, params?: object) {
  const fullUrl = /^https?:\/\//.test(url) ? url : `${appEnv.baseURL}${url}`
  return `${fullUrl}${stringifyQuery(params as Record<string, string | number | boolean | undefined>)}`
}

export async function request<T>(config: RequestConfig<T>): Promise<T> {
  const method = config.method || 'GET'
  const pendingKey = getPendingKey(method, config.url, config.data || config.params)

  if (!config.skipPending && hasPending(pendingKey)) {
    throw new RequestError({ code: 409, message: '请求处理中，请勿重复提交' })
  }

  if (shouldUseMock(config) && config.mock) {
    return Promise.resolve(config.mock())
  }

  if (config.loading) {
    uni.showLoading({ title: config.loadingText || '加载中', mask: true })
  }

  addPending(pendingKey)

  try {
    const response = await new Promise<UniApp.RequestSuccessCallbackResult>((resolve, reject) => {
      uni.request({
        url: buildUrl(config.url, config.params),
        method,
        data: config.data,
        timeout: appEnv.timeout,
        header: {
          'Content-Type': 'application/json',
          ...getAuthHeader(config.skipAuth),
          ...config.header
        },
        success: resolve,
        fail: reject
      })
    })

    const payload = response.data as ApiResponse<T>

    if (!SUCCESS_CODES.includes(payload.code)) {
      throw new RequestError({
        code: payload.code,
        message: payload.message || '业务处理失败',
        traceId: payload.traceId
      })
    }

    return payload.data
  } catch (error) {
    if (shouldUseMock(config) && config.mock) {
      return Promise.resolve(config.mock())
    }
    return handleRequestError(error)
  } finally {
    removePending(pendingKey)
    if (config.loading) {
      uni.hideLoading()
    }
  }
}

export const http = {
  get<T>(url: string, params?: object, config?: Omit<RequestConfig<T>, 'url' | 'method'>) {
    return request<T>({ url, method: 'GET', params, ...config })
  },

  post<T>(
    url: string,
    data?: UniApp.RequestOptions['data'],
    config?: Omit<RequestConfig<T>, 'url' | 'method'>
  ) {
    return request<T>({ url, method: 'POST', data, ...config })
  },

  put<T>(
    url: string,
    data?: UniApp.RequestOptions['data'],
    config?: Omit<RequestConfig<T>, 'url' | 'method'>
  ) {
    return request<T>({ url, method: 'PUT', data, ...config })
  },

  delete<T>(
    url: string,
    data?: UniApp.RequestOptions['data'],
    config?: Omit<RequestConfig<T>, 'url' | 'method'>
  ) {
    return request<T>({ url, method: 'DELETE', data, ...config })
  }
}

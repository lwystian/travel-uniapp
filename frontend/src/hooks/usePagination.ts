import { ref, type Ref } from 'vue'
import type { PaginationResult } from '@/types/common'

export interface UsePaginationOptions<P extends object, T> {
  service: (params: P & { page: number; pageSize: number }) => Promise<PaginationResult<T>>
  pageSize?: number
  defaultParams?: P
}

export function usePagination<T, P extends object = Record<string, unknown>>(
  options: UsePaginationOptions<P, T>
) {
  const page = ref(1)
  const pageSize = ref(options.pageSize || 10)
  const list = ref<T[]>([]) as Ref<T[]>
  const loading = ref(false)
  const refreshing = ref(false)
  const finished = ref(false)
  const error = ref<unknown>(null)
  const params = ref<P>((options.defaultParams || {}) as P) as Ref<P>

  async function fetchList(reset = false) {
    if (loading.value) return
    if (finished.value && !reset) return

    loading.value = true
    error.value = null

    try {
      const nextPage = reset ? 1 : page.value
      const result = await options.service({
        ...params.value,
        page: nextPage,
        pageSize: pageSize.value
      })

      list.value = reset ? result.list : [...list.value, ...result.list]
      page.value = result.page + 1
      finished.value = !result.hasMore
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
      refreshing.value = false
      uni.stopPullDownRefresh()
    }
  }

  function reload(nextParams?: Partial<P>) {
    params.value = { ...params.value, ...(nextParams || {}) }
    page.value = 1
    finished.value = false
    list.value = []
    return fetchList(true)
  }

  function loadMore() {
    return fetchList(false)
  }

  function refresh() {
    refreshing.value = true
    return reload()
  }

  return {
    page,
    pageSize,
    list,
    loading,
    refreshing,
    finished,
    error,
    params,
    reload,
    loadMore,
    refresh
  }
}

import { shallowRef } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

export function usePageQuery<T extends Record<string, string> = Record<string, string>>() {
  const query = shallowRef<T>({} as T)

  onLoad((options) => {
    query.value = (options || {}) as T
  })

  return {
    query
  }
}

import { ref } from 'vue'

export function useRequest<T, A extends unknown[] = unknown[]>(
  service: (...args: A) => Promise<T>,
  options?: { immediate?: boolean; defaultParams?: A }
) {
  const data = ref<T>()
  const loading = ref(false)
  const error = ref<unknown>(null)

  async function run(...args: A) {
    loading.value = true
    error.value = null
    try {
      const result = await service(...args)
      data.value = result
      return result
    } catch (err) {
      error.value = err
      throw err
    } finally {
      loading.value = false
    }
  }

  if (options?.immediate && options.defaultParams) {
    run(...options.defaultParams)
  }

  return {
    data,
    loading,
    error,
    run
  }
}

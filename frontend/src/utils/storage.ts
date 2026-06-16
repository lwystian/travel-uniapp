export const storage = {
  get<T>(key: string, defaultValue?: T): T | undefined {
    try {
      const value = uni.getStorageSync(key)
      return value === '' || value === undefined || value === null ? defaultValue : (value as T)
    } catch {
      return defaultValue
    }
  },

  set<T>(key: string, value: T): void {
    uni.setStorageSync(key, value)
  },

  remove(key: string): void {
    uni.removeStorageSync(key)
  },

  clear(): void {
    uni.clearStorageSync()
  }
}

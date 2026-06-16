import { computed } from 'vue'
import { useAppStore } from '@/stores'

export function useSafeArea() {
  const appStore = useAppStore()

  if (!appStore.statusBarHeight) {
    appStore.initSystemInfo()
  }

  return {
    statusBarHeight: computed(() => appStore.statusBarHeight),
    safeAreaBottom: computed(() => appStore.safeAreaBottom),
    bottomStyle: computed(() => `padding-bottom: ${appStore.safeAreaBottom}px`)
  }
}

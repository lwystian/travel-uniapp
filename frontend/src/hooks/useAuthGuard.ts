import { computed } from 'vue'
import { ROUTES } from '@/constants/routes'
import { useAuthStore } from '@/stores'
import { router } from '@/utils/router'

export function useAuthGuard() {
  const authStore = useAuthStore()
  const isLogin = computed(() => authStore.isLogin)

  function requireLogin(redirect?: string) {
    if (authStore.isLogin) return true
    router.navigateTo(ROUTES.AUTH_LOGIN, redirect ? { redirect } : undefined)
    return false
  }

  return {
    isLogin,
    requireLogin
  }
}

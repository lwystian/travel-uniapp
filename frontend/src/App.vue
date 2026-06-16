<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'
import { useAppStore } from '@/stores'
import { logger } from '@/utils/logger'

onLaunch(() => {
  const appStore = useAppStore()
  appStore.initSystemInfo()
  logger.info('app', 'launch')
})
onShow(() => {
  logger.info('app', 'show')
})
onHide(() => {
  logger.info('app', 'hide')
})
</script>

<style lang="scss">
@import '@/styles/reset.scss';
@import '@/styles/themes.scss';
@import '@/styles/safe-area.scss';
</style>

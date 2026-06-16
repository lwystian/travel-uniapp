import { computed } from 'vue'
import { platformAdapter } from '@/adapters/platform'

export function usePlatform() {
  const platform = platformAdapter.getPlatform()

  return {
    platform,
    isWeapp: computed(() => platform === 'mp-weixin'),
    isH5: computed(() => platform === 'h5'),
    previewImage: platformAdapter.previewImage,
    makePhoneCall: platformAdapter.makePhoneCall,
    openLocation: platformAdapter.openLocation,
    getLocation: platformAdapter.getLocation,
    openCustomerService: platformAdapter.openCustomerService
  }
}

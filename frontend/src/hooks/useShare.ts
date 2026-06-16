import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import { shareAdapter } from '@/adapters/share'
import type { ShareInfo } from '@/types/platform'

export function useShare(infoGetter: () => ShareInfo) {
  async function share() {
    return shareAdapter.sharePage(infoGetter())
  }

  onShareAppMessage(() => shareAdapter.normalizeForWeapp(infoGetter()))
  onShareTimeline(() => shareAdapter.normalizeForWeapp(infoGetter()))

  return {
    share
  }
}

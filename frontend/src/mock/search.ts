import type { SearchSuggestion } from '@/types/search'

export const mockHotSearches = [
  '三峡游轮',
  '亲子游',
  '国内长线',
  '周边游',
  '摄影游',
  '户外徒步',
  '古镇旅行',
  '草原旅行',
  '海岛度假',
  '城市微旅行'
]

export const mockSearchSuggestions: SearchSuggestion[] = mockHotSearches.map((keyword) => ({
  keyword,
  label: keyword,
  type: keyword.includes('游') || keyword.includes('旅行') ? 'theme' : 'tour'
}))

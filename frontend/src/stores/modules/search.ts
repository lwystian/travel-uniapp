import { defineStore } from 'pinia'
import { STORAGE_KEYS } from '@/constants/storageKeys'
import { searchApi } from '@/services/modules/search'
import type { SearchFilter } from '@/types/search'
import { storage } from '@/utils/storage'

export interface SearchState {
  keyword: string
  history: string[]
  hotSearches: string[]
  filter: SearchFilter
}

export const useSearchStore = defineStore('search', {
  state: (): SearchState => ({
    keyword: '',
    history: storage.get<string[]>(STORAGE_KEYS.SEARCH_HISTORY, []) || [],
    hotSearches: [],
    filter: {}
  }),
  getters: {
    hasHistory: (state) => state.history.length > 0
  },
  actions: {
    async fetchHotSearches() {
      this.hotSearches = await searchApi.getHotSearches()
      return this.hotSearches
    },

    setKeyword(keyword: string) {
      this.keyword = keyword
      if (!keyword.trim()) return
      this.history = [keyword, ...this.history.filter((item) => item !== keyword)].slice(0, 10)
      storage.set(STORAGE_KEYS.SEARCH_HISTORY, this.history)
    },

    setFilter(filter: SearchFilter) {
      this.filter = { ...this.filter, ...filter }
    },

    clearHistory() {
      this.history = []
      storage.remove(STORAGE_KEYS.SEARCH_HISTORY)
    },

    reset() {
      this.keyword = ''
      this.filter = {}
    }
  }
})

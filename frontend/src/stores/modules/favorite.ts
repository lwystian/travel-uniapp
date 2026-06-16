import { defineStore } from 'pinia'
import { STORAGE_KEYS } from '@/constants/storageKeys'
import { storage } from '@/utils/storage'

export interface FavoriteState {
  tourIds: string[]
  destinationIds: string[]
  articleIds: string[]
}

function initialState(): FavoriteState {
  return (
    storage.get<FavoriteState>(STORAGE_KEYS.FAVORITES) || {
      tourIds: [],
      destinationIds: [],
      articleIds: []
    }
  )
}

export const useFavoriteStore = defineStore('favorite', {
  state: initialState,
  getters: {
    favoriteCount: (state) =>
      state.tourIds.length + state.destinationIds.length + state.articleIds.length
  },
  actions: {
    persist() {
      storage.set(STORAGE_KEYS.FAVORITES, {
        tourIds: this.tourIds,
        destinationIds: this.destinationIds,
        articleIds: this.articleIds
      })
    },

    toggleTour(id: string) {
      this.tourIds = this.tourIds.includes(id)
        ? this.tourIds.filter((item) => item !== id)
        : [...this.tourIds, id]
      this.persist()
    },

    toggleDestination(id: string) {
      this.destinationIds = this.destinationIds.includes(id)
        ? this.destinationIds.filter((item) => item !== id)
        : [...this.destinationIds, id]
      this.persist()
    },

    toggleArticle(id: string) {
      this.articleIds = this.articleIds.includes(id)
        ? this.articleIds.filter((item) => item !== id)
        : [...this.articleIds, id]
      this.persist()
    },

    reset() {
      this.tourIds = []
      this.destinationIds = []
      this.articleIds = []
      storage.remove(STORAGE_KEYS.FAVORITES)
    }
  }
})

import { API_ENDPOINTS } from '@/constants/api'
import { mockTrainHomeData, searchMockTrainProducts, searchMockTrainSeries } from '@/mock/train'
import { http } from '@/services/request'
import type {
  TrainHomeData,
  TrainProductSearchParams,
  TrainSearchParams,
  TrainSearchResult,
  TrainSeries
} from '@/types/train'

export const trainApi = {
  getHomeData() {
    return http.get<TrainHomeData>(API_ENDPOINTS.TRAIN_HOME, undefined, {
      mock: () => mockTrainHomeData
    })
  },

  searchSeries(params: TrainSearchParams = {}) {
    return http.get<TrainSeries[]>(API_ENDPOINTS.TRAIN_SERIES_SEARCH, params, {
      mock: () => searchMockTrainSeries(params)
    })
  },

  searchProducts(params: TrainProductSearchParams = {}) {
    return http.get<TrainSearchResult>(API_ENDPOINTS.TRAIN_PRODUCT_SEARCH, params, {
      mock: () => searchMockTrainProducts(params)
    })
  }
}

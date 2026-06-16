import { API_ENDPOINTS } from '@/constants/api'
import { mockHotSearches, mockSearchSuggestions } from '@/mock/search'
import { getMockTourList } from '@/mock/tour'
import { http } from '@/services/request'
import type { PaginationResult } from '@/types/common'
import type { SearchFilter, SearchSuggestion } from '@/types/search'
import type { TourProduct } from '@/types/tour'

export const searchApi = {
  getHotSearches() {
    return http.get<string[]>('/search/hot', undefined, {
      mock: () => mockHotSearches
    })
  },

  getSuggestions(keyword: string) {
    return http.get<SearchSuggestion[]>(
      API_ENDPOINTS.SEARCH_SUGGEST,
      { keyword },
      {
        mock: () =>
          mockSearchSuggestions.filter((item) => item.keyword.includes(keyword || item.keyword))
      }
    )
  },

  searchTours(params: SearchFilter) {
    return http.get<PaginationResult<TourProduct>>(API_ENDPOINTS.SEARCH_RESULT, params, {
      mock: () =>
        getMockTourList({ ...params, sort: params.sort === 'latest' ? 'recommend' : params.sort })
    })
  }
}

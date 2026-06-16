import { API_ENDPOINTS } from '@/constants/api'
import { getMockTourDetail, getMockTourList, getMockTourPackages, mockSchedules } from '@/mock/tour'
import { http } from '@/services/request'
import type { PaginationResult } from '@/types/common'
import type {
  TourDetail,
  TourListParams,
  TourPackage,
  TourProduct,
  TourSchedule
} from '@/types/tour'

export const tourApi = {
  getTourList(params: TourListParams = {}) {
    return http.get<PaginationResult<TourProduct>>(API_ENDPOINTS.TOUR_LIST, params, {
      mock: () => getMockTourList(params)
    })
  },

  getTourDetail(params: { id: string }) {
    return http.get<TourDetail>(API_ENDPOINTS.TOUR_DETAIL, params, {
      mock: () => getMockTourDetail(params.id)
    })
  },

  getTourSchedules(params: { tourId: string }) {
    return http.get<TourSchedule[]>(API_ENDPOINTS.TOUR_SCHEDULES, params, {
      mock: () => mockSchedules.filter((item) => item.tourId === params.tourId)
    })
  },

  getTourPackages(params: { tourId: string }) {
    return http.get<TourPackage[]>(API_ENDPOINTS.TOUR_PACKAGES, params, {
      mock: () => getMockTourPackages(params.tourId)
    })
  },

  toggleFavorite(tourId: string) {
    return http.post<{ favorite: boolean }>(
      `${API_ENDPOINTS.TOUR_DETAIL}/favorite`,
      { tourId },
      {
        mock: () => ({ favorite: true })
      }
    )
  }
}

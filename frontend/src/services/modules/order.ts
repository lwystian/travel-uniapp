import { API_ENDPOINTS } from '@/constants/api'
import {
  getMockOrder,
  getMockOrderList,
  getMockOrderStatusSummary,
  mockOrderFixtures
} from '@/mock/order'
import { http } from '@/services/request'
import type { PaginationResult } from '@/types/common'
import type { CreateOrderParams, Order, OrderListParams, OrderStatusSummary } from '@/types/order'

export const orderApi = {
  getOrderList(params: OrderListParams = {}) {
    return http.get<PaginationResult<Order>>(API_ENDPOINTS.ORDER_LIST, params, {
      mock: () => getMockOrderList(params)
    })
  },

  getOrderStatusSummary() {
    return http.get<OrderStatusSummary[]>(API_ENDPOINTS.ORDER_STATUS_SUMMARY, undefined, {
      mock: () => getMockOrderStatusSummary()
    })
  },

  getOrderDetail(params: { id: string }) {
    return http.get<Order>(API_ENDPOINTS.ORDER_DETAIL, params, {
      mock: () => getMockOrder(params.id)
    })
  },

  createOrder(data: CreateOrderParams) {
    return http.post<Order>(API_ENDPOINTS.ORDER_CREATE, data, {
      mock: () => mockOrderFixtures[0]
    })
  },

  cancelOrder(id: string) {
    return http.post<{ success: boolean }>(
      API_ENDPOINTS.ORDER_CANCEL,
      { id },
      {
        mock: () => ({ success: true })
      }
    )
  }
}

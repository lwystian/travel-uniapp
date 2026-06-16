import { defineStore } from 'pinia'
import { orderApi } from '@/services/modules/order'
import type { CreateOrderParams, Order, OrderListParams } from '@/types/order'

export interface OrderState {
  orders: Order[]
  currentOrder: Order | null
}

export const useOrderStore = defineStore('order', {
  state: (): OrderState => ({
    orders: [],
    currentOrder: null
  }),
  getters: {
    pendingPaymentOrders: (state) =>
      state.orders.filter((item) => item.status === 'pending_payment')
  },
  actions: {
    async fetchOrders(params?: OrderListParams) {
      const result = await orderApi.getOrderList(params)
      this.orders = result.list
      return result
    },

    async fetchOrderDetail(id: string) {
      this.currentOrder = await orderApi.getOrderDetail({ id })
      return this.currentOrder
    },

    async createOrder(params: CreateOrderParams) {
      const order = await orderApi.createOrder(params)
      this.currentOrder = order
      return order
    },

    reset() {
      this.orders = []
      this.currentOrder = null
    }
  }
})

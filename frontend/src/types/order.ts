import type { Traveler } from './user'
import type { PaginationParams } from './common'

export type OrderStatus =
  | 'pending_payment'
  | 'paid'
  | 'confirmed'
  | 'pending_reservation'
  | 'pending_use'
  | 'completed'
  | 'cancelled'
  | 'refunded'
  | 'after_sales'

export type OrderListTab =
  | 'all'
  | 'pending_payment'
  | 'pending_use'
  | 'pending_reservation'
  | 'completed'
  | 'refund_after_sales'

export interface OrderCostItem {
  name: string
  amount: number
  count?: number
}

export interface Order {
  id: string
  orderNo: string
  tourId: string
  tourTitle: string
  cover: string
  scheduleId: string
  scheduleDate: string
  travelers: Traveler[]
  contactName: string
  contactPhone: string
  totalAmount: number
  paidAmount: number
  discountAmount: number
  status: OrderStatus
  costItems: OrderCostItem[]
  createdAt: string
  paidAt?: string
  remark?: string
  departureCity?: string
  destination?: string
  productType?: string
  useCode?: string
  expireAt?: string
  appointmentDeadline?: string
  refundReason?: string
  afterSalesStatus?: string
}

export interface CreateOrderParams {
  tourId: string
  scheduleId: string
  travelerIds: string[]
  contactName: string
  contactPhone: string
  couponId?: string
  remark?: string
}

export interface OrderListParams extends PaginationParams {
  keyword?: string
  tab?: OrderListTab
  statuses?: OrderStatus[]
}

export interface OrderStatusSummary {
  tab: OrderListTab
  label: string
  count: number
}

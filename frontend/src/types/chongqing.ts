import type { PaginationParams } from './common'

export type ChongqingTourSort = 'default' | 'sales' | 'price_asc' | 'price_desc'

export interface ChongqingTourListParams extends PaginationParams {
  keyword?: string
  sort?: ChongqingTourSort
}

export interface ChongqingTourItem {
  id: string
  tourId: string
  title: string
  cover: string
  tags: string[]
  destination: string
  departureCity: string
  days: number
  nights: number
  price: number
  saleCount: number
  refundText: string
  summary: string
}

export interface ChongqingChannelData {
  title: string
  searchPlaceholder: string
  defaultKeyword?: string
  hotline?: string
  customerServiceText: string
  totalText: string
  filters: Array<{
    label: string
    value: ChongqingTourSort
  }>
}

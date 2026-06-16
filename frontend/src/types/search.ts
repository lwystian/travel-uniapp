import type { PaginationParams } from './common'

export interface SearchFilter extends PaginationParams {
  keyword?: string
  destination?: string
  departureCity?: string
  themes?: string[]
  tags?: string[]
  minPrice?: number
  maxPrice?: number
  days?: number[]
  sort?: 'recommend' | 'price_asc' | 'price_desc' | 'sales' | 'score' | 'latest'
}

export interface SearchSuggestion {
  keyword: string
  type: 'tour' | 'destination' | 'article' | 'theme'
  label: string
}

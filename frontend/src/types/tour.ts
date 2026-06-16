import type { PaginationParams } from './common'

export type PriceUnit = 'person' | 'room' | 'group'
export type TourDifficulty = 'easy' | 'normal' | 'hard'
export type TourStatus = 'available' | 'sold_out' | 'offline'

export interface TourProduct {
  id: string
  title: string
  subtitle?: string
  cover: string
  images: string[]
  destination: string
  departureCity: string
  days: number
  nights: number
  tags: string[]
  themes: string[]
  price: number
  originalPrice?: number
  priceUnit: PriceUnit
  saleCount: number
  favoriteCount: number
  score: number
  commentCount: number
  difficulty?: TourDifficulty
  suitableFor?: string[]
  highlights: string[]
  nextScheduleDate?: string
  status: TourStatus
}

export interface TourSchedule {
  id: string
  tourId: string
  packageId?: string
  date: string
  endDate: string
  adultPrice: number
  childPrice?: number
  singleRoomDiff?: number
  stock: number
  bookedCount: number
  minGroupSize: number
  status: 'open' | 'full' | 'closed'
}

export interface TourDetailStat {
  id: string
  label: string
  value: string
  description?: string
}

export interface TourServiceGuarantee {
  id: string
  title: string
  description?: string
}

export interface TourTicketType {
  id: string
  name: string
  description?: string
  price: number
  stock?: number
}

export interface TourPackage {
  id: string
  tourId: string
  name: string
  days: number
  nights: number
  departureCity: string
  destination?: string
  description?: string
  price: number
  stock?: number
  tags?: string[]
}

export interface TourItineraryNode {
  id: string
  title: string
  content: string
  time?: string
  icon?: 'highlight' | 'morning' | 'afternoon' | 'evening'
}

export interface TourItineraryDay {
  day: number
  title: string
  city: string
  routeTitle?: string
  transport?: string
  accommodation?: string
  meals: string[]
  description: string
  attractions: string[]
  images: string[]
  nodes?: TourItineraryNode[]
}

export interface TourDetail extends TourProduct {
  overview: string
  itinerary: TourItineraryDay[]
  schedules: TourSchedule[]
  categoryLabel?: string
  detailTags?: string[]
  stats?: TourDetailStat[]
  serviceGuarantees?: TourServiceGuarantee[]
  bookingFeatures?: string[]
  packages?: TourPackage[]
  ticketTypes?: TourTicketType[]
  travelerLimit?: number
  groupSizeText?: string
  ageRange?: string
  itineraryNotice?: string
  purchaseNotice?: string[]
  feeIncludes: string[]
  feeExcludes: string[]
  bookingNotice: string[]
  refundPolicy: string[]
  recommendedReason: string[]
}

export interface TourListParams extends PaginationParams {
  keyword?: string
  destination?: string
  departureCity?: string
  themes?: string[]
  minPrice?: number
  maxPrice?: number
  sort?: 'recommend' | 'price_asc' | 'price_desc' | 'sales' | 'score'
}

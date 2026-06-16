export type SanxiaQueryMode = 'date' | 'cruise' | 'route'

export interface SanxiaRouteOption {
  id: string
  fromCity: string
  toCity: string
  label: string
  popular?: boolean
}

export interface SanxiaQueryPreset {
  defaultMode: SanxiaQueryMode
  defaultDate: string
  fromCity: string
  toCity: string
  hotRoutes: SanxiaRouteOption[]
  cruiseNames: string[]
}

export interface SanxiaTicketSearchParams {
  mode?: SanxiaQueryMode
  departureDate?: string
  fromCity?: string
  toCity?: string
  routeId?: string
  cruiseName?: string
}

export interface SanxiaShortcut {
  id: string
  title: string
  subtitle?: string
  actionType: 'schedule' | 'brand' | 'guide' | 'order'
  tone: 'blue' | 'purple' | 'orange' | 'teal'
}

export interface SanxiaCruiseTicket {
  id: string
  tourId: string
  title: string
  subtitle: string
  cruiseName: string
  cover: string
  fromCity: string
  toCity: string
  departureDate: string
  durationText: string
  price: number
  tags: string[]
  stock: number
  badge?: string
  bookedCount?: number
}

export interface SanxiaActivityBanner {
  id: string
  title: string
  subtitle: string
  cover: string
  tourId?: string
}

export interface SanxiaNewsItem {
  id: string
  articleId: string
  title: string
  cover: string
  publishedAt: string
  viewCount: number
  summary: string
}

export interface SanxiaHomeData {
  queryPreset: SanxiaQueryPreset
  shortcuts: SanxiaShortcut[]
  saleBanner: SanxiaActivityBanner
  specialTickets: SanxiaCruiseTicket[]
  activityBanners: SanxiaActivityBanner[]
  recommendedTickets: SanxiaCruiseTicket[]
  news: SanxiaNewsItem[]
}

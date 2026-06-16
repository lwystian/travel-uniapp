export type XishaQueryMode = 'date' | 'cruise' | 'route'

export interface XishaRouteOption {
  id: string
  fromCity: string
  toCity: string
  label: string
  popular?: boolean
}

export interface XishaQueryPreset {
  defaultMode: XishaQueryMode
  defaultDate: string
  fromCity: string
  toCity: string
  hotRoutes: XishaRouteOption[]
  cruiseNames: string[]
}

export interface XishaTicketSearchParams {
  mode?: XishaQueryMode
  departureDate?: string
  fromCity?: string
  toCity?: string
  routeId?: string
  cruiseName?: string
}

export interface XishaShortcut {
  id: string
  title: string
  subtitle?: string
  actionType: 'schedule' | 'brand' | 'guide' | 'order'
  tone: 'blue' | 'purple' | 'orange' | 'teal'
}

export interface XishaCruiseTicket {
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

export interface XishaActivityBanner {
  id: string
  title: string
  subtitle: string
  cover: string
  tourId?: string
}

export interface XishaNewsItem {
  id: string
  articleId: string
  title: string
  cover: string
  publishedAt: string
  viewCount: number
  summary: string
}

export interface XishaHomeData {
  queryPreset: XishaQueryPreset
  shortcuts: XishaShortcut[]
  saleBanner: XishaActivityBanner
  specialTickets: XishaCruiseTicket[]
  activityBanners: XishaActivityBanner[]
  recommendedTickets: XishaCruiseTicket[]
  news: XishaNewsItem[]
}

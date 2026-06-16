export interface TrainSearchParams {
  keyword?: string
  seriesId?: string
}

export type TrainSearchSort = 'default' | 'sales' | 'price'

export interface TrainProductSearchParams {
  keyword?: string
  sort?: TrainSearchSort
  page?: number
  pageSize?: number
}

export interface TrainSearchResult {
  keyword: string
  total: number
  list: TrainProduct[]
}

export interface TrainHeroData {
  title: string
  subtitle: string
  eyebrow: string
  searchPlaceholder: string
  backgroundImage: string
}

export interface TrainNotice {
  id: string
  title: string
  actionText: string
  detail: string
}

export interface TrainGuideAction {
  id: string
  title: string
  actionType: 'booking' | 'condition' | 'carriage' | 'refund'
  tone: 'cyan' | 'green' | 'coral' | 'amber'
}

export interface TrainAgencyBanner {
  id: string
  title: string
  subtitle: string
  cover: string
}

export interface TrainProduct {
  id: string
  tourId: string
  title: string
  cover: string
  price: number
  stockText: string
  departureCity: string
  arrivalCity: string
  durationText: string
  tags: string[]
}

export interface TrainSeries {
  id: string
  title: string
  subtitle?: string
  tone: 'teal' | 'orange' | 'mint' | 'blue' | 'olive'
  actionType?: 'refresh' | 'more'
  products: TrainProduct[]
}

export interface TrainScenicStory {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
}

export interface TrainHomeData {
  hero: TrainHeroData
  notice: TrainNotice
  guideActions: TrainGuideAction[]
  agencyBanner: TrainAgencyBanner
  series: TrainSeries[]
  story: TrainScenicStory
  serviceText: string
}

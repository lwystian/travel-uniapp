import type { Article } from './article'
import type { Destination } from './destination'
import type { TourProduct } from './tour'

export type HomeLinkType =
  | 'tour'
  | 'destination'
  | 'article'
  | 'search'
  | 'marketing'
  | 'content'
  | 'page'

export interface HomeLinkTarget {
  linkType: HomeLinkType
  linkId?: string
  keyword?: string
}

export interface HomeHeroBanner extends HomeLinkTarget {
  id: string
  brandName?: string
  brandSubName?: string
  title: string
  subtitle: string
  location: string
  searchPlaceholder: string
  searchActionText?: string
  highlightTag?: string
  actionText?: string
  visualTone?: HomeVisualTone
  image: string
}

export interface HomeCategory extends HomeLinkTarget {
  id: string
  title: string
  iconText: string
  theme: 'green' | 'orange' | 'purple' | 'pink' | 'yellow' | 'blue' | 'red'
  badge?: string
}

export interface HomeQuickAction extends HomeLinkTarget {
  id: string
  title: string
  subtitle: string
  iconText: string
}

export interface HomeNotice extends HomeLinkTarget {
  id: string
  noticeType?: 'info' | 'availability' | 'activity'
  title?: string
  content: string
  actionText: string
}

export interface HomeFeatureTile extends HomeLinkTarget {
  id: string
  title: string
  cover: string
  tag?: string
}

export interface HomeMarketingBanner extends HomeLinkTarget {
  id: string
  title: string
  subtitle: string
  image: string
}

export interface HomeActivity extends HomeLinkTarget {
  id: string
  title: string
  subtitle: string
  cover: string
  departureTag: string
  price: number
}

export type HomeVisualTone = 'cruise' | 'karst' | 'night' | 'heritage' | 'forest' | 'river'

export interface HomeDiscoveryCard extends HomeLinkTarget {
  id: string
  title: string
  subtitle?: string
  cover?: string
  visualTone: HomeVisualTone
  badge?: string
  departureCity?: string
  days?: number
  nights?: number
  tags: string[]
  actionText?: string
  price?: number
  joinedCount?: number
}

export interface HomeCityTourCard extends HomeLinkTarget {
  id: string
  title: string
  subtitle?: string
  cover?: string
  visualTone: HomeVisualTone
  badge?: string
  departureCity?: string
  days?: number
  nights?: number
  metaText: string
  tags: string[]
  actionText: string
  price?: number
  joinedCount?: number
  imageStack?: HomeVisualTone[]
}

export interface HomeProductSection extends HomeLinkTarget {
  id: string
  title: string
  subtitle?: string
  tone?: 'blue' | 'cream'
  moreText?: string
  items: HomeCityTourCard[]
}

export interface HomeBrandActivity extends HomeLinkTarget {
  id: string
  title: string
  subtitle: string
  cover: string
  large?: boolean
}

export interface HomeProductFeedItem extends HomeLinkTarget {
  id: string
  title: string
  subtitle?: string
  cover: string
  tag?: string
  badge?: string
  price?: number
  actionText?: string
  seedCount?: number
}

export type HomeTourSectionTone = 'ocean' | 'river' | 'forest' | 'city'

export interface HomeTourSectionStat {
  label: string
  value: string
}

export interface HomeTourSection extends HomeLinkTarget {
  id: string
  eyebrow: string
  title: string
  subtitle: string
  cover: string
  tone: HomeTourSectionTone
  stats: HomeTourSectionStat[]
  items: TourProduct[]
}

export interface HomeData {
  hero: HomeHeroBanner
  categories: HomeCategory[]
  quickActions: HomeQuickAction[]
  signupNotice: HomeNotice
  featureTiles: HomeFeatureTile[]
  mainBanners: HomeMarketingBanner[]
  weeklyActivities: HomeActivity[]
  discoveryCards: HomeDiscoveryCard[]
  cityTourCards: HomeCityTourCard[]
  productSections: HomeProductSection[]
  brandActivities: HomeBrandActivity[]
  tourSections: HomeTourSection[]
  productTabs: string[]
  productFeed: HomeProductFeedItem[]
  banners: HomeHeroBanner[]
  themeEntries: string[]
  hotTours: TourProduct[]
  destinations: Destination[]
  articles: Article[]
}

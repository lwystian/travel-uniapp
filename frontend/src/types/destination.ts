export interface Destination {
  id: string
  name: string
  subtitle?: string
  cover: string
  images: string[]
  region: string
  city?: string
  tags: string[]
  bestSeason: string[]
  recommendedDays: number
  tourCount: number
  articleCount: number
  popularity: number
  description: string
  highlights: string[]
}

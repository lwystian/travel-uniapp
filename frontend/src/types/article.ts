export type ArticleType = 'guide' | 'note' | 'qa' | 'topic'

export interface Article {
  id: string
  title: string
  subtitle?: string
  cover: string
  author: string
  authorAvatar?: string
  type: ArticleType
  tags: string[]
  destination?: string
  summary: string
  content: string
  viewCount: number
  likeCount: number
  favoriteCount: number
  commentCount: number
  publishedAt: string
}

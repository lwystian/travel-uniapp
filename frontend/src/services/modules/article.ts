import { API_ENDPOINTS } from '@/constants/api'
import { getMockArticle, mockArticles } from '@/mock/article'
import { http } from '@/services/request'
import type { Article } from '@/types/article'
import type { PaginationParams, PaginationResult } from '@/types/common'

export const articleApi = {
  getArticleList(params: PaginationParams = {}) {
    const page = params.page || 1
    const pageSize = params.pageSize || 10
    return http.get<PaginationResult<Article>>(API_ENDPOINTS.ARTICLE_LIST, params, {
      mock: () => ({
        list: mockArticles.slice((page - 1) * pageSize, page * pageSize),
        page,
        pageSize,
        total: mockArticles.length,
        hasMore: page * pageSize < mockArticles.length
      })
    })
  },

  getArticleDetail(params: { id: string }) {
    return http.get<Article>(API_ENDPOINTS.ARTICLE_DETAIL, params, {
      mock: () => getMockArticle(params.id)
    })
  }
}

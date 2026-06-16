import type { PaginationResult } from '@/types/common'
import type {
  ChongqingChannelData,
  ChongqingTourItem,
  ChongqingTourListParams
} from '@/types/chongqing'
import { mockTourProducts } from './tour'

export const mockChongqingChannelData: ChongqingChannelData = {
  title: '重庆跟团游',
  searchPlaceholder: '搜索目的地、景点、天数',
  defaultKeyword: '',
  hotline: '400-888-0234',
  customerServiceText: '客服',
  totalText: '精选重庆本地跟团线路',
  filters: [
    { label: '默认排序', value: 'default' },
    { label: '销量', value: 'sales' },
    { label: '价格', value: 'price_asc' }
  ]
}

const extraChongqingTours: ChongqingTourItem[] = [
  {
    id: 'cq-list-1',
    tourId: 'tour-1004',
    title: '武隆仙女山+天生三桥+九黎城+乌江画廊+龚滩古镇 2日游',
    cover: '/static/images/mock/sanxia.jpg',
    tags: ['随时退', '重庆跟团', '武隆精华'],
    destination: '武隆',
    departureCity: '重庆',
    days: 2,
    nights: 1,
    price: 450,
    saleCount: 1268,
    refundText: '随时退',
    summary: '天生三桥、仙女山、九黎城与乌江画廊组合，适合首次到重庆周边游。'
  },
  {
    id: 'cq-list-2',
    tourId: 'tour-1004',
    title: '【2-8人小团】重庆武隆仙女山+天生三桥+乌江画廊+九黎城 1日游',
    cover: '/static/images/mock/citywalk.jpg',
    tags: ['小团', '随时退', '无购物'],
    destination: '武隆',
    departureCity: '重庆',
    days: 1,
    nights: 0,
    price: 750,
    saleCount: 982,
    refundText: '随时退',
    summary: '2-8人精品小团，车位灵活，玩法更轻松，适合家庭和朋友出行。'
  },
  {
    id: 'cq-list-3',
    tourId: 'tour-1004',
    title: '【2-8人小团】彭水蚩尤九黎城+龚滩古镇+乌江画廊纯玩一日游',
    cover: '/static/images/mock/hiking.jpg',
    tags: ['纯玩', '随时退', '轻户外'],
    destination: '彭水',
    departureCity: '重庆',
    days: 1,
    nights: 0,
    price: 318,
    saleCount: 730,
    refundText: '随时退',
    summary: '乌江山水与苗族文化结合，行程节奏舒适，适合短途周边游。'
  },
  {
    id: 'cq-list-4',
    tourId: 'tour-1001',
    title: '【暑期亲子游】重庆李子坝+洪崖洞+欢乐海底世界+仙女山 4日游',
    cover: '/static/images/mock/sanxia.jpg',
    tags: ['亲子', '暑期', '随时退'],
    destination: '重庆',
    departureCity: '重庆',
    days: 4,
    nights: 3,
    price: 2999,
    saleCount: 566,
    refundText: '随时退',
    summary: '山城网红地标、亲子场馆和武隆自然景观组合，适合暑期家庭出游。'
  }
]

const mappedTourProducts: ChongqingTourItem[] = mockTourProducts
  .filter(
    (item) =>
      item.departureCity === '重庆' ||
      item.destination.includes('重庆') ||
      item.destination.includes('武隆') ||
      item.themes.some((theme) => theme.includes('重庆'))
  )
  .map((item) => ({
    id: `cq-${item.id}`,
    tourId: item.id,
    title: item.title,
    cover: item.cover,
    tags: item.tags.slice(0, 3),
    destination: item.destination.replace('重庆', '') || item.destination,
    departureCity: item.departureCity,
    days: item.days,
    nights: item.nights,
    price: item.price,
    saleCount: item.saleCount,
    refundText: '随时退',
    summary: item.subtitle || item.highlights.slice(0, 3).join('、')
  }))

const mockChongqingTours = [...extraChongqingTours, ...mappedTourProducts]

function normalizeKeyword(keyword?: string) {
  return keyword?.trim().toLowerCase()
}

function sortTours(list: ChongqingTourItem[], sort: ChongqingTourListParams['sort']) {
  const nextList = [...list]
  if (sort === 'sales') {
    return nextList.sort((a, b) => b.saleCount - a.saleCount)
  }
  if (sort === 'price_asc') {
    return nextList.sort((a, b) => a.price - b.price)
  }
  if (sort === 'price_desc') {
    return nextList.sort((a, b) => b.price - a.price)
  }
  return nextList
}

export function getMockChongqingTours(
  params: ChongqingTourListParams = {}
): PaginationResult<ChongqingTourItem> {
  const page = params.page || 1
  const pageSize = params.pageSize || 10
  const keyword = normalizeKeyword(params.keyword)
  const filtered = mockChongqingTours.filter((item) => {
    if (!keyword) return true
    return [
      item.title,
      item.summary,
      item.destination,
      item.departureCity,
      item.refundText,
      ...item.tags
    ].some((text) => text.toLowerCase().includes(keyword))
  })
  const sorted = sortTours(filtered, params.sort)
  const start = (page - 1) * pageSize
  const list = sorted.slice(start, start + pageSize)

  return {
    list,
    page,
    pageSize,
    total: sorted.length,
    hasMore: start + pageSize < sorted.length
  }
}

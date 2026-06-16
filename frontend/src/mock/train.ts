import type {
  TrainHomeData,
  TrainProduct,
  TrainProductSearchParams,
  TrainSearchParams,
  TrainSearchResult,
  TrainSeries
} from '@/types/train'

const trainSearchProducts: Array<TrainProduct & { sales: number }> = [
  {
    id: 'train-search-0001',
    tourId: 'tour-1002',
    title: '新疆旅游专列定金专拍',
    cover: '/static/images/mock/ancient-town.jpg',
    price: 5000,
    stockText: '随时退',
    departureCity: '吐鲁番',
    arrivalCity: '高昌',
    durationText: '定金专拍',
    tags: ['定金', '专列预售', '顾问确认'],
    sales: 186
  },
  {
    id: 'train-search-0002',
    tourId: 'tour-1002',
    title: '熊猫专列成都号新疆16日游【南北疆线】',
    cover: '/static/images/mock/grassland.jpg',
    price: 65999,
    stockText: '随时退',
    departureCity: '吐鲁番',
    arrivalCity: '高昌',
    durationText: '16日游',
    tags: ['成都号', '南北疆', '星级服务'],
    sales: 452
  },
  {
    id: 'train-search-0003',
    tourId: 'tour-1002',
    title: '熊猫专列什邡号新疆16日游【南北疆线】',
    cover: '/static/images/mock/hiking.jpg',
    price: 8480,
    stockText: '随时退',
    departureCity: '吐鲁番',
    arrivalCity: '高昌',
    durationText: '16日游',
    tags: ['什邡号', '南北疆', '高性价比'],
    sales: 391
  },
  {
    id: 'train-search-0004',
    tourId: 'tour-1002',
    title: '熊猫专列锦绣天府号新疆16日游【南北疆线】独库版',
    cover: '/static/images/mock/island.jpg',
    price: 78880,
    stockText: '随时退',
    departureCity: '吐鲁番',
    arrivalCity: '高昌',
    durationText: '16日游',
    tags: ['锦绣天府号', '独库公路', '南北疆'],
    sales: 348
  },
  {
    id: 'train-search-0005',
    tourId: 'tour-1002',
    title: '丝路梦享号新疆7日游【10月金秋线】',
    cover: '/static/images/mock/ancient-town.jpg',
    price: 19999,
    stockText: '随时退',
    departureCity: '乌鲁木齐',
    arrivalCity: '喀什',
    durationText: '7日游',
    tags: ['丝路梦享号', '金秋线', '摄影友好'],
    sales: 173
  },
  {
    id: 'train-search-0006',
    tourId: 'tour-1002',
    title: '熊猫专列锦绣天府号新疆13日游【南疆线】',
    cover: '/static/images/mock/citywalk.jpg',
    price: 49880,
    stockText: '随时退',
    departureCity: '吐鲁番',
    arrivalCity: '高昌',
    durationText: '13日游',
    tags: ['南疆线', '人文风情', '纯玩'],
    sales: 226
  }
]

const trainProducts: TrainSeries[] = [
  {
    id: 'panda-tianfu',
    title: '熊猫专列·天府号',
    tone: 'teal',
    products: [
      {
        id: 'train-1001',
        tourId: 'tour-1002',
        title: '熊猫专列锦绣天府号新疆16日游【南北疆线】独库版',
        cover: '/static/images/mock/island.jpg',
        price: 78880,
        stockText: '余票 21',
        departureCity: '吐鲁番',
        arrivalCity: '高昌',
        durationText: '16日游',
        tags: ['南北疆', '独库公路', '熊猫专列']
      },
      {
        id: 'train-1002',
        tourId: 'tour-1002',
        title: '熊猫专列锦绣天府号新疆16日游【南北疆线】深秋版',
        cover: '/static/images/mock/island.jpg',
        price: 78880,
        stockText: '余票 22',
        departureCity: '吐鲁番',
        arrivalCity: '高昌',
        durationText: '16日游',
        tags: ['深秋', '南北疆', '舒适铺位']
      },
      {
        id: 'train-1003',
        tourId: 'tour-1002',
        title: '熊猫专列锦绣天府号新疆13日游【南疆线】',
        cover: '/static/images/mock/island.jpg',
        price: 49880,
        stockText: '余票充足',
        departureCity: '吐鲁番',
        arrivalCity: '高昌',
        durationText: '13日游',
        tags: ['南疆', '人文风情', '纯玩']
      }
    ]
  },
  {
    id: 'panda-anyi',
    title: '熊猫专列·安逸号',
    tone: 'orange',
    actionType: 'refresh',
    products: [
      {
        id: 'train-2001',
        tourId: 'tour-1002',
        title: '熊猫专列安逸号新疆16日游【南北疆】',
        cover: '/static/images/mock/citywalk.jpg',
        price: 3000,
        stockText: '余票充足',
        departureCity: '吐鲁番',
        arrivalCity: '高昌',
        durationText: '16日游',
        tags: ['安逸号', '南北疆', '精选铺位']
      }
    ]
  },
  {
    id: 'panda-shizhu',
    title: '熊猫专列·什邡号',
    tone: 'mint',
    products: [
      {
        id: 'train-3001',
        tourId: 'tour-1002',
        title: '熊猫专列什邡号新疆16日游【南北疆线】',
        cover: '/static/images/mock/hiking.jpg',
        price: 8480,
        stockText: '余票 396',
        departureCity: '吐鲁番',
        arrivalCity: '高昌',
        durationText: '16日游',
        tags: ['高性价比', '南北疆', '专列游']
      }
    ]
  },
  {
    id: 'panda-chengdu',
    title: '熊猫专列·成都号',
    tone: 'blue',
    products: [
      {
        id: 'train-4001',
        tourId: 'tour-1002',
        title: '熊猫专列成都号新疆16日游【南北疆线】',
        cover: '/static/images/mock/grassland.jpg',
        price: 65999,
        stockText: '余票 198',
        departureCity: '吐鲁番',
        arrivalCity: '高昌',
        durationText: '16日游',
        tags: ['成都号', '星级服务', '纯玩']
      }
    ]
  },
  {
    id: 'silk-dream',
    title: '丝路梦享号',
    tone: 'olive',
    products: [
      {
        id: 'train-5001',
        tourId: 'tour-1002',
        title: '丝路梦享号新疆5日游【春夏线】',
        cover: '/static/images/mock/ancient-town.jpg',
        price: 31999,
        stockText: '余票充足',
        departureCity: '吐鲁番',
        arrivalCity: '高昌',
        durationText: '5日游',
        tags: ['春夏线', '丝路人文', '高端专列']
      },
      {
        id: 'train-5002',
        tourId: 'tour-1002',
        title: '丝路梦享号新疆7日游【10月金秋线】',
        cover: '/static/images/mock/ancient-town.jpg',
        price: 19999,
        stockText: '余票充足',
        departureCity: '吐鲁番',
        arrivalCity: '高昌',
        durationText: '7日游',
        tags: ['金秋线', '摄影友好', '丝路风光']
      }
    ]
  }
]

export const mockTrainHomeData: TrainHomeData = {
  hero: {
    eyebrow: 'Spring',
    title: '坐上豪华专列 新疆·星级之旅',
    subtitle: '成都起止13-16天纯玩行程',
    searchPlaceholder: '天府号',
    backgroundImage: '/static/images/home/feed-xinjiang.png'
  },
  notice: {
    id: 'notice-1',
    title: '购票提醒',
    actionText: '查看详情',
    detail: '旅游专列席位以实时库存为准，提交报名后顾问会确认铺位、车厢与合同信息。'
  },
  guideActions: [
    { id: 'guide-1', title: '预订流程', actionType: 'booking', tone: 'cyan' },
    { id: 'guide-2', title: '预订条件', actionType: 'condition', tone: 'green' },
    { id: 'guide-3', title: '车票说明', actionType: 'carriage', tone: 'coral' },
    { id: 'guide-4', title: '退订说明', actionType: 'refund', tone: 'amber' }
  ],
  agencyBanner: {
    id: 'agency-1',
    title: '旅游专列代售票中心',
    subtitle: '品质保障 全国联网',
    cover: '/static/images/mock/grassland.jpg'
  },
  series: trainProducts,
  story: {
    id: 'story-1',
    title: '天山神秘大峡谷',
    subtitle: '大自然的旷世之作，亿年雕刻的自然之美。',
    description:
      '又称克孜利亚大峡谷，以红褐色山体、峡谷褶皱和光影层次闻名，是南疆线路里很适合慢游和拍照的一站。',
    image: '/static/images/mock/ancient-town.jpg'
  },
  serviceText: '旅游专列运营中心，提供旅游专列门票服务。'
}

export function searchMockTrainSeries(params: TrainSearchParams = {}) {
  const keyword = params.keyword?.trim()
  if (!keyword && !params.seriesId) return mockTrainHomeData.series

  return mockTrainHomeData.series
    .filter((series) => !params.seriesId || series.id === params.seriesId)
    .map((series) => ({
      ...series,
      products: series.products.filter((product) => {
        if (!keyword) return true
        return [
          series.title,
          product.title,
          product.departureCity,
          product.arrivalCity,
          product.durationText,
          ...product.tags
        ].some((text) => text.includes(keyword))
      })
    }))
    .filter((series) => series.products.length > 0)
}

export function searchMockTrainProducts(params: TrainProductSearchParams = {}): TrainSearchResult {
  const keyword = params.keyword?.trim() || ''
  const page = Math.max(Number(params.page) || 1, 1)
  const pageSize = Math.max(Number(params.pageSize) || 20, 1)
  const matched = trainSearchProducts.filter((product) => {
    if (!keyword) return true
    return [
      product.title,
      product.departureCity,
      product.arrivalCity,
      product.durationText,
      product.stockText,
      ...product.tags
    ].some((text) => text.includes(keyword))
  })

  const sorted = [...matched].sort((first, second) => {
    if (params.sort === 'price') return first.price - second.price
    if (params.sort === 'sales') return second.sales - first.sales
    return 0
  })

  const start = (page - 1) * pageSize

  return {
    keyword,
    total: sorted.length,
    list: sorted.slice(start, start + pageSize).map((product) => ({
      id: product.id,
      tourId: product.tourId,
      title: product.title,
      cover: product.cover,
      price: product.price,
      stockText: product.stockText,
      departureCity: product.departureCity,
      arrivalCity: product.arrivalCity,
      durationText: product.durationText,
      tags: product.tags
    }))
  }
}

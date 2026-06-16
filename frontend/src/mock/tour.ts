import type { PaginationResult } from '@/types/common'
import type {
  TourDetail,
  TourItineraryDay,
  TourListParams,
  TourPackage,
  TourProduct,
  TourSchedule
} from '@/types/tour'
import { addDays, formatDate } from '@/utils/date'

const today = formatDate(new Date())

export const mockTourProducts: TourProduct[] = [
  {
    id: 'tour-1001',
    title: '长江三峡游轮 5 日深度假期',
    subtitle: '重庆登船，宜昌离船，轻松看峡谷与人文古迹',
    cover: '/static/images/mock/sanxia.jpg',
    images: ['/static/images/mock/sanxia.jpg'],
    destination: '三峡',
    departureCity: '重庆',
    days: 5,
    nights: 4,
    tags: ['三峡游轮', '亲子友好', '轻奢'],
    themes: ['国内长线', '亲子游'],
    price: 2999,
    originalPrice: 3599,
    priceUnit: 'person',
    saleCount: 1862,
    favoriteCount: 430,
    score: 4.8,
    commentCount: 328,
    difficulty: 'easy',
    suitableFor: ['亲子家庭', '爸妈安心游'],
    highlights: ['五星游轮住宿', '白帝城讲解', '三峡大坝参观'],
    nextScheduleDate: addDays(today, 5),
    status: 'available'
  },
  {
    id: 'tour-1002',
    title: '呼伦贝尔草原亲子 6 日',
    subtitle: '草原牧场、骑马体验、篝火晚会',
    cover: '/static/images/mock/grassland.jpg',
    images: ['/static/images/mock/grassland.jpg'],
    destination: '呼伦贝尔',
    departureCity: '海拉尔',
    days: 6,
    nights: 5,
    tags: ['草原旅行', '亲子游', '暑期'],
    themes: ['亲子游', '国内长线'],
    price: 4280,
    originalPrice: 4680,
    priceUnit: 'person',
    saleCount: 932,
    favoriteCount: 260,
    score: 4.9,
    commentCount: 188,
    difficulty: 'easy',
    suitableFor: ['亲子家庭', '摄影爱好者'],
    highlights: ['草原牧场', '俄式风情小镇', '亲子自然课堂'],
    nextScheduleDate: addDays(today, 9),
    status: 'available'
  },
  {
    id: 'tour-1003',
    title: '徽州古镇摄影 4 日',
    subtitle: '宏村、西递、塔川晨雾，一次拍够徽派秋色',
    cover: '/static/images/mock/ancient-town.jpg',
    images: ['/static/images/mock/ancient-town.jpg'],
    destination: '徽州',
    departureCity: '杭州',
    days: 4,
    nights: 3,
    tags: ['古镇旅行', '摄影游', '小团'],
    themes: ['摄影游', '周边游'],
    price: 1680,
    priceUnit: 'person',
    saleCount: 642,
    favoriteCount: 196,
    score: 4.7,
    commentCount: 126,
    difficulty: 'normal',
    suitableFor: ['摄影爱好者', '人文旅行者'],
    highlights: ['摄影领队带队', '晨昏黄金机位', '徽州文化讲解'],
    nextScheduleDate: addDays(today, 12),
    status: 'available'
  },
  {
    id: 'tour-1004',
    title: '重庆武隆山湖林场·天生三桥 1 日',
    subtitle: '小九寨溪流瀑布、秘境森林、宫崎骏感的夏天',
    cover: '/static/images/mock/sanxia.jpg',
    images: ['/static/images/mock/sanxia.jpg', '/static/images/mock/hiking.jpg'],
    destination: '重庆武隆',
    departureCity: '重庆',
    days: 1,
    nights: 0,
    tags: ['无痕山野', '漫步森林氧吧', '环湖漫游', '溪布溪流', '小团'],
    themes: ['重庆跟团游', '户外徒步', '周边游'],
    price: 68,
    priceUnit: 'person',
    saleCount: 3936,
    favoriteCount: 388,
    score: 4.8,
    commentCount: 256,
    difficulty: 'easy',
    suitableFor: ['户外玩家', '亲子家庭', '年轻朋友'],
    highlights: ['溪流瀑布', '小九寨', '秘境森林', '焚台峰'],
    nextScheduleDate: addDays(today, 3),
    status: 'available'
  },
  {
    id: 'tour-1005',
    title: '平潭海岛度假 4 日',
    subtitle: '蓝眼泪季节限定，海边骑行与赶海体验',
    cover: '/static/images/mock/island.jpg',
    images: ['/static/images/mock/island.jpg'],
    destination: '平潭',
    departureCity: '福州',
    days: 4,
    nights: 3,
    tags: ['海岛度假', '亲子', '蓝眼泪'],
    themes: ['海岛度假', '亲子游'],
    price: 2180,
    originalPrice: 2480,
    priceUnit: 'person',
    saleCount: 846,
    favoriteCount: 244,
    score: 4.7,
    commentCount: 162,
    difficulty: 'easy',
    suitableFor: ['亲子家庭', '情侣'],
    highlights: ['海景民宿', '环岛骑行', '赶海体验'],
    nextScheduleDate: addDays(today, 8),
    status: 'available'
  },
  {
    id: 'tour-1007',
    title: '西沙群岛蓝海秘境 5 日',
    subtitle: '登临南海珊瑚岛礁，玻璃海巡游与海岛轻探险',
    cover: '/static/images/mock/island.jpg',
    images: ['/static/images/mock/island.jpg'],
    destination: '西沙',
    departureCity: '三亚',
    days: 5,
    nights: 4,
    tags: ['西沙游', '海岛度假', '轻奢小团'],
    themes: ['海岛度假', '国内长线'],
    price: 6980,
    originalPrice: 7680,
    priceUnit: 'person',
    saleCount: 526,
    favoriteCount: 318,
    score: 4.9,
    commentCount: 96,
    difficulty: 'easy',
    suitableFor: ['海岛度假', '摄影爱好者', '情侣'],
    highlights: ['南海邮轮登岛', '玻璃海浮潜体验', '专业管家服务'],
    nextScheduleDate: addDays(today, 10),
    status: 'available'
  },
  {
    id: 'tour-1008',
    title: '西沙亲海探索 5 日',
    subtitle: '海洋课堂、甲板观星、亲子友好的南海度假体验',
    cover: '/static/images/mock/island.jpg',
    images: ['/static/images/mock/island.jpg'],
    destination: '西沙',
    departureCity: '三亚',
    days: 5,
    nights: 4,
    tags: ['西沙游', '亲子', '海岛度假'],
    themes: ['海岛度假', '亲子游'],
    price: 6380,
    originalPrice: 7080,
    priceUnit: 'person',
    saleCount: 418,
    favoriteCount: 286,
    score: 4.8,
    commentCount: 82,
    difficulty: 'easy',
    suitableFor: ['亲子家庭', '海岛度假'],
    highlights: ['亲子海洋课堂', '南海日落', '登岛纪念'],
    nextScheduleDate: addDays(today, 13),
    status: 'available'
  },
  {
    id: 'tour-1009',
    title: '三峡游轮暑期亲子 5 日',
    subtitle: '江景阳台房、三峡大坝研学、白帝城人文讲解',
    cover: '/static/images/mock/sanxia.jpg',
    images: ['/static/images/mock/sanxia.jpg'],
    destination: '三峡',
    departureCity: '重庆',
    days: 5,
    nights: 4,
    tags: ['三峡游', '亲子研学', '暑期'],
    themes: ['国内长线', '亲子游'],
    price: 3299,
    originalPrice: 3899,
    priceUnit: 'person',
    saleCount: 1420,
    favoriteCount: 390,
    score: 4.8,
    commentCount: 268,
    difficulty: 'easy',
    suitableFor: ['亲子家庭', '爸妈安心游'],
    highlights: ['阳台江景房', '亲子研学', '船上管家'],
    nextScheduleDate: addDays(today, 7),
    status: 'available'
  },
  {
    id: 'tour-1006',
    title: '上海城市微旅行 1 日',
    subtitle: '梧桐区Citywalk，建筑、人文与咖啡地图',
    cover: '/static/images/mock/citywalk.jpg',
    images: ['/static/images/mock/citywalk.jpg'],
    destination: '上海',
    departureCity: '上海',
    days: 1,
    nights: 0,
    tags: ['城市微旅行', 'Citywalk', '周边游'],
    themes: ['城市微旅行', '周边游'],
    price: 198,
    priceUnit: 'person',
    saleCount: 2310,
    favoriteCount: 512,
    score: 4.8,
    commentCount: 420,
    difficulty: 'easy',
    suitableFor: ['本地周末', '文化爱好者'],
    highlights: ['城市讲解员', '小众街区', '咖啡路线'],
    nextScheduleDate: addDays(today, 2),
    status: 'available'
  }
]

export const mockSchedules: TourSchedule[] = [
  {
    id: 'schedule-1004-1',
    tourId: 'tour-1004',
    packageId: 'package-1004-forest',
    date: addDays(today, 1),
    endDate: addDays(today, 1),
    adultPrice: 750,
    stock: 22,
    bookedCount: 16,
    minGroupSize: 15,
    status: 'open'
  },
  {
    id: 'schedule-1004-2',
    tourId: 'tour-1004',
    packageId: 'package-1004-forest',
    date: addDays(today, 2),
    endDate: addDays(today, 2),
    adultPrice: 750,
    stock: 18,
    bookedCount: 20,
    minGroupSize: 15,
    status: 'open'
  },
  {
    id: 'schedule-1004-3',
    tourId: 'tour-1004',
    packageId: 'package-1004-bridge',
    date: addDays(today, 3),
    endDate: addDays(today, 3),
    adultPrice: 798,
    stock: 8,
    bookedCount: 27,
    minGroupSize: 15,
    status: 'open'
  },
  {
    id: 'schedule-1004-4',
    tourId: 'tour-1004',
    packageId: 'package-1004-bridge',
    date: addDays(today, 6),
    endDate: addDays(today, 6),
    adultPrice: 780,
    stock: 0,
    bookedCount: 35,
    minGroupSize: 15,
    status: 'full'
  },
  {
    id: 'schedule-1',
    tourId: 'tour-1001',
    packageId: 'package-tour-1001-standard',
    date: addDays(today, 5),
    endDate: addDays(today, 9),
    adultPrice: 2999,
    singleRoomDiff: 800,
    stock: 16,
    bookedCount: 8,
    minGroupSize: 8,
    status: 'open'
  },
  {
    id: 'schedule-2',
    tourId: 'tour-1001',
    packageId: 'package-tour-1001-standard',
    date: addDays(today, 12),
    endDate: addDays(today, 16),
    adultPrice: 3199,
    singleRoomDiff: 900,
    stock: 0,
    bookedCount: 24,
    minGroupSize: 8,
    status: 'full'
  },
  {
    id: 'schedule-1001-3',
    tourId: 'tour-1001',
    packageId: 'package-tour-1001-standard',
    date: addDays(today, 19),
    endDate: addDays(today, 23),
    adultPrice: 3299,
    singleRoomDiff: 900,
    stock: 10,
    bookedCount: 18,
    minGroupSize: 8,
    status: 'open'
  },
  {
    id: 'schedule-3',
    tourId: 'tour-1002',
    packageId: 'package-tour-1002-standard',
    date: addDays(today, 9),
    endDate: addDays(today, 14),
    adultPrice: 4280,
    stock: 20,
    bookedCount: 10,
    minGroupSize: 10,
    status: 'open'
  },
  {
    id: 'schedule-1007-1',
    tourId: 'tour-1007',
    packageId: 'package-tour-1007-standard',
    date: addDays(today, 10),
    endDate: addDays(today, 14),
    adultPrice: 6980,
    singleRoomDiff: 1200,
    stock: 12,
    bookedCount: 18,
    minGroupSize: 10,
    status: 'open'
  },
  {
    id: 'schedule-1007-2',
    tourId: 'tour-1007',
    packageId: 'package-tour-1007-standard',
    date: addDays(today, 17),
    endDate: addDays(today, 21),
    adultPrice: 7280,
    singleRoomDiff: 1280,
    stock: 6,
    bookedCount: 24,
    minGroupSize: 10,
    status: 'open'
  },
  {
    id: 'schedule-1008-1',
    tourId: 'tour-1008',
    packageId: 'package-tour-1008-standard',
    date: addDays(today, 13),
    endDate: addDays(today, 17),
    adultPrice: 6380,
    singleRoomDiff: 1100,
    stock: 14,
    bookedCount: 16,
    minGroupSize: 10,
    status: 'open'
  },
  {
    id: 'schedule-1009-1',
    tourId: 'tour-1009',
    packageId: 'package-tour-1009-standard',
    date: addDays(today, 7),
    endDate: addDays(today, 11),
    adultPrice: 3299,
    singleRoomDiff: 880,
    stock: 16,
    bookedCount: 12,
    minGroupSize: 8,
    status: 'open'
  }
]

function buildDefaultPackages(tour: TourProduct, schedules: TourSchedule[]): TourPackage[] {
  return [
    {
      id: `package-${tour.id}-standard`,
      tourId: tour.id,
      name: tour.title,
      days: tour.days,
      nights: tour.nights,
      departureCity: tour.departureCity,
      destination: tour.destination,
      description: tour.subtitle,
      price: schedules[0]?.adultPrice || tour.price,
      stock: schedules[0]?.stock,
      tags: tour.tags.slice(0, 3)
    }
  ]
}

function buildDefaultTourDetail(tour: TourProduct): TourDetail {
  const schedules = mockSchedules.filter((item) => item.tourId === tour.id)
  const packages = buildDefaultPackages(tour, schedules)
  const baseItinerary: TourItineraryDay[] = [
    {
      day: 1,
      title: '集合出发',
      city: tour.departureCity,
      routeTitle: `${tour.departureCity} - ${tour.destination}`,
      transport: '旅游巴士',
      accommodation: tour.nights ? '精选酒店' : '无住宿',
      meals: ['自理'],
      description: '抵达集合地，领队说明行程注意事项，开启旅程。',
      attractions: [tour.destination],
      images: tour.images,
      nodes: [
        {
          id: `${tour.id}-node-highlight`,
          title: '亮点',
          content: tour.highlights.join('，'),
          icon: 'highlight'
        },
        {
          id: `${tour.id}-node-morning`,
          title: '上午',
          content: '集合后乘车前往目的地，领队介绍沿途看点和注意事项。',
          icon: 'morning'
        },
        {
          id: `${tour.id}-node-afternoon`,
          title: '下午',
          content: '深入目的地核心区域，安排主题体验和自由探索时间。',
          icon: 'afternoon'
        }
      ]
    },
    {
      day: Math.min(2, tour.days),
      title: '核心体验日',
      city: tour.destination,
      routeTitle: `${tour.destination} 深度体验`,
      transport: '旅游巴士',
      accommodation: tour.nights > 1 ? '精选酒店' : '无住宿',
      meals: ['早餐', '午餐'],
      description: '深入目的地核心区域，安排主题玩法和自由探索时间。',
      attractions: tour.highlights,
      images: tour.images,
      nodes: [
        {
          id: `${tour.id}-node-core`,
          title: '全天',
          content: '根据团期和现场情况游览核心景点，领队会灵活安排节奏。',
          icon: 'morning'
        }
      ]
    }
  ]
  const itinerary = tour.days > 1 ? baseItinerary : baseItinerary.slice(0, 1)

  return {
    ...tour,
    overview: `${tour.title} 以 ${tour.destination} 为核心目的地，覆盖经典景观、在地体验和轻量自由活动时间。`,
    categoryLabel: `${tour.themes[0] || '跟团游'} · ${tour.days}天${tour.nights}晚`,
    detailTags: tour.tags,
    stats: [
      { id: 'rank', label: 'TOP5', value: '同城热榜', description: '近7日热度' },
      {
        id: 'difficulty',
        label: '难度',
        value: tour.difficulty === 'hard' ? '进阶' : tour.difficulty === 'normal' ? '适中' : '基础'
      },
      { id: 'weather', label: '天气', value: '可获得' },
      { id: 'age', label: '年龄', value: '6-60' }
    ],
    serviceGuarantees: [
      { id: 'refund', title: '支持退款', description: '按规则无忧退改' },
      { id: 'guarantee', title: '退订保障', description: '库存与团期实时确认' }
    ],
    bookingFeatures: ['随时退', '免预约', '周末节假日通用'],
    packages,
    ticketTypes: [
      {
        id: packages[0].id,
        name: packages[0].name,
        description: packages[0].description,
        price: packages[0].price,
        stock: packages[0].stock
      }
    ],
    travelerLimit: 1,
    groupSizeText: `${schedules[0]?.minGroupSize || 8}-${Math.max(
      schedules[0]?.minGroupSize || 8,
      (schedules[0]?.minGroupSize || 8) + 20
    )}人`,
    ageRange: '6-60',
    itineraryNotice:
      '具体时间可能因天气、交通、体能差异等调整，行程描述和图片仅供参考，具体安排以行程单为准。',
    purchaseNotice: ['下单后客服会二次确认余位', '出行前一天发送集合信息', '请携带有效身份证件'],
    itinerary,
    schedules,
    feeIncludes: ['行程内交通', '住宿', '领队服务', '部分餐食', '景点首道门票'],
    feeExcludes: ['个人消费', '单房差', '未列明餐食', '出发地往返大交通'],
    bookingNotice: ['请至少提前 3 天报名', '户外线路请按装备清单准备', '未成年人需监护人同行'],
    refundPolicy: [
      '出发前 7 天可无损取消',
      '出发前 3-6 天收取 20% 损失',
      '出发前 72 小时内按实际损失收取'
    ],
    recommendedReason: tour.highlights
  }
}

const mockTourDetailMap: Record<string, Partial<TourDetail>> = {
  'tour-1004': {
    overview:
      '重庆小九寨 16KM 爬升约 600 米，漫步森林秘境、溪流瀑布与野生植物群落，适合想在周末轻量亲近自然的用户。',
    categoryLabel: '跟团游 · 户外游 · 登山徒步 · 1天',
    detailTags: ['无痕山野', '漫步森林氧吧', '环湖漫游', '宫崎骏的夏天', '瀑布溪流', '小九寨'],
    stats: [
      { id: 'rank', label: 'TOP5', value: '同城热榜' },
      { id: 'difficulty', label: '难度', value: '基础入门' },
      { id: 'weather', label: '天气', value: '可获得' },
      { id: 'age', label: '年龄', value: '6-60' }
    ],
    serviceGuarantees: [
      { id: 'refund', title: '支持退款', description: '未出行可按规则退' },
      { id: 'guarantee', title: '退订保障', description: '团期变更及时通知' }
    ],
    bookingFeatures: ['随时退', '免预约', '周末节假日通用'],
    packages: [
      {
        id: 'package-1004-forest',
        tourId: 'tour-1004',
        name: '尊享·北疆全景',
        days: 12,
        nights: 11,
        departureCity: '乌鲁木齐',
        destination: '北疆',
        description: '喀纳斯、禾木、赛里木湖与独库公路全景体验',
        price: 750,
        stock: 40,
        tags: ['北疆全景', '轻奢小团', '深度环线']
      },
      {
        id: 'package-1004-bridge',
        tourId: 'tour-1004',
        name: '武隆山湖林场轻徒步',
        days: 1,
        nights: 0,
        departureCity: '重庆',
        destination: '武隆',
        description: '山湖林场、溪流瀑布与天生三桥轻量玩法',
        price: 798,
        stock: 28,
        tags: ['重庆出发', '森林徒步', '小团']
      }
    ],
    ticketTypes: [
      {
        id: 'package-1004-forest',
        name: '尊享·北疆全景',
        description: '12天11晚，乌鲁木齐出发，含领队服务与基础保障',
        price: 750,
        stock: 40
      },
      {
        id: 'package-1004-bridge',
        name: '武隆山湖林场轻徒步',
        description: '1天，重庆出发，含往返交通、领队服务、基础保险',
        price: 798,
        stock: 28
      }
    ],
    travelerLimit: 1,
    groupSizeText: '15-35人',
    ageRange: '6-60',
    itinerary: [
      {
        day: 1,
        title: '重庆 山湖林场 重庆',
        city: '重庆',
        routeTitle: '重庆  山湖林场  重庆',
        transport: '旅游巴士',
        accommodation: '无住宿',
        meals: ['自理'],
        description: '溪流瀑布、小九寨、秘境森林、焚台峰，轻量徒步感受山野夏天。',
        attractions: ['山湖林场', '溪流瀑布', '森林秘境'],
        images: ['/static/images/mock/sanxia.jpg'],
        nodes: [
          {
            id: 'tour-1004-highlight',
            title: '亮点',
            content: '溪流瀑布，小九寨，秘境森林，焚台峰',
            icon: 'highlight'
          },
          {
            id: 'tour-1004-morning',
            title: '上午',
            time: '7:30-8:00',
            content:
              '在轨道 3 号线嘉州路站 3B 出口集合签到。车上领队介绍行程注意事项，并带大家做轻松破冰互动。',
            icon: 'morning'
          },
          {
            id: 'tour-1004-noon',
            title: '中午',
            content: '抵达林场后开始环湖漫游，沿溪谷寻找瀑布和森林步道，中途安排轻食休整。',
            icon: 'afternoon'
          },
          {
            id: 'tour-1004-afternoon',
            title: '下午',
            content: '继续完成山野路线，视天气和团队体能调整节奏，适时集合返程回到重庆主城。',
            icon: 'evening'
          }
        ]
      }
    ],
    feeIncludes: ['重庆主城往返交通', '专业领队服务', '户外基础保险', '活动组织服务'],
    feeExcludes: ['个人餐饮', '个人消费', '未列明费用'],
    bookingNotice: ['建议穿防滑徒步鞋', '请自备午餐和饮用水', '未成年人需监护人同行'],
    refundPolicy: ['出发前 24 小时可无损取消', '出发前 24 小时内取消按实际损失收取'],
    recommendedReason: ['溪流瀑布', '小九寨', '秘境森林', '焚台峰']
  }
}

export const mockTourDetails: TourDetail[] = mockTourProducts.map((tour) => ({
  ...buildDefaultTourDetail(tour),
  ...mockTourDetailMap[tour.id]
}))

export function getMockTourList(params: TourListParams = {}): PaginationResult<TourProduct> {
  const page = params.page || 1
  const pageSize = params.pageSize || 10
  const keyword = params.keyword?.trim()
  const filtered = mockTourProducts.filter((item) => {
    const hitKeyword = keyword
      ? [item.title, item.destination, item.departureCity, ...item.tags, ...item.themes].some(
          (text) => text.includes(keyword)
        )
      : true
    const hitDestination = params.destination ? item.destination === params.destination : true
    const hitTheme = params.themes?.length
      ? params.themes.some((theme) => item.themes.includes(theme))
      : true
    return hitKeyword && hitDestination && hitTheme
  })
  const start = (page - 1) * pageSize
  const list = filtered.slice(start, start + pageSize)

  return {
    list,
    page,
    pageSize,
    total: filtered.length,
    hasMore: start + pageSize < filtered.length
  }
}

export function getMockTourDetail(id: string): TourDetail {
  return mockTourDetails.find((item) => item.id === id) || mockTourDetails[0]
}

export function getMockTourPackages(tourId: string): TourPackage[] {
  return getMockTourDetail(tourId).packages || []
}

import { mockTourProducts } from './tour'
import type { XishaHomeData, XishaTicketSearchParams } from '@/types/xisha'
import { addDays, formatDate } from '@/utils/date'

const today = formatDate(new Date())
const xishaMainTour =
  mockTourProducts.find((item) => item.id === 'tour-1007') || mockTourProducts[0]
const xishaFamilyTour = mockTourProducts.find((item) => item.id === 'tour-1008') || xishaMainTour

export const mockXishaHomeData: XishaHomeData = {
  queryPreset: {
    defaultMode: 'date',
    defaultDate: addDays(today, 3),
    fromCity: '重庆',
    toCity: '宜昌',
    cruiseNames: ['美维凯璇', '长江传说', '黄金三号', '长江壹号'],
    hotRoutes: [
      {
        id: 'route-cq-yc',
        fromCity: '重庆',
        toCity: '宜昌',
        label: '重庆-宜昌',
        popular: true
      },
      {
        id: 'route-yc-cq',
        fromCity: '宜昌',
        toCity: '重庆',
        label: '宜昌-重庆'
      },
      {
        id: 'route-cq-wh',
        fromCity: '重庆',
        toCity: '武汉',
        label: '重庆-武汉'
      }
    ]
  },
  shortcuts: [
    {
      id: 'shortcut-schedule',
      title: '船期表',
      subtitle: '按日期查余位',
      actionType: 'schedule',
      tone: 'blue'
    },
    {
      id: 'shortcut-brand',
      title: '游轮品牌',
      subtitle: '筛选船型服务',
      actionType: 'brand',
      tone: 'purple'
    },
    {
      id: 'shortcut-guide',
      title: '行程攻略',
      subtitle: '选船避坑指南',
      actionType: 'guide',
      tone: 'teal'
    },
    {
      id: 'shortcut-order',
      title: '我的订单',
      subtitle: '查看报名进度',
      actionType: 'order',
      tone: 'orange'
    }
  ],
  saleBanner: {
    id: 'sale-banner',
    title: '特价船票 超级省',
    subtitle: '高性价比船期，余位实时查询',
    cover: '/static/images/xisha/sale-banner.png',
    tourId: xishaMainTour.id
  },
  specialTickets: [
    {
      id: 'ticket-special-1',
      tourId: xishaMainTour.id,
      title: '【美维凯璇】三峡豪华游轮下水行程',
      subtitle: '美维凯璇号三峡游轮下水行程',
      cruiseName: '美维凯璇',
      cover: '/static/images/xisha/cruise-blue.png',
      fromCity: '重庆',
      toCity: '宜昌',
      departureDate: addDays(today, 2),
      durationText: '4天3晚',
      price: 2999,
      tags: ['阳台房', '下水航线', '余位紧张'],
      stock: 8,
      badge: '抢',
      bookedCount: 77
    },
    {
      id: 'ticket-special-2',
      tourId: xishaFamilyTour.id,
      title: '【长江传说】三峡豪华游轮上水行程',
      subtitle: '全程甄选精华景点，享受一流精选服务',
      cruiseName: '长江传说',
      cover: '/static/images/xisha/cruise-light.png',
      fromCity: '宜昌',
      toCity: '重庆',
      departureDate: addDays(today, 6),
      durationText: '5天4晚',
      price: 1600,
      tags: ['暑期可订', '轻奢', '上水航线'],
      stock: 14,
      badge: '省',
      bookedCount: 129
    },
    {
      id: 'ticket-special-3',
      tourId: xishaFamilyTour.id,
      title: '【长江传说】三峡豪华游轮下水行程',
      subtitle: '精选阳台房与岸上观光组合，适合家庭出游',
      cruiseName: '长江传说',
      cover: '/static/images/mock/sanxia.jpg',
      fromCity: '重庆',
      toCity: '宜昌',
      departureDate: addDays(today, 4),
      durationText: '4天3晚',
      price: 1680,
      tags: ['亲子友好', '江景阳台', '管家服务'],
      stock: 10,
      bookedCount: 96
    }
  ],
  activityBanners: [
    {
      id: 'activity-summer',
      title: '暑期亲子游轮推荐',
      subtitle: '一价全含家庭主题房，岸上观光轻松安排',
      cover: '/static/images/xisha/activity-banner.png',
      tourId: xishaFamilyTour.id
    }
  ],
  recommendedTickets: [
    {
      id: 'ticket-recommend-1',
      tourId: xishaMainTour.id,
      title: '【黄金三号】三峡豪华游轮下水行程',
      subtitle: '入住豪华观景阳台标间，尽享自助餐与岸上景点',
      cruiseName: '黄金三号',
      cover: '/static/images/mock/sanxia.jpg',
      fromCity: '重庆',
      toCity: '宜昌',
      departureDate: addDays(today, 24),
      durationText: '4天3晚',
      price: 2200,
      tags: ['阳台房', '自助餐', '岸上观光'],
      stock: 12,
      bookedCount: 216
    },
    {
      id: 'ticket-recommend-2',
      tourId: xishaFamilyTour.id,
      title: '【长江叁号】三峡豪华游轮下水行程',
      subtitle: '甄选游览精华景点，特色非遗体验与船上活动',
      cruiseName: '长江叁号',
      cover: '/static/images/xisha/cruise-light.png',
      fromCity: '重庆',
      toCity: '宜昌',
      departureDate: addDays(today, 97),
      durationText: '4天3晚',
      price: 4400,
      tags: ['非遗体验', '精致餐饮', '高端船型'],
      stock: 16,
      bookedCount: 212
    },
    {
      id: 'ticket-recommend-3',
      tourId: xishaFamilyTour.id,
      title: '【长江壹号】三峡豪华游轮上水行程',
      subtitle: '乘坐游轮阅览长江三峡两岸风光',
      cruiseName: '长江壹号',
      cover: '/static/images/xisha/cruise-blue.png',
      fromCity: '宜昌',
      toCity: '重庆',
      departureDate: addDays(today, 81),
      durationText: '5天4晚',
      price: 4100,
      tags: ['上水航线', '景观房', '爸妈安心'],
      stock: 9,
      bookedCount: 118
    },
    {
      id: 'ticket-recommend-4',
      tourId: xishaMainTour.id,
      title: '【美维凯璇】三峡豪华游轮上水行程',
      subtitle: '美维凯璇号三峡游轮上水行程',
      cruiseName: '美维凯璇',
      cover: '/static/images/xisha/cruise-blue.png',
      fromCity: '宜昌',
      toCity: '重庆',
      departureDate: addDays(today, 5),
      durationText: '5天4晚',
      price: 3099,
      tags: ['特价船票', '上水航线', '余位可订'],
      stock: 7,
      bookedCount: 77
    }
  ],
  news: [
    {
      id: 'news-1',
      articleId: 'article-xisha-1',
      title: '暑期亲子活动 | 黄金系列游轮航次与房型推荐',
      cover: '/static/images/mock/sanxia.jpg',
      publishedAt: '2026-05-16 16:53',
      viewCount: 77,
      summary: '暑期家庭出行优先看房型、餐饮和岸上观光节奏。'
    },
    {
      id: 'news-2',
      articleId: 'article-xisha-2',
      title: '限时9折 | 2026年盛夏部分航次预售活动开启',
      cover: '/static/images/xisha/cruise-light.png',
      publishedAt: '2026-04-28 16:25',
      viewCount: 129,
      summary: '部分热门航线开放预售，适合提前锁定家庭房。'
    },
    {
      id: 'news-3',
      articleId: 'article-xisha-3',
      title: '楚天游轮「长江神话&长江如歌」7月航次说明',
      cover: '/static/images/xisha/cruise-blue.png',
      publishedAt: '2026-04-09 14:41',
      viewCount: 216,
      summary: '不同船型定位、餐饮服务和岸上项目差异整理。'
    },
    {
      id: 'news-4',
      articleId: 'article-xisha-4',
      title: '五一小长假畅游三峡如何选船？华夏三号/美维凯璇对比',
      cover: '/static/images/mock/island.jpg',
      publishedAt: '2026-04-02 17:07',
      viewCount: 212,
      summary: '从预算、房型、航线方向和出发日期四个维度判断。'
    }
  ]
}

export function searchMockXishaTickets(params: XishaTicketSearchParams = {}) {
  const tickets = [...mockXishaHomeData.specialTickets, ...mockXishaHomeData.recommendedTickets]
  return tickets.filter((item) => {
    const matchesRoute =
      (!params.fromCity || item.fromCity === params.fromCity) &&
      (!params.toCity || item.toCity === params.toCity)
    const matchesCruise = !params.cruiseName || item.cruiseName.includes(params.cruiseName)
    const matchesDate = !params.departureDate || item.departureDate >= params.departureDate
    return matchesRoute && matchesCruise && matchesDate
  })
}

import { mockTourProducts } from './tour'
import type { SanxiaHomeData, SanxiaTicketSearchParams } from '@/types/sanxia'
import { addDays, formatDate } from '@/utils/date'

const today = formatDate(new Date())
const sanxiaMainTour =
  mockTourProducts.find((item) => item.id === 'tour-1001') || mockTourProducts[0]
const sanxiaFamilyTour = mockTourProducts.find((item) => item.id === 'tour-1009') || sanxiaMainTour

export const mockSanxiaHomeData: SanxiaHomeData = {
  queryPreset: {
    defaultMode: 'date',
    defaultDate: addDays(today, 4),
    fromCity: '重庆',
    toCity: '宜昌',
    cruiseNames: ['美维凯璇', '长江传说', '黄金三号', '长江壹号', '世纪绿洲'],
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
      subtitle: '对比船型服务',
      actionType: 'brand',
      tone: 'purple'
    },
    {
      id: 'shortcut-guide',
      title: '行程攻略',
      subtitle: '上下水怎么选',
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
    title: '三峡船票限时省',
    subtitle: '热门航线余位实时查询',
    cover: '/static/images/xisha/sale-banner.png',
    tourId: sanxiaMainTour.id
  },
  specialTickets: [
    {
      id: 'sanxia-special-1',
      tourId: sanxiaMainTour.id,
      title: '【美维凯璇】长江三峡豪华游轮下水行程',
      subtitle: '重庆登船宜昌离船，经典下水航线，轻松看三峡精华。',
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
      id: 'sanxia-special-2',
      tourId: sanxiaFamilyTour.id,
      title: '【长江传说】三峡豪华游轮上水行程',
      subtitle: '宜昌登船重庆离船，慢游峡谷风光与人文古迹。',
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
      id: 'sanxia-special-3',
      tourId: sanxiaFamilyTour.id,
      title: '【黄金三号】三峡游轮亲子假期',
      subtitle: '阳台江景房、亲子活动和岸上观光组合。',
      cruiseName: '黄金三号',
      cover: '/static/images/mock/sanxia.jpg',
      fromCity: '重庆',
      toCity: '宜昌',
      departureDate: addDays(today, 4),
      durationText: '4天3晚',
      price: 2200,
      tags: ['亲子友好', '江景阳台', '管家服务'],
      stock: 10,
      bookedCount: 96
    }
  ],
  activityBanners: [
    {
      id: 'activity-summer',
      title: '暑期亲子游轮推荐',
      subtitle: '家庭房、岸上观光和船上活动一站安排',
      cover: '/static/images/xisha/activity-banner.png',
      tourId: sanxiaFamilyTour.id
    }
  ],
  recommendedTickets: [
    {
      id: 'sanxia-recommend-1',
      tourId: sanxiaMainTour.id,
      title: '【黄金三号】三峡豪华游轮下水行程',
      subtitle: '入住观景阳台标间，包含自助餐与岸上景点游览。',
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
      id: 'sanxia-recommend-2',
      tourId: sanxiaFamilyTour.id,
      title: '【长江叁号】三峡豪华游轮下水行程',
      subtitle: '甄选游览精华景点，非遗体验与船上活动更丰富。',
      cruiseName: '长江叁号',
      cover: '/static/images/xisha/cruise-light.png',
      fromCity: '重庆',
      toCity: '宜昌',
      departureDate: addDays(today, 38),
      durationText: '4天3晚',
      price: 4400,
      tags: ['非遗体验', '精致餐饮', '高端船型'],
      stock: 16,
      bookedCount: 212
    },
    {
      id: 'sanxia-recommend-3',
      tourId: sanxiaFamilyTour.id,
      title: '【长江壹号】三峡豪华游轮上水行程',
      subtitle: '乘坐游轮阅览长江三峡两岸风光。',
      cruiseName: '长江壹号',
      cover: '/static/images/xisha/cruise-blue.png',
      fromCity: '宜昌',
      toCity: '重庆',
      departureDate: addDays(today, 51),
      durationText: '5天4晚',
      price: 4100,
      tags: ['上水航线', '景观房', '爸妈安心'],
      stock: 9,
      bookedCount: 118
    },
    {
      id: 'sanxia-recommend-4',
      tourId: sanxiaMainTour.id,
      title: '【世纪绿洲】三峡豪华游轮重庆宜昌航线',
      subtitle: '新船型公共空间宽敞，适合多人家庭和企业团建。',
      cruiseName: '世纪绿洲',
      cover: '/static/images/mock/sanxia.jpg',
      fromCity: '重庆',
      toCity: '宜昌',
      departureDate: addDays(today, 65),
      durationText: '4天3晚',
      price: 3299,
      tags: ['新船体验', '家庭友好', '团建推荐'],
      stock: 7,
      bookedCount: 77
    }
  ],
  news: [
    {
      id: 'news-1',
      articleId: 'article-1',
      title: '第一次坐三峡游轮，怎么选船和航线',
      cover: '/static/images/mock/sanxia.jpg',
      publishedAt: '2026-05-16 16:53',
      viewCount: 177,
      summary: '整理三峡游轮选船、价格、航线和亲子注意事项。'
    },
    {
      id: 'news-2',
      articleId: 'article-xisha-2',
      title: '限时9折 | 盛夏三峡部分航次预售活动开启',
      cover: '/static/images/xisha/cruise-light.png',
      publishedAt: '2026-04-28 16:25',
      viewCount: 129,
      summary: '部分热门航线开放预售，适合提前锁定家庭房。'
    },
    {
      id: 'news-3',
      articleId: 'article-xisha-3',
      title: '三峡上水/下水有什么区别？',
      cover: '/static/images/xisha/cruise-blue.png',
      publishedAt: '2026-04-09 14:41',
      viewCount: 216,
      summary: '从行程天数、游览节奏、价格和交通四个维度判断。'
    },
    {
      id: 'news-4',
      articleId: 'article-xisha-4',
      title: '五一小长假畅游三峡如何选船？',
      cover: '/static/images/mock/sanxia.jpg',
      publishedAt: '2026-04-02 17:07',
      viewCount: 212,
      summary: '从预算、房型、航线方向和出发日期四个维度判断。'
    }
  ]
}

export function searchMockSanxiaTickets(params: SanxiaTicketSearchParams = {}) {
  const tickets = [...mockSanxiaHomeData.specialTickets, ...mockSanxiaHomeData.recommendedTickets]
  return tickets.filter((item) => {
    const matchesRoute =
      (!params.fromCity || item.fromCity === params.fromCity) &&
      (!params.toCity || item.toCity === params.toCity)
    const matchesCruise = !params.cruiseName || item.cruiseName.includes(params.cruiseName)
    const matchesDate = !params.departureDate || item.departureDate >= params.departureDate
    return matchesRoute && matchesCruise && matchesDate
  })
}

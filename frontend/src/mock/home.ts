import { mockArticles } from './article'
import { mockDestinations } from './destination'
import { mockTourProducts } from './tour'
import type { HomeData } from '@/types/home'

const sanxiaTour = mockTourProducts.find((item) => item.id === 'tour-1001') || mockTourProducts[0]
const xishaTour = mockTourProducts.find((item) => item.id === 'tour-1007') || mockTourProducts[4]
const xishaFamilyTour = mockTourProducts.find((item) => item.id === 'tour-1008') || xishaTour
const sanxiaFamilyTour = mockTourProducts.find((item) => item.id === 'tour-1009') || sanxiaTour
const grasslandTour =
  mockTourProducts.find((item) => item.id === 'tour-1002') || mockTourProducts[1]

export const mockHomeData: HomeData = {
  hero: {
    id: 'hero-1',
    brandName: '山城旅业',
    brandSubName: '目的地旅行服务',
    title: '三峡游轮假期',
    subtitle: '重庆登船，轻松看峡谷、人文古迹与江景夜色',
    location: '重庆',
    searchPlaceholder: '目的地/演出/关键词',
    searchActionText: '搜索',
    highlightTag: '暑期早鸟',
    actionText: '查看航线',
    visualTone: 'cruise',
    image: '',
    linkType: 'tour',
    linkId: 'tour-1001'
  },
  categories: [
    {
      id: 'cat-1',
      title: '重庆游',
      iconText: '渝',
      theme: 'red',
      linkType: 'page',
      linkId: 'chongqing'
    },
    {
      id: 'cat-2',
      title: '西沙游',
      iconText: '沙',
      theme: 'green',
      linkType: 'page',
      linkId: 'xisha'
    },
    {
      id: 'cat-3',
      title: '三峡游',
      iconText: '峡',
      theme: 'blue',
      linkType: 'page',
      linkId: 'sanxia'
    },
    {
      id: 'cat-4',
      title: '旅游专列',
      iconText: '列',
      theme: 'orange',
      linkType: 'page',
      linkId: 'train'
    },
    {
      id: 'cat-5',
      title: '团队定制',
      iconText: '定',
      theme: 'purple',
      linkType: 'page',
      linkId: 'team-custom'
    },
    {
      id: 'cat-6',
      title: '户外游',
      iconText: '峰',
      theme: 'yellow',
      linkType: 'search',
      keyword: '户外徒步'
    },
    {
      id: 'cat-7',
      title: '亲子游',
      iconText: '亲',
      theme: 'yellow',
      linkType: 'search',
      keyword: '亲子游'
    },
    {
      id: 'cat-8',
      title: '摄影游',
      iconText: '拍',
      theme: 'yellow',
      linkType: 'search',
      keyword: '摄影游'
    },
    {
      id: 'cat-9',
      title: '高端度假',
      iconText: '假',
      theme: 'yellow',
      linkType: 'search',
      keyword: '海岛度假'
    },
    {
      id: 'cat-10',
      title: '目的地',
      iconText: '球',
      theme: 'yellow',
      linkType: 'destination',
      linkId: 'dest-1'
    },
    {
      id: 'cat-11',
      title: '宝藏小城',
      iconText: '城',
      theme: 'yellow',
      linkType: 'search',
      keyword: '古镇旅行'
    },
    {
      id: 'cat-12',
      title: '父母安心游',
      iconText: '安',
      theme: 'yellow',
      linkType: 'search',
      keyword: '爸妈安心游'
    },
    {
      id: 'cat-13',
      title: '草原',
      iconText: '草',
      theme: 'yellow',
      linkType: 'search',
      keyword: '草原旅行'
    },
    {
      id: 'cat-14',
      title: '游侠人文',
      iconText: '文',
      theme: 'yellow',
      linkType: 'article',
      linkId: 'article-1'
    },
    {
      id: 'cat-15',
      title: '加入我们',
      iconText: '招',
      theme: 'yellow',
      linkType: 'content',
      linkId: 'topic'
    }
  ],
  quickActions: [
    {
      id: 'quick-1',
      title: '今日未签',
      subtitle: '签到+10天气',
      iconText: '签',
      linkType: 'marketing',
      linkId: 'coupon'
    },
    {
      id: 'quick-2',
      title: '每日抽奖',
      subtitle: '抽实物大奖',
      iconText: '抽',
      linkType: 'marketing',
      linkId: 'activity-1'
    },
    {
      id: 'quick-3',
      title: '侠气兑换',
      subtitle: '攒侠气换好物',
      iconText: '兑',
      linkType: 'marketing',
      linkId: 'coupon'
    }
  ],
  signupNotice: {
    id: 'notice-1',
    noticeType: 'info',
    title: '消息通知',
    content: 'lulu璐呀报名了落日汪舟·趣钓小龙虾，06-06出发',
    actionText: 'GO',
    linkType: 'tour',
    linkId: 'tour-1004'
  },
  featureTiles: [
    {
      id: 'feature-1',
      title: '确定旅行月历',
      cover: '/static/images/home/calendar-tile.png',
      tag: '国内游',
      linkType: 'tour',
      linkId: 'tour-1001'
    },
    {
      id: 'feature-2',
      title: '游侠榜单',
      cover: '/static/images/home/ranking-tile.png',
      tag: '亲子榜Top1',
      linkType: 'tour',
      linkId: 'tour-1002'
    },
    {
      id: 'feature-3',
      title: '萌宠来袭',
      cover: '/static/images/home/pet-tile.png',
      linkType: 'marketing',
      linkId: 'activity-1'
    }
  ],
  mainBanners: [
    {
      id: 'main-banner-1',
      title: '太行山 大行啦',
      subtitle: '中国自然与精神的脊梁之山',
      image: '/static/images/home/taihang-banner.png',
      linkType: 'tour',
      linkId: 'tour-1004'
    },
    {
      id: 'main-banner-2',
      title: '海岛轻度假',
      subtitle: '夏日风与蓝色海岸',
      image: '/static/images/home/island-banner.png',
      linkType: 'tour',
      linkId: 'tour-1005'
    }
  ],
  weeklyActivities: [
    {
      id: 'week-1',
      title: '极道·斗笠沟',
      subtitle: '户外游·登山徒步·1天',
      cover: '/static/images/home/week-rock.png',
      departureTag: '重庆出发',
      price: 118,
      linkType: 'tour',
      linkId: 'tour-1004'
    },
    {
      id: 'week-2',
      title: '轻徒·四面山',
      subtitle: '户外游·登山徒步·1天',
      cover: '/static/images/home/week-waterfall.png',
      departureTag: '重庆市出发',
      price: 128,
      linkType: 'tour',
      linkId: 'tour-1004'
    },
    {
      id: 'week-3',
      title: '季节限定·水杉',
      subtitle: '户外游·水上森林·1天',
      cover: '/static/images/home/week-forest.png',
      departureTag: '重庆市出发',
      price: 68,
      linkType: 'tour',
      linkId: 'tour-1006'
    },
    {
      id: 'week-4',
      title: '宝藏小城 贡井',
      subtitle: '深度游·宝藏小城·1天',
      cover: '/static/images/home/week-town.png',
      departureTag: '重庆市出发',
      price: 138,
      linkType: 'tour',
      linkId: 'tour-1003'
    },
    {
      id: 'week-5',
      title: '海底两万里独立营',
      subtitle: '亲子游·独立营·2天',
      cover: '/static/images/home/week-aquarium.png',
      departureTag: '重庆市出发',
      price: 328,
      linkType: 'tour',
      linkId: 'tour-1002'
    },
    {
      id: 'week-6',
      title: '漆树堂大环线',
      subtitle: '户外游·登山徒步·1天',
      cover: '/static/images/home/week-hill.png',
      departureTag: '重庆市出发',
      price: 128,
      linkType: 'tour',
      linkId: 'tour-1004'
    }
  ],
  discoveryCards: [
    {
      id: 'discover-1',
      title: '武隆九黎城重庆市内五日游',
      subtitle: '山城夜景、武隆地貌与苗寨文化一次覆盖',
      visualTone: 'heritage',
      badge: '优选',
      departureCity: '重庆',
      days: 5,
      nights: 4,
      tags: ['热门', '纯玩', '美食', '特色住宿'],
      actionText: '请电询',
      joinedCount: 96,
      linkType: 'tour',
      linkId: 'tour-1009'
    },
    {
      id: 'discover-2',
      title: '武隆仙女山、天生三桥纯玩一日游',
      subtitle: '核心景区轻户外，适合周末快速出发',
      visualTone: 'karst',
      departureCity: '重庆',
      days: 1,
      nights: 0,
      tags: ['含中餐', '无购物', '自然奇观'],
      actionText: '请电询',
      price: 398,
      joinedCount: 86,
      linkType: 'tour',
      linkId: 'tour-1004'
    },
    {
      id: 'discover-3',
      title: '重庆毕业季市内精华二日游',
      subtitle: '洪崖洞、长江索道、两江夜游经典串联',
      visualTone: 'night',
      badge: '热卖',
      departureCity: '重庆',
      days: 2,
      nights: 1,
      tags: ['热门', '夜景', '小团'],
      actionText: '请电询',
      price: 680,
      joinedCount: 128,
      linkType: 'tour',
      linkId: 'tour-1006'
    },
    {
      id: 'discover-4',
      title: '长江三峡游轮轻奢五日',
      subtitle: '重庆登船，阳台江景房与岸上观光组合',
      visualTone: 'cruise',
      departureCity: '重庆',
      days: 5,
      nights: 4,
      tags: ['游轮', '亲子', '爸妈安心'],
      actionText: '请电询',
      price: 2999,
      joinedCount: 420,
      linkType: 'tour',
      linkId: 'tour-1001'
    }
  ],
  cityTourCards: [
    {
      id: 'city-tour-1',
      title: '【臻爱小团】武隆天生三桥+仙女山一日游',
      subtitle: '专车小团，轻松走核心景区',
      visualTone: 'forest',
      badge: '臻爱',
      departureCity: '重庆',
      days: 1,
      nights: 0,
      metaText: '5-9座商务车主城区商圈接送，纯玩轻松',
      tags: ['2-8人精致小团', '无购物'],
      actionText: '请电询',
      price: 398,
      joinedCount: 86,
      imageStack: ['forest', 'karst', 'night'],
      linkType: 'tour',
      linkId: 'tour-1004'
    },
    {
      id: 'city-tour-2',
      title: 'mini休闲山城重庆三日游',
      subtitle: '城市地标、两江夜景与老街慢逛',
      visualTone: 'night',
      departureCity: '重庆',
      days: 3,
      nights: 2,
      metaText: '4-8人，无购物玩精华，推荐首次来重庆',
      tags: ['赠送重庆1949普通席位', '两江游船'],
      actionText: '请电询',
      price: 1280,
      joinedCount: 126,
      imageStack: ['night', 'river', 'heritage'],
      linkType: 'tour',
      linkId: 'tour-1006'
    },
    {
      id: 'city-tour-3',
      title: '【臻爱小团】武隆仙女山天生三桥芙蓉江二日游',
      subtitle: '山林、峡谷、江景一次打包',
      visualTone: 'karst',
      badge: '臻爱小团',
      departureCity: '重庆',
      days: 2,
      nights: 1,
      metaText: '精品小包团，住宿可升级，适合家庭出游',
      tags: ['独立成团', '可升级酒店'],
      actionText: '请电询',
      price: 980,
      joinedCount: 74,
      imageStack: ['karst', 'forest', 'river'],
      linkType: 'tour',
      linkId: 'tour-1009'
    },
    {
      id: 'city-tour-4',
      title: '2-8人江湖重庆三日游',
      subtitle: '魔幻楼宇、江岸夜景与城市烟火',
      visualTone: 'river',
      departureCity: '重庆',
      days: 3,
      nights: 2,
      metaText: '专业司导服务，轻节奏游览城市经典',
      tags: ['小团接送', '夜景优选'],
      actionText: '请电询',
      price: 1180,
      joinedCount: 102,
      imageStack: ['river', 'night', 'heritage'],
      linkType: 'tour',
      linkId: 'tour-1001'
    }
  ],
  productSections: [
    {
      id: 'section-city-tour',
      title: '重庆游',
      subtitle: '山城小团、武隆自然奇观与两江夜景',
      tone: 'blue',
      moreText: '更多',
      linkType: 'tour',
      linkId: 'tour-1004',
      items: [
        {
          id: 'city-tour-1',
          title: '【臻爱小团】武隆天生三桥+仙女山一日游',
          subtitle: '专车小团，轻松走核心景区',
          visualTone: 'forest',
          badge: '臻爱',
          departureCity: '重庆',
          days: 1,
          nights: 0,
          metaText: '5-9座商务车主城区商圈接送，纯玩轻松',
          tags: ['2-8人精致小团', '无购物'],
          actionText: '请电询',
          price: 398,
          joinedCount: 86,
          imageStack: ['forest', 'karst', 'night'],
          linkType: 'tour',
          linkId: 'tour-1004'
        },
        {
          id: 'city-tour-2',
          title: 'mini休闲山城重庆三日游',
          subtitle: '城市地标、两江夜景与老街慢逛',
          visualTone: 'night',
          departureCity: '重庆',
          days: 3,
          nights: 2,
          metaText: '4-8人，无购物玩精华，推荐首次来重庆',
          tags: ['赠送重庆1949普通席位', '两江游船'],
          actionText: '请电询',
          price: 1280,
          joinedCount: 126,
          imageStack: ['night', 'river', 'heritage'],
          linkType: 'tour',
          linkId: 'tour-1006'
        },
        {
          id: 'city-tour-3',
          title: '【臻爱小团】武隆仙女山天生三桥芙蓉江二日游',
          subtitle: '山林、峡谷、江景一次打包',
          visualTone: 'karst',
          badge: '臻爱小团',
          departureCity: '重庆',
          days: 2,
          nights: 1,
          metaText: '精品小包团，住宿可升级，适合家庭出游',
          tags: ['独立成团', '可升级酒店'],
          actionText: '请电询',
          price: 980,
          joinedCount: 74,
          imageStack: ['karst', 'forest', 'river'],
          linkType: 'tour',
          linkId: 'tour-1009'
        },
        {
          id: 'city-tour-4',
          title: '2-8人江湖重庆三日游',
          subtitle: '魔幻楼宇、江岸夜景与城市烟火',
          visualTone: 'river',
          departureCity: '重庆',
          days: 3,
          nights: 2,
          metaText: '专业司导服务，轻节奏游览城市经典',
          tags: ['小团接送', '夜景优选'],
          actionText: '请电询',
          price: 1180,
          joinedCount: 102,
          imageStack: ['river', 'night', 'heritage'],
          linkType: 'tour',
          linkId: 'tour-1001'
        }
      ]
    },
    {
      id: 'section-xisha-tour',
      title: '西沙游',
      subtitle: '南海邮轮、玻璃海登岛与轻奢假期',
      tone: 'cream',
      moreText: '更多',
      linkType: 'tour',
      linkId: 'tour-1007',
      items: [
        {
          id: 'xisha-tour-1',
          title: '西沙群岛蓝海秘境 5 日',
          subtitle: '登临南海珊瑚岛礁，玻璃海巡游与海岛轻探险',
          visualTone: 'cruise',
          badge: '热销',
          departureCity: '三亚',
          days: 5,
          nights: 4,
          metaText: '南海邮轮登岛，专业管家服务，适合高品质海岛假期',
          tags: ['西沙邮轮', '登岛巡游', '玻璃海'],
          actionText: '立即咨询',
          price: 6980,
          joinedCount: 218,
          imageStack: ['cruise', 'river', 'forest'],
          linkType: 'tour',
          linkId: 'tour-1007'
        },
        {
          id: 'xisha-tour-2',
          title: '西沙亲海探索 5 日',
          subtitle: '海洋课堂、甲板观星、亲子友好的南海度假体验',
          visualTone: 'river',
          departureCity: '三亚',
          days: 5,
          nights: 4,
          metaText: '亲子海洋课堂，甲板观星，轻松体验南海风光',
          tags: ['亲子友好', '甲板观星', '海洋课堂'],
          actionText: '立即咨询',
          price: 6380,
          joinedCount: 136,
          imageStack: ['river', 'cruise', 'forest'],
          linkType: 'tour',
          linkId: 'tour-1008'
        }
      ]
    },
    {
      id: 'section-sanxia-tour',
      title: '三峡游',
      subtitle: '重庆登船，江景阳台房与岸上人文观光',
      tone: 'blue',
      moreText: '更多',
      linkType: 'tour',
      linkId: 'tour-1001',
      items: [
        {
          id: 'sanxia-tour-1',
          title: '长江三峡游轮 5 日深度假期',
          subtitle: '重庆登船，宜昌离船，轻松看峡谷与人文古迹',
          visualTone: 'cruise',
          badge: '早鸟',
          departureCity: '重庆',
          days: 5,
          nights: 4,
          metaText: '五星游轮住宿，白帝城讲解，三峡大坝参观',
          tags: ['阳台江景房', '三峡大坝', '爸妈安心'],
          actionText: '立即咨询',
          price: 2999,
          joinedCount: 420,
          imageStack: ['cruise', 'river', 'heritage'],
          linkType: 'tour',
          linkId: 'tour-1001'
        },
        {
          id: 'sanxia-tour-2',
          title: '三峡游轮暑期亲子 5 日',
          subtitle: '江景阳台房、三峡大坝研学、白帝城人文讲解',
          visualTone: 'river',
          departureCity: '重庆',
          days: 5,
          nights: 4,
          metaText: '亲子研学，船上管家，岸上经典景点组合',
          tags: ['亲子研学', '江景阳台', '暑期可订'],
          actionText: '立即咨询',
          price: 3299,
          joinedCount: 268,
          imageStack: ['river', 'cruise', 'heritage'],
          linkType: 'tour',
          linkId: 'tour-1009'
        }
      ]
    }
  ],
  brandActivities: [
    {
      id: 'brand-1',
      title: '重走梁林路',
      subtitle: '中国古建考察纪行',
      cover: '/static/images/home/brand-lianglin.png',
      large: true,
      linkType: 'content',
      linkId: 'topic'
    },
    {
      id: 'brand-2',
      title: '探索中国',
      subtitle: '寻找100位探险者',
      cover: '/static/images/home/brand-explore.png',
      linkType: 'content',
      linkId: 'topic'
    },
    {
      id: 'brand-3',
      title: 'FUN',
      subtitle: '更年轻更好玩',
      cover: '/static/images/home/brand-fun.png',
      linkType: 'marketing',
      linkId: 'activity-1'
    },
    {
      id: 'brand-4',
      title: '父母安心游',
      subtitle: '送父母一次旅行',
      cover: '/static/images/home/brand-parents.png',
      linkType: 'search',
      keyword: '父母安心游'
    },
    {
      id: 'brand-5',
      title: '宝藏小城',
      subtitle: '体验慢生活',
      cover: '/static/images/home/brand-town.png',
      linkType: 'search',
      keyword: '古镇旅行'
    }
  ],
  tourSections: [
    {
      id: 'section-xisha',
      eyebrow: '海岛精选',
      title: '西沙游',
      subtitle: '南海秘境、玻璃海、登岛巡游，适合高品质海岛假期。',
      cover: '/static/images/mock/island.jpg',
      tone: 'ocean',
      stats: [
        { label: '出发地', value: '三亚' },
        { label: '成团率', value: '96%' },
        { label: '体验', value: '轻奢' }
      ],
      linkType: 'search',
      keyword: '西沙游',
      items: [xishaTour, xishaFamilyTour]
    },
    {
      id: 'section-sanxia',
      eyebrow: '游轮度假',
      title: '三峡游',
      subtitle: '重庆登船，峡谷风光、人文古迹与舒适游轮一次打包。',
      cover: '/static/images/mock/sanxia.jpg',
      tone: 'river',
      stats: [
        { label: '航线', value: '重庆-宜昌' },
        { label: '行程', value: '5天4晚' },
        { label: '适合', value: '全家' }
      ],
      linkType: 'search',
      keyword: '三峡游',
      items: [sanxiaTour, sanxiaFamilyTour]
    },
    {
      id: 'section-grassland',
      eyebrow: '暑期上新',
      title: '草原亲子',
      subtitle: '牧场体验、骑马课堂与自然观察，暑期家庭旅行热门选择。',
      cover: '/static/images/mock/grassland.jpg',
      tone: 'forest',
      stats: [
        { label: '主题', value: '亲子' },
        { label: '季节', value: '暑期' },
        { label: '评分', value: '4.9' }
      ],
      linkType: 'search',
      keyword: '草原旅行',
      items: [grasslandTour]
    }
  ],
  productTabs: ['全球经典', '户外', '亲子', '摄影', '草原', '海岛'],
  productFeed: [
    {
      id: 'feed-1',
      title: '带上汪汪 快乐GO!',
      subtitle: '领取520限定冰箱贴',
      cover: '/static/images/home/feed-puppy.png',
      badge: '520特别活动',
      linkType: 'marketing',
      linkId: 'activity-1'
    },
    {
      id: 'feed-2',
      title: '意大利一邂逅文艺复兴',
      subtitle: '9691人种草',
      cover: '/static/images/home/feed-italy.png',
      actionText: '去旅行',
      seedCount: 9691,
      linkType: 'search',
      keyword: '意大利'
    },
    {
      id: 'feed-3',
      title: '北疆全景12日',
      subtitle: '山湖草原与雪山森林',
      cover: '/static/images/home/feed-xinjiang.png',
      tag: '乌鲁木齐出发',
      price: 5980,
      linkType: 'tour',
      linkId: 'tour-1002'
    },
    {
      id: 'feed-4',
      title: '兰州出发 海岛度假',
      subtitle: '白沙滩与玻璃海',
      cover: '/static/images/home/feed-island.png',
      tag: '兰州出发',
      price: 4280,
      linkType: 'tour',
      linkId: 'tour-1005'
    }
  ],
  banners: [
    {
      id: 'banner-1',
      brandName: '山城旅业',
      brandSubName: '重庆跟团游',
      title: '重庆小团精华游',
      subtitle: '武隆天生三桥、仙女山、两江夜景，高频发团可咨询',
      location: '重庆',
      searchPlaceholder: '目的地/演出/关键词',
      searchActionText: '搜索',
      highlightTag: '小团热卖',
      actionText: '查看线路',
      visualTone: 'karst',
      image: '',
      linkType: 'tour',
      linkId: 'tour-1004'
    },
    {
      id: 'banner-2',
      brandName: '山城旅业',
      brandSubName: '三峡邮轮',
      title: '三峡游轮暑期预售',
      subtitle: '重庆登船，江景阳台房，轻松看峡谷与人文古迹',
      location: '重庆',
      searchPlaceholder: '目的地/演出/关键词',
      searchActionText: '搜索',
      highlightTag: '暑期早鸟',
      actionText: '查看航线',
      visualTone: 'cruise',
      image: '',
      linkType: 'tour',
      linkId: 'tour-1001'
    },
    {
      id: 'banner-3',
      brandName: '山城旅业',
      brandSubName: '西沙邮轮',
      title: '西沙蓝海秘境',
      subtitle: '三亚登船，南海登岛巡游，玻璃海与甲板观星',
      location: '重庆',
      searchPlaceholder: '目的地/演出/关键词',
      searchActionText: '搜索',
      highlightTag: '南海秘境',
      actionText: '了解西沙',
      visualTone: 'river',
      image: '',
      linkType: 'tour',
      linkId: 'tour-1007'
    }
  ],
  themeEntries: [
    '三峡游轮',
    '西沙游',
    '亲子游',
    '国内长线',
    '周边游',
    '摄影游',
    '户外徒步',
    '古镇旅行',
    '海岛度假'
  ],
  hotTours: mockTourProducts.slice(0, 4),
  destinations: mockDestinations,
  articles: mockArticles
}

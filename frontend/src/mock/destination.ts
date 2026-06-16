import type { Destination } from '@/types/destination'

export const mockDestinations: Destination[] = [
  {
    id: 'dest-1',
    name: '三峡',
    subtitle: '峡谷、游轮与长江人文',
    cover: '/static/images/mock/sanxia.jpg',
    images: ['/static/images/mock/sanxia.jpg'],
    region: '华中',
    city: '宜昌',
    tags: ['三峡游轮', '国内长线'],
    bestSeason: ['春季', '秋季'],
    recommendedDays: 5,
    tourCount: 12,
    articleCount: 8,
    popularity: 98,
    description: '适合第一次体验长江游轮的经典目的地。',
    highlights: ['三峡大坝', '白帝城', '巫峡']
  },
  {
    id: 'dest-2',
    name: '呼伦贝尔',
    subtitle: '草原、森林与边境小镇',
    cover: '/static/images/mock/grassland.jpg',
    images: ['/static/images/mock/grassland.jpg'],
    region: '华北',
    city: '海拉尔',
    tags: ['草原旅行', '亲子游'],
    bestSeason: ['夏季'],
    recommendedDays: 6,
    tourCount: 18,
    articleCount: 14,
    popularity: 96,
    description: '夏季亲子和摄影热门目的地。',
    highlights: ['莫日格勒河', '满洲里', '额尔古纳湿地']
  },
  {
    id: 'dest-3',
    name: '徽州',
    subtitle: '古镇、徽派建筑与摄影路线',
    cover: '/static/images/mock/ancient-town.jpg',
    images: ['/static/images/mock/ancient-town.jpg'],
    region: '华东',
    city: '黄山',
    tags: ['古镇旅行', '摄影游'],
    bestSeason: ['春季', '秋季'],
    recommendedDays: 4,
    tourCount: 9,
    articleCount: 16,
    popularity: 88,
    description: '兼具古镇漫游与人文摄影的经典目的地。',
    highlights: ['宏村', '西递', '塔川']
  }
]

export function getMockDestination(id: string) {
  return mockDestinations.find((item) => item.id === id) || mockDestinations[0]
}

export const ROUTES = {
  HOME: '/pages/home/index',
  CHONGQING_HOME: '/pages/chongqing/index',
  SANXIA_HOME: '/pages/sanxia/index',
  TRAIN_HOME: '/pages/train/index',
  TRAIN_SEARCH: '/pages/train/search',
  TEAM_CUSTOM_DETAIL: '/pages/team/detail',
  XISHA_HOME: '/pages/xisha/index',
  CRUISE_COMPARE: '/pages/cruise/compare',
  DESTINATION_LIST: '/pages/destination/list',
  DESTINATION_DETAIL: '/pages/destination/detail',
  TOUR_LIST: '/pages/tour/list',
  TOUR_DETAIL: '/pages/tour/detail',
  TOUR_CALENDAR: '/pages/tour/calendar',
  ARTICLE_LIST: '/pages/article/list',
  ARTICLE_DETAIL: '/pages/article/detail',
  SEARCH_INDEX: '/pages/search/index',
  SEARCH_RESULT: '/pages/search/result',
  USER_CENTER: '/pages/user/center',
  USER_PROFILE: '/pages/user/profile',
  USER_TRAVELERS: '/pages/user/travelers',
  USER_COUPONS: '/pages/user/coupons',
  AUTH_LOGIN: '/pages/auth/login',
  ORDER_CONFIRM: '/pages/order/confirm',
  ORDER_LIST: '/pages/order/list',
  ORDER_DETAIL: '/pages/order/detail',
  PAYMENT_RESULT: '/pages/payment/result',
  MARKETING_ACTIVITY: '/subpackages/marketing/pages/activity',
  MARKETING_COUPON: '/subpackages/marketing/pages/coupon',
  CONTENT_TOPIC: '/subpackages/content/pages/topic',
  CONTENT_NOTE: '/subpackages/content/pages/note'
} as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]

export const TAB_BAR_ROUTES: RoutePath[] = [ROUTES.HOME, ROUTES.ORDER_LIST, ROUTES.USER_CENTER]

export const AUTH_REQUIRED_ROUTES: RoutePath[] = [
  ROUTES.USER_PROFILE,
  ROUTES.USER_TRAVELERS,
  ROUTES.USER_COUPONS,
  ROUTES.ORDER_CONFIRM,
  ROUTES.ORDER_LIST,
  ROUTES.ORDER_DETAIL,
  ROUTES.PAYMENT_RESULT
]

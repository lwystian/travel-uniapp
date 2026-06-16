export const ORDER_STATUS_TEXT = {
  pending_payment: '待付款',
  paid: '已支付',
  confirmed: '已确认',
  pending_reservation: '待预约',
  pending_use: '待使用',
  completed: '已完成',
  cancelled: '已取消',
  refunded: '已退款',
  after_sales: '售后处理中'
} as const

export const TOUR_STATUS_TEXT = {
  available: '可报名',
  sold_out: '已售罄',
  offline: '已下架'
} as const

export const DIFFICULTY_TEXT = {
  easy: '轻松',
  normal: '适中',
  hard: '挑战'
} as const

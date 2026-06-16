import type {
  Order,
  OrderListParams,
  OrderListTab,
  OrderStatus,
  OrderStatusSummary
} from '@/types/order'
import { mockTourProducts } from './tour'
import { mockTravelers } from './user'

const ORDER_TAB_STATUS_MAP: Record<OrderListTab, OrderStatus[]> = {
  all: [],
  pending_payment: ['pending_payment'],
  pending_use: ['paid', 'confirmed', 'pending_use'],
  pending_reservation: ['pending_reservation'],
  completed: ['completed'],
  refund_after_sales: ['refunded', 'after_sales', 'cancelled']
}

const ORDER_TAB_LABEL: Record<OrderListTab, string> = {
  all: '全部',
  pending_payment: '待付款',
  pending_use: '待使用',
  pending_reservation: '待预约',
  completed: '已完成',
  refund_after_sales: '退款/售后'
}

export const mockOrderFixtures: Order[] = [
  {
    id: 'order-1',
    orderNo: 'T202605290001',
    tourId: mockTourProducts[0].id,
    tourTitle: mockTourProducts[0].title,
    cover: mockTourProducts[0].cover,
    scheduleId: 'schedule-1',
    scheduleDate: mockTourProducts[0].nextScheduleDate || '2026-06-05',
    travelers: mockTravelers,
    contactName: '张三',
    contactPhone: '13800000000',
    totalAmount: 5998,
    paidAmount: 0,
    discountAmount: 200,
    status: 'pending_payment',
    costItems: [
      { name: '成人价', amount: 2999, count: 2 },
      { name: '优惠券', amount: -200, count: 1 }
    ],
    createdAt: '2026-05-29 10:00:00',
    remark: '希望安排相邻房间',
    departureCity: '重庆',
    destination: '三峡',
    productType: '游轮度假',
    expireAt: '2026-06-01 23:59:59'
  },
  {
    id: 'order-2',
    orderNo: 'T202605300002',
    tourId: mockTourProducts[6].id,
    tourTitle: mockTourProducts[6].title,
    cover: mockTourProducts[6].cover,
    scheduleId: 'schedule-xisha-1',
    scheduleDate: mockTourProducts[6].nextScheduleDate || '2026-06-11',
    travelers: mockTravelers.slice(0, 1),
    contactName: '李四',
    contactPhone: '13900000000',
    totalAmount: 6980,
    paidAmount: 6980,
    discountAmount: 0,
    status: 'pending_reservation',
    costItems: [{ name: '成人价', amount: 6980, count: 1 }],
    createdAt: '2026-05-30 09:26:00',
    paidAt: '2026-05-30 09:31:00',
    departureCity: '三亚',
    destination: '西沙',
    productType: '海岛度假',
    appointmentDeadline: '2026-06-08 18:00:00',
    remark: '需补充登岛预约资料'
  },
  {
    id: 'order-3',
    orderNo: 'T202605310003',
    tourId: mockTourProducts[1].id,
    tourTitle: mockTourProducts[1].title,
    cover: mockTourProducts[1].cover,
    scheduleId: 'schedule-3',
    scheduleDate: mockTourProducts[1].nextScheduleDate || '2026-06-10',
    travelers: mockTravelers,
    contactName: '王五',
    contactPhone: '13700000000',
    totalAmount: 8560,
    paidAmount: 8560,
    discountAmount: 0,
    status: 'pending_use',
    costItems: [{ name: '成人价', amount: 4280, count: 2 }],
    createdAt: '2026-05-31 14:00:00',
    paidAt: '2026-05-31 14:04:00',
    departureCity: '海拉尔',
    destination: '呼伦贝尔',
    productType: '亲子游',
    useCode: 'YXK8826',
    expireAt: '2026-06-10 08:30:00'
  },
  {
    id: 'order-4',
    orderNo: 'T202605260004',
    tourId: mockTourProducts[3].id,
    tourTitle: mockTourProducts[3].title,
    cover: mockTourProducts[3].cover,
    scheduleId: 'schedule-hiking-1',
    scheduleDate: '2026-05-29',
    travelers: mockTravelers.slice(0, 1),
    contactName: '赵六',
    contactPhone: '13600000000',
    totalAmount: 980,
    paidAmount: 980,
    discountAmount: 0,
    status: 'completed',
    costItems: [{ name: '成人价', amount: 980, count: 1 }],
    createdAt: '2026-05-26 20:00:00',
    paidAt: '2026-05-26 20:06:00',
    departureCity: '长沙',
    destination: '武功山',
    productType: '户外徒步'
  },
  {
    id: 'order-5',
    orderNo: 'T202605240005',
    tourId: mockTourProducts[2].id,
    tourTitle: mockTourProducts[2].title,
    cover: mockTourProducts[2].cover,
    scheduleId: 'schedule-town-1',
    scheduleDate: '2026-06-06',
    travelers: mockTravelers.slice(0, 1),
    contactName: '钱七',
    contactPhone: '13500000000',
    totalAmount: 1680,
    paidAmount: 1680,
    discountAmount: 80,
    status: 'after_sales',
    costItems: [
      { name: '成人价', amount: 1680, count: 1 },
      { name: '优惠券', amount: -80, count: 1 }
    ],
    createdAt: '2026-05-24 11:20:00',
    paidAt: '2026-05-24 11:23:00',
    departureCity: '杭州',
    destination: '徽州',
    productType: '摄影游',
    refundReason: '行程日期冲突',
    afterSalesStatus: '平台审核中'
  },
  {
    id: 'order-6',
    orderNo: 'T202605210006',
    tourId: mockTourProducts[4].id,
    tourTitle: mockTourProducts[4].title,
    cover: mockTourProducts[4].cover,
    scheduleId: 'schedule-island-1',
    scheduleDate: '2026-06-08',
    travelers: mockTravelers.slice(0, 1),
    contactName: '孙八',
    contactPhone: '13400000000',
    totalAmount: 2180,
    paidAmount: 2180,
    discountAmount: 0,
    status: 'refunded',
    costItems: [{ name: '成人价', amount: 2180, count: 1 }],
    createdAt: '2026-05-21 18:10:00',
    paidAt: '2026-05-21 18:13:00',
    departureCity: '福州',
    destination: '平潭',
    productType: '海岛度假',
    refundReason: '已按规则退款',
    afterSalesStatus: '退款完成'
  }
]

export const mockOrders: Order[] = []

export function getMockOrder(id: string) {
  return mockOrderFixtures.find((item) => item.id === id) || mockOrderFixtures[0]
}

export function getOrderTabStatuses(tab: OrderListTab = 'all') {
  return ORDER_TAB_STATUS_MAP[tab] || []
}

export function getMockOrderList(params: OrderListParams = {}) {
  const page = params.page || 1
  const pageSize = params.pageSize || 10
  const keyword = params.keyword?.trim()
  const tabStatuses = params.statuses?.length ? params.statuses : getOrderTabStatuses(params.tab)

  const filtered = mockOrders.filter((order) => {
    const hitStatus = tabStatuses.length ? tabStatuses.includes(order.status) : true
    const hitKeyword = keyword
      ? [
          order.orderNo,
          order.tourTitle,
          order.destination,
          order.departureCity,
          order.productType,
          order.contactName,
          order.contactPhone
        ].some((text) => text?.includes(keyword))
      : true
    return hitStatus && hitKeyword
  })

  const start = (page - 1) * pageSize

  return {
    list: filtered.slice(start, start + pageSize),
    page,
    pageSize,
    total: filtered.length,
    hasMore: start + pageSize < filtered.length
  }
}

export function getMockOrderStatusSummary(): OrderStatusSummary[] {
  return (Object.keys(ORDER_TAB_LABEL) as OrderListTab[]).map((tab) => {
    const statuses = getOrderTabStatuses(tab)
    const count =
      tab === 'all'
        ? mockOrders.length
        : mockOrders.filter((item) => statuses.includes(item.status)).length
    return {
      tab,
      label: ORDER_TAB_LABEL[tab],
      count
    }
  })
}

import type { PriceUnit } from '@/types/tour'

const PRICE_UNIT_TEXT: Record<PriceUnit, string> = {
  person: '人',
  room: '间',
  group: '团'
}

export function formatPrice(
  price?: number,
  options?: { prefix?: string; digits?: number }
): string {
  if (price === undefined || price === null) return '--'
  const prefix = options?.prefix ?? '¥'
  const digits = options?.digits ?? 0
  return `${prefix}${Number(price).toFixed(digits)}`
}

export function formatPriceUnit(unit: PriceUnit): string {
  return PRICE_UNIT_TEXT[unit]
}

export function calcDiscount(originalPrice?: number, price?: number): string {
  if (!originalPrice || !price || price >= originalPrice) return ''
  return `${Math.round((price / originalPrice) * 10)}折`
}

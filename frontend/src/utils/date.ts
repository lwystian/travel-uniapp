export function formatDate(date: string | Date, separator = '-'): string {
  const value = typeof date === 'string' ? new Date(date.replace(/-/g, '/')) : date
  const year = value.getFullYear()
  const month = `${value.getMonth() + 1}`.padStart(2, '0')
  const day = `${value.getDate()}`.padStart(2, '0')
  return [year, month, day].join(separator)
}

export function formatMonthDay(date: string | Date): string {
  const value = typeof date === 'string' ? new Date(date.replace(/-/g, '/')) : date
  return `${value.getMonth() + 1}月${value.getDate()}日`
}

export function formatZeroMonthDay(date: string | Date): string {
  const value = typeof date === 'string' ? new Date(date.replace(/-/g, '/')) : date
  const month = `${value.getMonth() + 1}`.padStart(2, '0')
  const day = `${value.getDate()}`.padStart(2, '0')
  return `${month}月${day}日`
}

export function formatWeekday(date: string | Date): string {
  const value = typeof date === 'string' ? new Date(date.replace(/-/g, '/')) : date
  const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  return weekdays[value.getDay()]
}

export function addDays(date: string | Date, days: number): string {
  const value = typeof date === 'string' ? new Date(date.replace(/-/g, '/')) : new Date(date)
  value.setDate(value.getDate() + days)
  return formatDate(value)
}

export function isBeforeToday(date: string): boolean {
  const today = formatDate(new Date())
  return date < today
}

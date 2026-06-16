export function formatNumber(value: number | string, digits = 0): string {
  const num = Number(value)
  if (Number.isNaN(num)) return '0'
  return num.toFixed(digits)
}

export function formatSales(count: number): string {
  if (count >= 10000) return `${(count / 10000).toFixed(1)}万`
  return String(count)
}

export function maskPhone(phone?: string): string {
  if (!phone) return ''
  return phone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
}

export function truncate(text: string, max = 30): string {
  return text.length > max ? `${text.slice(0, max)}...` : text
}

export function isPhone(value: string): boolean {
  return /^1[3-9]\d{9}$/.test(value)
}

export function isIdCard(value: string): boolean {
  return /(^\d{15}$)|(^\d{17}[\dXx]$)/.test(value)
}

export function isNonEmpty(value?: string): boolean {
  return Boolean(value && value.trim())
}

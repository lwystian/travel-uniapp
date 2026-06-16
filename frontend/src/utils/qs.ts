export type QueryValue = string | number | boolean | undefined | null | Array<string | number>
export type QueryParams = Record<string, QueryValue>

export function stringifyQuery(query?: QueryParams): string {
  if (!query) return ''

  const parts: string[] = []

  Object.keys(query).forEach((key) => {
    const value = query[key]
    if (value === undefined || value === null || value === '') return

    if (Array.isArray(value)) {
      value.forEach((item) => {
        parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(item))}`)
      })
      return
    }

    parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
  })

  return parts.length ? `?${parts.join('&')}` : ''
}

export function parseQuery<T extends QueryParams = QueryParams>(query?: Record<string, string>): T {
  return (query || {}) as T
}

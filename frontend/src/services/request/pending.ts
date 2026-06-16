const pendingMap = new Map<string, number>()

export function getPendingKey(method: string, url: string, data?: unknown) {
  return `${method}:${url}:${JSON.stringify(data || {})}`
}

export function addPending(key: string) {
  pendingMap.set(key, Date.now())
}

export function removePending(key: string) {
  pendingMap.delete(key)
}

export function hasPending(key: string) {
  return pendingMap.has(key)
}

export function clearPending() {
  pendingMap.clear()
}

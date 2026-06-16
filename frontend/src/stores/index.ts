import { createPinia } from 'pinia'

export const pinia = createPinia()

export * from './modules/app'
export * from './modules/auth'
export * from './modules/favorite'
export * from './modules/order'
export * from './modules/search'
export * from './modules/user'

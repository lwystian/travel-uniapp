declare module 'uview-plus'

declare const wx: {
  openCustomerServiceChat?: (options: {
    extInfo: { url: string }
    corpId: string
    success?: () => void
    fail?: (error: unknown) => void
  }) => void
}

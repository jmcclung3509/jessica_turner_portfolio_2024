import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/jessicaturner/Desktop/jessica_turner_portfolio_2024/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}
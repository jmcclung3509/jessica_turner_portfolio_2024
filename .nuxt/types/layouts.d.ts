import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "nonav" | "project"
declare module "/Users/jessicaturner/Desktop/jessica_turner_portfolio_2024/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}
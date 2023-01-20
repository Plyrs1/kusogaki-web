import { type Writable, writable } from 'svelte/store'
interface PageData {
  description?: string
  image?: string
  title?: string
  name?: string
  color?: string
}

export const isScrolled: Writable<boolean> = writable(false)
export const site: Writable<PageData> = writable({})
export const scrollOffset: Writable<number> = writable(0)

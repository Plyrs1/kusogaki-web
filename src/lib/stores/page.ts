import { type Writable, writable } from 'svelte/store'
interface PageData {
  description?: string
  image?: string
  title?: string
  name?: string
  color?: string
}

const isScrolled: Writable<boolean> = writable(false)
const site: Writable<PageData> = writable({})
const scrollOffset: Writable<number> = writable(0)

export { isScrolled, scrollOffset, site }

import { type Writable, writable } from 'svelte/store'

export const isScrolled: Writable<boolean> = writable(false)

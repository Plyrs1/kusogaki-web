// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    interface PageData {
      description?: string
      image?: string
      title?: string
      siteName?: string
      color?: string
    }
    // interface Platform {}
  }
}

export {}

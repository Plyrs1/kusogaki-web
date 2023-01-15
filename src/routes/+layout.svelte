<script lang="ts">
  import '$lib/main.css'

  import Footer from '$lib/components/Footer.svelte'
  import Navbar from '$lib/components/Navbar.svelte'
  import { isScrolled } from '$lib/stores/page'

  function scrollDetect(el: Event): void {
    $isScrolled = (el.target as HTMLDivElement).scrollTop > 100
  }
</script>

<main class="text-center p-0 mx-0 w-screen h-screen bg-cover bg-center">
  <Navbar />
  <div class="fixed top-0 left-0 right-0 bottom-0 mx-auto overflow-y-auto max-h-screen" on:scroll={scrollDetect}>
    <div class="w-full h-1/6" />
    <slot />
    <div class="w-full h-1/6" />
  </div>

  <Footer />
</main>

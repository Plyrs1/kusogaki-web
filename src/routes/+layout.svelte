<script lang="ts">
  import '$lib/main.css'

  import Footer from '$lib/components/Footer.svelte'
  import Navbar from '$lib/components/Navbar.svelte'
  import { isScrolled } from '$lib/stores/page'
  import { page } from '$app/stores'
  import AnnounceBar from '$src/lib/components/AnnounceBar.svelte'
  function scrollDetect(el: Event): void {
    $isScrolled = (el.target as HTMLDivElement).scrollTop > 100
  }
  function onClickScroll(el: HTMLElement): void {
    el.scrollIntoView({
      behavior: 'smooth'
    })
  }
  let scrollTop: HTMLElement
</script>

<main class="text-center p-0 mx-0 w-screen h-screen {$page.route.id === '/' ? 'bg-transparent' : 'bg-black/50'} transition-colors duration-1000">
  <Navbar />
  <div class="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto" on:scroll={scrollDetect}>
    <div class="w-full h-1/6" bind:this={scrollTop} />
    <slot />
    <div class="w-full h-1/6" />
  </div>
  <div class="fixed right-0 bottom-1/4 z-30 {$isScrolled ? '' : 'translate-x-full'} duration-500">
    <button on:click={() => onClickScroll(scrollTop)}>
      <AnnounceBar>
        <svg class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          /></svg
        >
      </AnnounceBar>
    </button>
  </div>

  <Footer />
</main>

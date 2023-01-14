<script lang="ts">
  import '$lib/main.css'

  import { base } from '$app/paths'
  import Footer from '$lib/components/Footer.svelte'
  import Navbar from '$lib/components/Navbar.svelte'
</script>

<svelte:head>
  <link rel="icon" href="{base}/favicon.ico" />
</svelte:head>
<main class="text-center p-0 mx-0 w-screen h-screen bg-cover bg-center">
  <Navbar />
  <div class="fixed left-0 right-0 top-0 bottom-0">
    <div class="w-full h-32" />
    <slot />
  </div>

  <Footer />
</main>

<style lang="postcss">
  main {
    background-image: repeating-linear-gradient(-30deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 1px, transparent -19px, transparent 4px),
      url('$assets/Roxy.jpg');
  }
</style>

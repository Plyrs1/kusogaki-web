<script lang="ts">
  import '$lib/main.css'

  import { page } from '$app/stores'
  import Footer from '$lib/components/Footer.svelte'
  import Navbar from '$lib/components/Navbar.svelte'
  import { isScrolled } from '$lib/stores/page'
  function scrollDetect(el: Event): void {
    $isScrolled = (el.target as HTMLDivElement).scrollTop > 100
  }
</script>

<svelte:head>
  {#if !!$page.data.siteName}
    {#if !!$page.data.title}
      <title>{$page.data.siteName} - {$page.data.title}</title>
      <meta name="twitter:title" content="{$page.data.siteName} - {$page.data.title}" />
      <meta property="og:title" content="{$page.data.siteName} - {$page.data.title}" />
    {/if}
    <meta property="og:site_name" content={$page.data.siteName} />
  {/if}
  {#if !!$page.data.description}
    <meta name="description" content={$page.data.description} />
    <meta name="twitter:description" content={$page.data.description} />
    <meta property="og:description" content={$page.data.description} />
  {/if}
  {#if !!$page.data.image}
    <meta name="twitter:image" content={$page.data.image} />
    <meta property="og:image" content={$page.data.image} />
  {/if}
  {#if !!$page.data.color}
    <meta name="theme-color" content={$page.data.color} />
  {/if}
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
</svelte:head>
<main class="text-center p-0 mx-0 w-screen h-screen bg-cover bg-center">
  <Navbar />
  <div class="fixed top-0 left-0 right-0 bottom-0 mx-auto overflow-y-auto max-h-screen" on:scroll={scrollDetect}>
    <div class="w-full h-1/6" />
    <slot />
    <div class="w-full h-1/6" />
  </div>

  <Footer />
</main>

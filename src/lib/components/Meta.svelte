<script lang="ts">
  import { assets } from '$app/paths'
  export let name = 'Kusogaki'
  export let title = 'Home'
  export let description = 'Mind writing some?'
  export let image = `${assets}/assets/img/embed.jpg`
  export let color = '#6167c5'
</script>

<svelte:head>
  {#if !!name}
    {#if !!title}
      <title>{name} - {title}</title>
      <meta name="twitter:title" content="{name} - {title}" />
      <meta property="og:title" content="{name} - {title}" />
    {/if}
    <meta property="og:site_name" content={name} />
  {/if}
  {#if !!description}
    <meta name="description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:description" content={description} />
  {/if}
  {#if !!image}
    <meta name="twitter:image" content={image} />
    <meta property="og:image" content={image} />
  {/if}
  {#if !!color}
    <meta name="theme-color" content={color} />
  {/if}
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
</svelte:head>

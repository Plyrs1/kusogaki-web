<script lang="ts">
  import Meta from '$lib/components/Meta.svelte'

  import type { PageData } from './$types'

  export let data: PageData
</script>

<Meta title="Event" description="Woah, such event, much wow!" />
<div class="grid w-full place-items-center">
  <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 px-6">
    {#each data.eventData as eventData}
      <div class="hover:scale-110 hover:rotate-6 duration-300 w-full h-fit">
        <a href={eventData.href} target="_blank" rel="noreferrer"><img src={eventData.img} alt="event banner" loading="lazy" /></a>
      </div>
    {/each}
  </div>
</div>

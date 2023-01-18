<script lang="ts">
  import ImageLoad from '$lib/components/ImageLoad.svelte'
  import Meta from '$lib/components/Meta.svelte'

  import type { PageData } from './$types'

  export let data: PageData
</script>

<Meta title="Event" description="Woah, such event, much wow!" />
<div class="grid w-full place-items-center">
  <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-6">
    {#each data.eventData as eventData}
      <div class="hover:scale-110 hover:rotate-6 hover:z-10 duration-300 w-full aspect-[3/1]">
        <a href={eventData.href} target="_blank" rel="noreferrer"><ImageLoad src={eventData.img} alt="event banner" className="z-0" /></a>
      </div>
    {/each}
  </div>
</div>

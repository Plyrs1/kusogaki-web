<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

<div class="grid w-full place-items-center">
  <div class="container grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1 px-6">
    {#each data.eventData as eventData}
      <div class="hover:scale-110 hover:rotate-6 duration-300">
        <a href={eventData.href}><img src={eventData.img} alt="event banner" /></a>
      </div>
    {/each}
  </div>
</div>

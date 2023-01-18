<script lang="ts">
  import Accordion from '$lib/components/Accordion.svelte'

  import type { PageData } from './$types'
  export let data: PageData
</script>

<div class="grid w-full place-items-center">
  <div class="container flex flex-col w-full place-items-center gap-4">
    {#each data.faqLists as faqList}
      <Accordion question={faqList.question} answer={faqList.answer} />
    {/each}
  </div>
</div>

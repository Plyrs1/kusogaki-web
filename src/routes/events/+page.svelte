<script lang="ts">
  import { onDestroy, onMount } from 'svelte'

  import ImageLoad from '$lib/components/ImageLoad.svelte'
  import Meta from '$lib/components/Meta.svelte'
  import { scrollOffset } from '$lib/stores/page'

  import type { EventData } from './events'
  let allData: Array<EventData> = []
  let currentPage = 1
  let hasMore = true
  let isLoadingData = false
  let newData: Array<EventData> = []
  $: allData = [...allData, ...newData]
  async function fetchData() {
    if (isLoadingData) return
    try {
      isLoadingData = true
      const response = await fetch(`https://kusogaki-backend.plyrs.party/api/collections/events/records?sort=-startDate&page=${currentPage}`)
      const data = await response.json()
      newData = data.items.map((item: EventData) => {
        const isCatbox = item.img.indexOf('files.catbox.moe')
        if (isCatbox >= 0) {
          item.img = item.img.substring(0, isCatbox) + 'catbox.plyrs.party/' + item.img.substring(isCatbox)
        }
        return item
      })
      hasMore = data.totalPages > currentPage
      currentPage++
    } catch (error) {
      console.error(error)
      newData = []
    } finally {
      isLoadingData = false
    }
  }

  const unsubscribeScroll = scrollOffset.subscribe(async (offset: number) => {
    if (offset < 100 && hasMore) await fetchData()
  })

  onMount(fetchData)
  onDestroy(unsubscribeScroll)
</script>

<Meta title="Event" description="Woah, such event, much wow!" />
<div class="grid w-full place-items-center">
  <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-6">
    {#each allData as eventData}
      <div class="hover:scale-110 hover:rotate-6 hover:z-10 duration-300 w-full aspect-[3/1]">
        <a href={eventData.url} target="_blank" rel="noreferrer"><ImageLoad src={eventData.img || ''} alt="event banner" className="z-0" /></a>
      </div>
    {/each}
    {#if allData.length === 0}
      {#each Array(30) as _}
        <div class="w-full aspect-[3/1]">
          <a href="/#" target="_blank" rel="noreferrer"><ImageLoad src="" alt="event banner" className="z-0" /></a>
        </div>
      {/each}
    {/if}
  </div>
</div>

<script lang="ts">
  import { onDestroy } from 'svelte'

  import ImageLoad from '$lib/components/ImageLoad.svelte'
  import Meta from '$lib/components/Meta.svelte'
  import { scrollOffset } from '$lib/stores/page'
  import Badge from '$src/lib/components/Badge.svelte'

  import type { BadgeData, BadgeItemApiData } from './badges'
  let allData: Array<BadgeData> = []
  let currentPage = 1
  let hasMore = true
  let isLoadingData = false
  let newData: Array<BadgeItemApiData> = []
  let badgeData: Array<BadgeData> = []
  $: allData = [...allData, ...badgeData]
  $: badgeData = newData.map((item) => {
    let author = item.creator || 'Kusogaki'
    let url = `https://anilist.co/user/${item.creatorAnilistId || 'Kusogaki'}`
    if (item.expand.user) {
      author = item.expand.user.name
      url = `https://anilist.co/user/${item.expand.user.anilistId}`
    }
    let accent = item.type === 'Official' ? 'green' : item.type === 'Unofficial' ? 'red' : ''
    return {
      author,
      url,
      src: item.img || '',
      eventName: item.expand.event.title || '',
      eventUrl: item.expand.event.url || '/#',
      accent
    } satisfies BadgeData
  })
  async function fetchData() {
    if (isLoadingData) return
    try {
      isLoadingData = true
      const response = await fetch(
        `https://kusogaki-backend.plyrs.party/api/collections/badges/records?expand=event,user&sort=-event.startDate,-created&perPage=24&page=${currentPage}`
      )
      const data = await response.json()
      newData = data.items.map((item: BadgeItemApiData) => {
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
    if (isLoadingData) return
    if (offset < 100 && hasMore) await fetchData()
  })

  // onMount(fetchData)
  onDestroy(unsubscribeScroll)
</script>

<Meta title="Badges" description="Moar badges plezz!!!" />
<div class="grid w-full place-items-center font-lemon-milk">
  <div class="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 px-6">
    {#each allData as badge}
      <Badge {...badge} />
    {/each}
    {#if allData.length === 0 || isLoadingData}
      {#each Array(24) as _}
        <div class="rounded-md">
          <div class="grid overflow-hidden w-full aspect-[3/4] rounded-md">
            <ImageLoad className="rounded-lg mb-3" src={''} alt="" />
          </div>
        </div>
      {/each}
    {/if}
  </div>
</div>

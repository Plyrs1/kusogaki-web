<script lang="ts">
  import { assets } from '$app/paths'
  import ImageLoad from '$lib/components/ImageLoad.svelte'
  import Meta from '$src/lib/components/Meta.svelte'

  import type { PageData } from './$types'

  export let data: PageData
</script>

<Meta title="Team Member" description="Say hello to our team members!" image="{assets}/assets/img/embed1.jpg" />
<div class="grid w-full place-items-center">
  <div class="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-6">
    {#each data.teamData as team}
      <div class=" bg-kusogaki-purple rounded-md font-lemon-milk">
        <div class="grid overflow-hidden w-full aspect-square rounded-t-md">
          <a href={team.profileUrl} target="_blank" rel="noreferrer">
            <ImageLoad className="hover:scale-110 hover:rotate-6 duration-300" src={team.pic} alt="" />
          </a>
        </div>
        <div class="m-2">
          <a href={team.profileUrl} target="_blank" rel="noreferrer">
            <h5 class="text-sm sm:text-lg font-bold text-white my-2">{team.name}</h5>
          </a>
          <div class="flex flex-wrap gap-1 w-full">
            {#each team.badges as badge}
              <span class="{data.badgeLists[badge].color} text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded">{data.badgeLists[badge].name}</span
              >
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

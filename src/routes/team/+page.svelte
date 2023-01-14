<script lang="ts">
  interface TeamBadge {
    name: string
    color: string
  }
  const badgeLists: Array<TeamBadge> = [
    { name: 'null', color: 'bg-black' },

    { name: 'Admin', color: 'bg-red-600' },
    { name: 'Planning', color: 'bg-lime-600' },
    { name: 'Design', color: 'bg-purple-600' },
    { name: 'Developer', color: 'bg-orange-600' },
    { name: 'New Recruit', color: 'bg-cyan-600' },
    { name: 'Retired', color: 'bg-slate-600' }
  ]
  interface TeamData {
    name: string
    pic: string
    badges: Array<number>
  }
  const teamData: Array<TeamData> = [
    {
      name: 'Trapper Hell',
      pic: 'https://discordav.deno.dev/182418579340132353',
      badges: [1, 2, 3, 4]
    },
    {
      name: 'Plyrs',
      pic: 'https://discordav.deno.dev/210098396113928192',
      badges: [4, 5]
    },
    {
      name: 'Yami',
      pic: 'https://discordav.deno.dev/240920101774163968',
      badges: [3, 6]
    },
    {
      name: 'Astral Trinity',
      pic: 'https://discordav.deno.dev/993887268458737694',
      badges: [2, 3]
    },
    {
      name: '.yuu',
      pic: 'https://discordav.deno.dev/200325563812937728',
      badges: [3]
    },
    {
      name: 'Darksmurf',
      pic: 'https://discordav.deno.dev/560635143262437396',
      badges: [3]
    },
    {
      name: 'Luply',
      pic: 'https://discordav.deno.dev/322380817122721792',
      badges: [3]
    },
    {
      name: 'eonch',
      pic: 'https://discordav.deno.dev/310194324681785345',
      badges: [3]
    },
    {
      name: 'Tree',
      pic: 'https://discordav.deno.dev/202026953065103360',
      badges: [1, 3]
    },
    {
      name: 'Gaige',
      pic: 'https://discordav.deno.dev/479664238206517291',
      badges: [1, 2, 6]
    },
    {
      name: 'Shasaki',
      pic: 'https://discordav.deno.dev/386871628170264588',
      badges: [3]
    },
    {
      name: 'Shinya',
      pic: 'https://discordav.deno.dev/808252491601936384',
      badges: [2]
    },
    {
      name: 'Awaiz',
      pic: 'https://discordav.deno.dev/434096457927360513',
      badges: [1, 2, 3]
    },
    {
      name: 'Verose',
      pic: 'https://discordav.deno.dev/653622865949884426',
      badges: [3]
    },

    {
      name: 'Anzu',
      pic: 'https://discordav.deno.dev/281549670352814080',
      badges: [6]
    },
    {
      name: 'Naizuri',
      pic: 'https://discordav.deno.dev/653622865949884426',
      badges: [6]
    },
    {
      name: 'Rythym',
      pic: 'https://discordav.deno.dev/653622865949884426',
      badges: [6]
    },
    {
      name: 'Stefankun',
      pic: 'https://discordav.deno.dev/653622865949884426',
      badges: [6]
    },
    {
      name: 'Tastylemonss',
      pic: 'https://discordav.deno.dev/653622865949884426',
      badges: [6]
    },
    {
      name: 'Tidal',
      pic: 'https://discordav.deno.dev/176061994238083074',
      badges: [6]
    }
  ]
</script>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 px-6">
  {#each teamData as team}
    <div class=" bg-kusogaki-purple rounded-md">
      <a href="/#">
        <img class="rounded-t-md w-full" src={team.pic} alt="" />
      </a>
      <div class="m-2">
        <a href="/#">
          <h5 class="text-sm sm:text-lg font-bold text-white my-2">{team.name}</h5>
        </a>
        <!-- <div class="grid grid-cols-2 auto-cols-max gap-1 w-full"> -->
        <div class="flex flex-wrap gap-1 w-full">
          {#each team.badges as badge}
            <span class="{badgeLists[badge].color} text-white text-xs font-medium px-2.5 py-0.5 rounded">{badgeLists[badge].name}</span>
          {/each}
        </div>
      </div>
    </div>
  {/each}
</div>

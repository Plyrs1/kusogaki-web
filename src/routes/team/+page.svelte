<script lang="ts">
  import { assets } from '$app/paths'
  import Meta from '$src/lib/components/Meta.svelte'
  interface TeamBadge {
    name: string
    color: string
  }
  const badgeLists: Array<TeamBadge> = [
    { name: 'null', color: 'bg-black' },
    { name: 'Admin', color: 'bg-kusogaki-red' },
    { name: 'Planning', color: 'bg-kusogaki-green' },
    { name: 'Design', color: 'bg-kusogaki-blue' },
    { name: 'Developer', color: 'bg-kusogaki-yellow' },
    { name: 'New Recruit', color: 'bg-kusogaki-cyan' },
    { name: 'Retired', color: 'bg-gray-400' }
  ]
  interface TeamData {
    name: string
    pic: string
    profileUrl: string
    badges: Array<number>
  }
  const teamData: Array<TeamData> = [
    {
      name: 'AstralTrinity7',
      pic: 'https://discordav.deno.dev/993887268458737694',
      profileUrl: 'https://anilist.co/user/AstralTrinity7/',
      badges: [2, 3]
    },
    {
      name: 'Awaiz',
      pic: 'https://discordav.deno.dev/434096457927360513',
      profileUrl: 'https://anilist.co/user/Awaiz/',
      badges: [1, 2, 3]
    },
    {
      name: 'Tree',
      pic: 'https://discordav.deno.dev/202026953065103360',
      profileUrl: 'https://anilist.co/user/Tree/',
      badges: [1, 3]
    },
    {
      name: 'Darksmurf',
      pic: 'https://discordav.deno.dev/560635143262437396',
      profileUrl: 'https://anilist.co/user/Darksmurf/',
      badges: [3]
    },
    {
      name: 'Eonch',
      pic: 'https://discordav.deno.dev/310194324681785345',
      profileUrl: 'https://anilist.co/user/Eonch',
      badges: [3]
    },
    {
      name: 'Luply',
      pic: 'https://discordav.deno.dev/322380817122721792',
      profileUrl: 'https://anilist.co/user/Luply/',
      badges: [3]
    },
    {
      name: 'PantsuGod',
      pic: 'https://discordav.deno.dev/322380817122721792',
      profileUrl: 'https://anilist.co/user/PantsuGod/',
      badges: [3]
    },
    {
      name: 'ShasakiRitsu',
      pic: 'https://discordav.deno.dev/386871628170264588',
      profileUrl: 'https://anilist.co/user/ShasakiRitsu/',
      badges: [3]
    },
    {
      name: 'shinyakamihara',
      pic: 'https://discordav.deno.dev/808252491601936384',
      profileUrl: 'https://anilist.co/user/shinyakamihara/',
      badges: [2]
    },
    {
      name: 'TrapperHell',
      pic: 'https://discordav.deno.dev/182418579340132353',
      profileUrl: 'https://anilist.co/user/TrapperHell/',
      badges: [1, 2, 3, 4]
    },
    {
      name: 'Verose',
      pic: 'https://discordav.deno.dev/653622865949884426',
      profileUrl: 'https://anilist.co/user/Verose/',
      badges: [3]
    },
    {
      name: 'yami',
      pic: 'https://discordav.deno.dev/240920101774163968',
      profileUrl: 'https://anilist.co/user/yami/',
      badges: [3]
    },
    {
      name: 'Plyrs',
      pic: 'https://discordav.deno.dev/210098396113928192',
      profileUrl: 'https://anilist.co/user/Plyrs/',
      badges: [4, 5]
    },

    {
      name: 'Anzu',
      pic: 'https://discordav.deno.dev/281549670352814080',
      profileUrl: 'https://anilist.co/user/Anzu/',
      badges: [6]
    },
    {
      name: 'imr1zen',
      pic: `${assets}/assets/img/profile.jpg`,
      profileUrl: 'https://anilist.co/user/imr1zen/',
      badges: [6]
    },
    {
      name: 'Gaige',
      pic: 'https://discordav.deno.dev/479664238206517291',
      profileUrl: 'https://anilist.co/user/Gaige/',
      badges: [1, 2, 6]
    },
    {
      name: 'Naizuri',
      pic: `${assets}/assets/img/profile.jpg`,
      profileUrl: 'https://anilist.co/user/Naizuri',
      badges: [6]
    },
    {
      name: 'Rythym',
      pic: `${assets}/assets/img/profile.jpg`,
      profileUrl: 'https://anilist.co/user/Rythym/',
      badges: [6]
    },
    {
      name: 'Stefankun',
      pic: 'https://discordav.deno.dev/727901376319062067',
      profileUrl: 'https://anilist.co/user/StefanKun/',
      badges: [6]
    },
    {
      name: 'TastyLemonss',
      pic: `${assets}/assets/img/profile.jpg`,
      profileUrl: 'https://anilist.co/user/TastyLemonss/',
      badges: [6]
    },
    {
      name: 'Tidal',
      pic: 'https://discordav.deno.dev/176061994238083074',
      profileUrl: 'https://anilist.co/user/Tidal/',
      badges: [6]
    }
  ]
</script>

<Meta title="Team Member" description="Say hello to our team members!" image="{assets}/assets/img/embed1.jpg" />
<div class="grid w-full place-items-center">
  <div class="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-6">
    {#each teamData as team}
      <div class=" bg-kusogaki-purple rounded-md font-lemon-milk">
        <div class="overflow-hidden w-full h-min">
          <a href={team.profileUrl} target="_blank" rel="noreferrer">
            <img class="rounded-t-md w-full hover:scale-110 hover:rotate-6 duration-300" src={team.pic} alt="" />
          </a>
        </div>
        <div class="m-2">
          <a href={team.profileUrl} target="_blank" rel="noreferrer">
            <h5 class="text-sm sm:text-lg font-bold text-white my-2">{team.name}</h5>
          </a>
          <div class="flex flex-wrap gap-1 w-full">
            {#each team.badges as badge}
              <span class="{badgeLists[badge].color} text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded">{badgeLists[badge].name}</span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

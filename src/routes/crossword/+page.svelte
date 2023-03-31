<script lang="ts">
  import { type Writable, writable } from 'svelte/store'

  import Crossword from '$src/lib/components/Crossword.svelte'
  import CrosswordClue from '$src/lib/components/CrosswordClue.svelte'
  import Meta from '$src/lib/components/Meta.svelte'

  let currentQuestion: Writable<number> = writable(0)

  const crosswordConfig = [
    {
      number: 1,
      x: 15,
      y: 0,
      length: 23,
      direction: 'across',
      desc: 'The art of making an anime in a team'
    },
    {
      number: 4,
      x: 15,
      y: 5,
      length: 14,
      direction: 'across',
      desc: 'A rush-covered straw mat forming a traditional Japanese floor covering'
    },
    {
      number: 5,
      x: 4,
      y: 7,
      length: 17,
      direction: 'across',
      desc: 'Zombies in school'
    },
    {
      number: 6,
      x: 9,
      y: 14,
      length: 16,
      direction: 'across',
      desc: 'High magnitude earthquake in Tokyo'
    },
    {
      number: 8,
      x: 0,
      y: 16,
      length: 12,
      direction: 'across',
      desc: 'An orb is cast down to take shapes of whatever stimulates it'
    },
    {
      number: 2,
      x: 18,
      y: 0,
      length: 15,
      direction: 'down',
      desc: 'An assistant producer gets the chance of his life to direct a movie'
    },
    {
      number: 3,
      x: 25,
      y: 3,
      length: 8,
      direction: 'down',
      desc: 'Eating Potato chips dramatically'
    },
    {
      number: 7,
      x: 11,
      y: 14,
      length: 4,
      direction: 'down',
      desc: 'A man wakes up with no memories other than his name in a dystopian society'
    }
  ]
</script>

<Meta title="Crossword" description="I don't understand why these words are crossing each other..." />
<div class="grid w-full place-items-center">
  <div class="flex flex-col w-fit bg-kusogaki-purple p-2 sm:p-8 gap-3 font-lemon-milk">
    <Crossword bind:currentQuestion {crosswordConfig} />
    <CrosswordClue bind:currentQuestion {crosswordConfig} />
  </div>
</div>

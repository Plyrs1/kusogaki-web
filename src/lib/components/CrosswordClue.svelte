<script lang="ts">
  import { onDestroy } from 'svelte'
  import type { Writable } from 'svelte/store'

  import type { CrosswordQuestion } from './crossword'

  export let crosswordConfig: Array<CrosswordQuestion>
  export let currentQuestion: Writable<number>

  const acrossQuestion = crosswordConfig.filter((q) => q.direction === 'across').sort((a, b) => a.number - b.number)
  const downQuestion = crosswordConfig.filter((q) => q.direction === 'down').sort((a, b) => a.number - b.number)

  function clueAction(questionId: number) {
    $currentQuestion = questionId
  }
  const unsubscribeCurrentQuestion = currentQuestion.subscribe((q) => {
    console.log(q)
  })
  onDestroy(unsubscribeCurrentQuestion)
</script>

<div class="grow flex flex-col xl:flex-row text-left gap-3 text-white">
  <div class="grow text-sm lg:text-md xl:text-lg">
    <div class="pb-0 md:pb-1 xl:pb-2 text-xl md:text-2xl xl:text-3xl">Across</div>
    {#each acrossQuestion as aq}
      <div
        class="p-0 md:p-1 xl:p-2 cursor-pointer {aq.number === $currentQuestion ? 'bg-kusogaki-blue' : ''}"
        on:click|preventDefault={() => clueAction(aq.number)}
        on:keydown|preventDefault
      >
        {aq.number}. {aq.desc}
      </div>
    {/each}
  </div>
  <div class="grow text-sm lg:text-md xl:text-lg">
    <div class="pb-0 md:pb-1 xl:pb-2 text-xl md:text-2xl xl:text-3xl">Down</div>
    {#each downQuestion as dq}
      <div
        class="p-0 md:p-1 xl:p-2 cursor-pointer {dq.number === $currentQuestion ? 'bg-kusogaki-blue' : ''}"
        on:click|preventDefault={() => clueAction(dq.number)}
        on:keydown|preventDefault
      >
        {dq.number}. {dq.desc}
      </div>
    {/each}
  </div>
</div>

<script lang="ts">
  import type { CrosswordConfig } from './crossword'

  export let crosswordConfig: CrosswordConfig
  const acrossQuestion = crosswordConfig.question.filter((q) => q.direction === 'across').sort((a, b) => a.number - b.number)
  const downQuestion = crosswordConfig.question.filter((q) => q.direction === 'down').sort((a, b) => a.number - b.number)
</script>

<div class="grow flex flex-col xl:flex-row text-left gap-3">
  <div class="grow">
    <p>Across</p>
    {#each acrossQuestion as aq}
      <div>{aq.number}. {aq.desc}</div>
    {/each}
  </div>
  <div class="grow">
    <p>Down</p>
    {#each downQuestion as dq}
      <div>{dq.number}. {dq.desc}</div>
    {/each}
  </div>
</div>

<script lang="ts">
  import Crossword from '$src/lib/components/Crossword.svelte'
  import CrosswordClue from '$src/lib/components/CrosswordClue.svelte'

  const crosswordConfig = {
    sizeX: 9, // Number of horizontal cells in the crossword
    sizeY: 9, // Number of vertical cells in the crossword
    question: [
      {
        number: 1,
        x: 0,
        y: 0,
        length: 9,
        direction: 'across',
        desc: 'Clip, stroke, nut'
      },
      {
        number: 5,
        x: 0,
        y: 2,
        length: 4,
        direction: 'across',
        desc: 'Drive, brake, hard'
      },
      {
        number: 7,
        x: 5,
        y: 2,
        length: 4,
        direction: 'across',
        desc: 'Right, line, step'
      },
      {
        number: 8,
        x: 2,
        y: 4,
        length: 5,
        direction: 'across',
        desc: 'District, tennis, room'
      },
      {
        number: 11,
        x: 0,
        y: 6,
        length: 4,
        direction: 'across',
        desc: 'Crop, flow, ready'
      },
      {
        number: 12,
        x: 5,
        y: 6,
        length: 4,
        direction: 'across',
        desc: 'Break, number, money'
      },
      {
        number: 13,
        x: 0,
        y: 8,
        length: 9,
        direction: 'across',
        desc: 'Odd, seeker, buming'
      },
      {
        number: 2,
        x: 1,
        y: 0,
        length: 4,
        direction: 'down',
        desc: 'Price, home, trust'
      },
      {
        number: 3,
        x: 5,
        y: 0,
        length: 7,
        direction: 'down',
        desc: 'Bank, judgement, public'
      },
      {
        number: 4,
        x: 7,
        y: 0,
        length: 4,
        direction: 'down',
        desc: 'Killer, pink, like'
      },
      {
        number: 6,
        x: 3,
        y: 2,
        length: 7,
        direction: 'down',
        desc: 'Horse, evening, line'
      },
      {
        number: 9,
        x: 1,
        y: 5,
        length: 4,
        direction: 'down',
        desc: 'Wing, shoe, curtain'
      },
      {
        number: 10,
        x: 7,
        y: 5,
        length: 4,
        direction: 'down',
        desc: 'In, tolerance, hour'
      }
    ]
  }
</script>

<div class="grid w-full place-items-center">
  <div class="flex flex-col md:flex-row w-fit bg-kusogaki-purple p-8 gap-3">
    <Crossword {crosswordConfig} />
    <CrosswordClue {crosswordConfig} />
  </div>
</div>

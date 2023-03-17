<script lang="ts">
  import { onDestroy } from 'svelte'
  import { type Writable, writable } from 'svelte/store'

  import type { CrosswordConfig } from './crossword'
  export let crosswordConfig: CrosswordConfig
  let currentDirection: Writable<string> = writable('across')
  let currentQuestion: Writable<number> = writable(0)
  let previousQuestion = 0

  const cells = new Array(crosswordConfig.sizeY)
  for (let i = 0; i < crosswordConfig.sizeX; i++) {
    cells[i] = new Array(crosswordConfig.sizeX)
    for (let j = 0; j < crosswordConfig.sizeY; j++) {
      cells[i][j] = { question: [-1, -1] }
    }
  }
  for (let index = 0; index < crosswordConfig.question.length; index++) {
    const question = crosswordConfig.question[index]
    for (let answerLength = 0; answerLength < question.length; answerLength++) {
      if (question.direction === 'across') {
        if (answerLength === 0) cells[question.y][question.x + answerLength]['first'] = question.number
        cells[question.y][question.x + answerLength]['question'][0] = question.number
        continue
      }
      cells[question.y + answerLength][question.x]['question'][1] = question.number
      if (answerLength === 0) cells[question.y + answerLength][question.x]['first'] = question.number
    }
  }

  const unsubscribeQuestion = currentQuestion.subscribe((question) => {
    if (previousQuestion === question) return
    resetAllCellsColor()
    previousQuestion = question
    const q = crosswordConfig.question.find((q) => q.number === question)
    if (!!q && q.direction === 'across') {
      for (let x = 0; x < (q.x + q.length ?? 1); x++) {
        const cell = document.getElementById(`cell-${q.x + x}-${q.y}`)
        if (cell) {
          cell.classList.add('bg-kusogaki-purple')
          cell.classList.add('bg-opacity-30')
        }
      }
    }
    if (!!q && q.direction === 'down') {
      for (let y = 0; y < (q.y + q.length ?? 1); y++) {
        const cell = document.getElementById(`cell-${q.x}-${q.y + y}`)
        if (cell) {
          cell.classList.add('bg-kusogaki-purple')
          cell.classList.add('bg-opacity-30')
        }
      }
    }
  })

  onDestroy(() => {
    unsubscribeQuestion()
  })

  function resetAllCellsColor() {
    for (let x = 0; x < crosswordConfig.sizeX; x++) {
      for (let y = 0; y < crosswordConfig.sizeY; y++) {
        const cell = document.getElementById(`cell-${x}-${y}`)
        if (cell) {
          cell.classList.remove('bg-kusogaki-purple')
          cell.classList.remove('bg-opacity-30')
        }
      }
    }
  }
  function getPositionFromElement(el: HTMLInputElement) {
    const pos = el.id.split('-')
    return { x: parseInt(pos[1]), y: parseInt(pos[2]) }
  }

  function getQuestionFromCursor(cell: Array<number>) {
    const direction = $currentDirection === 'across' ? 0 : 1
    return crosswordConfig.question.find((q) => q.number === cell[direction])
  }

  function updateDirection(cell: Array<number>) {
    if (cell[0] === -1) $currentDirection = 'down'
    if (cell[1] === -1) $currentDirection = 'across'
    const question = getQuestionFromCursor(cell)
    $currentQuestion = question?.number ?? 0
  }

  function inputFocus(e: FocusEvent, cell: Array<number>) {
    updateDirection(cell)
  }

  function inputDblClick(e: MouseEvent, cell: Array<number>) {
    // only trigger if current cell is intersecting two question
    if (cell[0] === -1 || cell[1] === -1) return
    $currentDirection = $currentDirection === 'across' ? 'down' : 'across'
    updateDirection(cell)
  }

  function moveCursor(e: KeyboardEvent, direction: string) {
    const pos = getPositionFromElement(e.target as HTMLInputElement)
    if (direction === 'backward') {
      if ($currentDirection === 'across') {
        if (pos.x - 1 < 0) return
        document.getElementById(`cell-${pos.x - 1}-${pos.y}`)?.focus()
        return
      }
      if (pos.y - 1 < 0) return
      document.getElementById(`cell-${pos.x}-${pos.y - 1}`)?.focus()
      return
    }

    if ($currentDirection === 'across') {
      if (pos.x > crosswordConfig.sizeX) return
      document.getElementById(`cell-${pos.x + 1}-${pos.y}`)?.focus()
      return
    }
    if (pos.y > crosswordConfig.sizeY) return
    document.getElementById(`cell-${pos.x}-${pos.y + 1}`)?.focus()
    return
  }

  function inputKeyDown(e: KeyboardEvent, cell: Array<number>) {
    const pos = getPositionFromElement(e.target as HTMLInputElement)
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        return moveCursor(e, 'backward')
      }
      if (cell[0] === -1 || cell[1] === -1) return
      $currentDirection = $currentDirection === 'across' ? 'down' : 'across'
      updateDirection(cell)
      return
    }

    if (e.key === 'Enter') return moveCursor(e, 'forward')

    if (e.key === 'Backspace') {
      ;(e.target as HTMLInputElement).value = ''
      return moveCursor(e, 'backward')
    }

    // handle arrow key navigation
    // if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {return moveCursor(e, 'backward')}
    // if (e.key === 'ArrowDown' || e.key === 'ArrowRight') return moveCursor(e, 'forward')

    if (e.key === 'ArrowUp') {
      if (pos.y - 1 < 0) return
      document.getElementById(`cell-${pos.x}-${pos.y - 1}`)?.focus()
      return
    }
    if (e.key === 'ArrowDown') {
      if (pos.y > crosswordConfig.sizeY) return
      document.getElementById(`cell-${pos.x}-${pos.y + 1}`)?.focus()
      return
    }
    if (e.key === 'ArrowLeft') {
      if (pos.x - 1 < 0) return
      document.getElementById(`cell-${pos.x - 1}-${pos.y}`)?.focus()
      return
    }
    if (e.key === 'ArrowRight') {
      if (pos.x > crosswordConfig.sizeX) return
      document.getElementById(`cell-${pos.x + 1}-${pos.y}`)?.focus()
      return
    }

    // only capture alphanumeric keys
    if (e.key.match(/[a-zA-Z0-9]/g)?.length !== 1) return

    // if current cursor is still within crossword size
    if (pos.x < crosswordConfig.sizeX && pos.y < crosswordConfig.sizeY) {
      ;(e.target as HTMLInputElement).value = e.key.toUpperCase()
      moveCursor(e, 'forward')
    }
  }
</script>

<div
  class="maingrid bg-kusogaki-purple w-fit"
  style="grid-template-columns: repeat({crosswordConfig.sizeY}, minmax(20px, 50px)); grid-template-rows: repeat({crosswordConfig.sizeX}, minmax(20px, 50px));"
>
  {#each cells as cellY, cursorY}
    {#each cellY as cellX, cursorX}
      {#if cellX.question[0] === -1 && cellX.question[1] === -1}
        <div class="cell bg-gray-200 border-gray-200" />
      {:else}
        <div class="cell ">
          <p>{cellX.first ?? ''}</p>
          <input
            id="cell-{cursorX}-{cursorY}"
            maxlength="1"
            on:dblclick|self|preventDefault={(e) => inputDblClick(e, cellX.question)}
            on:keydown|self|preventDefault={(e) => inputKeyDown(e, cellX.question)}
            on:focus|self={(e) => inputFocus(e, cellX.question)}
          />
        </div>
      {/if}
    {/each}
  {/each}
</div>

<style>
  .maingrid {
    display: grid;
    justify-content: center;
    background-color: #eee;
  }
  .cell {
    border-width: 1px;
  }
  .cell > p {
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    transform: translate(-0.2em, -0.2em);
  }
  .cell > input {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 2em;
    caret-color: transparent;
  }
  .cell > input:focus {
    @apply bg-opacity-60;
    @apply outline-kusogaki-purple;
  }
</style>

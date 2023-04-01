<script lang="ts">
  import { onDestroy } from 'svelte'
  import { type Writable, writable } from 'svelte/store'

  import type { CrosswordQuestion } from './crossword'
  export let crosswordConfig: Array<CrosswordQuestion>
  let currentDirection: Writable<string> = writable('across')
  export let currentQuestion: Writable<number>
  let previousQuestion = 0
  let isFakeFocus = false
  let isFocusClick = true
  let currentQuestionData: CrosswordQuestion

  const maxCellX = Math.max(...crosswordConfig.map((i) => (i.direction === 'across' ? i.x + i.length : 0)))
  const maxCellY = Math.max(...crosswordConfig.map((i) => (i.direction === 'down' ? i.y + i.length : 0)))
  const cells = new Array(maxCellY)

  for (let i = 0; i < maxCellY; i++) {
    cells[i] = new Array(maxCellX)
    for (let j = 0; j < maxCellX; j++) {
      cells[i][j] = { question: [-1, -1] }
    }
  }

  for (let index = 0; index < crosswordConfig.length; index++) {
    const question = crosswordConfig[index]
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
    currentQuestionData = crosswordConfig.find((q) => q.number === question) ?? crosswordConfig[0]
    if (!currentQuestionData) return
    if (currentQuestionData.direction === 'across') {
      for (let x = 0; x < currentQuestionData.x + currentQuestionData.length; x++) {
        const cell = document.getElementById(`cell-${currentQuestionData.x + x}-${currentQuestionData.y}`)
        if (!cell) continue
        cell.classList.add('bg-kusogaki-purple')
        cell.classList.add('bg-opacity-30')
        if (!isFocusClick && x == 0) cell.focus()
        isFocusClick = false
      }
    }
    if (currentQuestionData.direction === 'down') {
      for (let y = 0; y < currentQuestionData.y + currentQuestionData.length; y++) {
        const cell = document.getElementById(`cell-${currentQuestionData.x}-${currentQuestionData.y + y}`)
        if (!cell) continue
        cell.classList.add('bg-kusogaki-purple')
        cell.classList.add('bg-opacity-30')
        if (!isFocusClick && y == 0) cell.focus()
        isFocusClick = false
      }
    }
  })

  onDestroy(() => {
    unsubscribeQuestion()
  })

  function resetAllCellsColor() {
    for (let x = 0; x < maxCellX; x++) {
      for (let y = 0; y < maxCellY; y++) {
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
    return crosswordConfig.find((q) => q.number === cell[direction])
  }

  function updateDirection(cell: Array<number>) {
    if (cell[0] === -1) $currentDirection = 'down'
    if (cell[1] === -1) $currentDirection = 'across'
    const question = getQuestionFromCursor(cell)
    $currentQuestion = question?.number ?? 0
    isFakeFocus = false
  }

  function inputFocus(cell: Array<number>) {
    if (!isFakeFocus) updateDirection(cell)
  }

  function inputMouseDown() {
    isFakeFocus = false
    isFocusClick = true
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
      if (pos.x > maxCellX) return
      document.getElementById(`cell-${pos.x + 1}-${pos.y}`)?.focus()
      return
    }
    if (pos.y > maxCellY) return
    document.getElementById(`cell-${pos.x}-${pos.y + 1}`)?.focus()
    return
  }

  function inputKeyDown(e: KeyboardEvent, cell: Array<number>) {
    const pos = getPositionFromElement(e.target as HTMLInputElement)
    if (e.key === 'Tab') {
      isFakeFocus = true
      if (e.shiftKey) {
        if ($currentQuestion <= 1) $currentQuestion = crosswordConfig.length
        else $currentQuestion--
      } else {
        if ($currentQuestion > crosswordConfig.length - 1) $currentQuestion = 1
        else $currentQuestion++
      }
      document.getElementById(`cell-${currentQuestionData.x}-${currentQuestionData.y}`)?.focus()
      $currentDirection = currentQuestionData.direction
      return
    }

    if (e.key === 'Enter') return moveCursor(e, 'forward')

    if (e.key === 'Backspace') {
      if ($currentDirection === 'across') {
        if (pos.x === currentQuestionData.x + currentQuestionData.length - 1 && (e.target as HTMLInputElement).value !== '') {
          ;(e.target as HTMLInputElement).value = ''
          return
        }
        const asdf = document.getElementById(`cell-${pos?.x - 1}-${pos?.y}`)
        if (asdf) (asdf as HTMLInputElement).value = ''
      } else {
        if (pos.y === currentQuestionData.y + currentQuestionData.length - 1 && (e.target as HTMLInputElement).value !== '') {
          ;(e.target as HTMLInputElement).value = ''
          return
        }
        const asdf = document.getElementById(`cell-${pos?.x}-${pos?.y - 1}`)
        if (asdf) (asdf as HTMLInputElement).value = ''
      }
      return moveCursor(e, 'backward')
    }

    if (e.key === 'ArrowUp') {
      if (pos.y - 1 < 0) return
      document.getElementById(`cell-${pos.x}-${pos.y - 1}`)?.focus()
      updateDirection(cell)
      return
    }
    if (e.key === 'ArrowDown') {
      if (pos.y > maxCellY) return
      document.getElementById(`cell-${pos.x}-${pos.y + 1}`)?.focus()
      updateDirection(cell)
      return
    }
    if (e.key === 'ArrowLeft') {
      if (pos.x - 1 < 0) return
      document.getElementById(`cell-${pos.x - 1}-${pos.y}`)?.focus()
      updateDirection(cell)
      return
    }
    if (e.key === 'ArrowRight') {
      if (pos.x > maxCellX) return
      document.getElementById(`cell-${pos.x + 1}-${pos.y}`)?.focus()
      updateDirection(cell)
      return
    }

    // only capture alphanumeric keys
    if (e.key.match(/[a-zA-Z0-9]/g)?.length !== 1) return

    // if current cursor is still within crossword size
    if (pos.x < maxCellX && pos.y < maxCellY) {
      ;(e.target as HTMLInputElement).value = e.key.toUpperCase()
      moveCursor(e, 'forward')
    }
  }
</script>

<div
  class="maingrid bg-kusogaki-purple w-fit h-fit"
  style="grid-template-columns: repeat({maxCellX}, minmax(20px, 50px)); grid-template-rows: repeat({maxCellY}, minmax(20px, 50px));"
>
  {#each cells as cellY, cursorY}
    {#each cellY as cellX, cursorX}
      {#if !!cellX === false || (cellX.question[0] === -1 && cellX.question[1] === -1)}
        <div class="cell bg-gray-200 border-gray-200" />
      {:else}
        <div class="cell ">
          <p class="pointer-events-none">{cellX.first ?? ''}</p>
          <input
            id="cell-{cursorX}-{cursorY}"
            maxlength="1"
            on:dblclick|self|preventDefault={(e) => inputDblClick(e, cellX.question)}
            on:keydown|self|preventDefault={(e) => inputKeyDown(e, cellX.question)}
            on:focus|self|preventDefault={() => inputFocus(cellX.question)}
            on:mousedown|self={inputMouseDown}
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
    font-size: 1em;
    caret-color: transparent;
  }
  .cell > input:focus {
    @apply bg-opacity-60;
    @apply outline-kusogaki-purple;
  }
</style>

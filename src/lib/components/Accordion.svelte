<script lang="ts">
  import { slide } from 'svelte/transition'

  let isCollapsed = true
  export let question: string
  export let answer: string
  export let className = ''
</script>

<div class="w-full bg-kusogaki-purple {className} font-lemon-milk text-white text-sm md:text-lg">
  <button type="button" class="flex justify-between w-full p-2 md:p-5" on:click={() => (isCollapsed = !isCollapsed)}>
    <span>{question}</span>
    <svg
      class="w-6 h-6 {isCollapsed ? 'rotate-0' : 'rotate-180'} duration-300 shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      /></svg
    >
  </button>
  {#if !isCollapsed}
    <div transition:slide>
      <div class="p-5 font-light bg-white/10">
        <p class="mb-2 text-left">{@html answer}</p>
      </div>
    </div>
  {/if}
</div>

<style>
  p :global(a) {
    text-decoration: none;
    font-weight: 700;
    position: relative;
    padding: 0 3px 0 3px;
  }

  p :global(a:hover) {
    transition: all 0.3s ease-in-out;
    color: rgb(76, 82, 155);
    z-index: 10;
  }
  p :global(a::before) {
    content: '';
    color: #fff;
    background-color: #fff;
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  p :global(a:hover::before) {
    bottom: 0;
    height: 100%;
    z-index: -1;
  }
</style>

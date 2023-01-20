<script lang="ts">
  export let isDark = false
  export let message = ''
</script>

<div
  class="max-w-xs sm:max-w-sm md:max-w-md xl:max-w-lg 2xl:max-w-xl p-2 rounded-l-full shadow right-0 hover:scale-110 duration-200 {!isDark
    ? 'bg-white'
    : 'bg-kusogaki-purple'}"
>
  <div
    class="ml-3 my-0 md:my-2 xl:my-4 text-xs md:text-sm xl:text-2xl font-lemon-milk whitespace-nowrap text-ellipsis overflow-hidden right-0 {isDark
      ? 'text-white'
      : ''}"
  >
    <slot />
    {message}
  </div>
</div>

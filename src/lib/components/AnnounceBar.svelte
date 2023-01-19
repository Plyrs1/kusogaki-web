<script lang="ts">
  export let isDark = false
  export let message = ''
</script>

<div
  class="w-fit max-w-xs sm:max-w-sm md:max-w-md xl:max-w-lg 2xl:max-w-xl p-2 mb-4 {!isDark
    ? 'bg-white'
    : 'bg-kusogaki-purple'} rounded-l-full shadow right-0"
>
  <div
    class="ml-3 my-0 md:my-2 xl:my-4 text-xs md:text-sm xl:text-2xl font-lemon-milk {isDark
      ? 'text-white'
      : ''} whitespace-nowrap text-ellipsis overflow-hidden right-0"
  >
    <slot />
    {message}
  </div>
</div>

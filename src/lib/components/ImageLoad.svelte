<script lang="ts">
  let isImgLoaded = false
  export let src = ''
  export let alt = 'Image'
  export let className: string
  export let loadingOpacity = 'opacity-60'
</script>

<div class="flex justify-center w-full h-full {!isImgLoaded ? 'bg-gray-600 animated-background ' + loadingOpacity : ''}">
  {#if src !== ''}
    <img
      loading="lazy"
      {src}
      class="{className} duration-1000 {!isImgLoaded ? 'opacity-0' : 'opacity-100'}"
      on:load|once={() => (isImgLoaded = true)}
      {alt}
    />
  {/if}
</div>

<style>
  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }

  .animated-background {
    animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: darkgray;
    background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
    position: relative;
  }
</style>

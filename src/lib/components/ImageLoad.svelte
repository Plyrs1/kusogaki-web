<script lang="ts">
  import { assets } from '$app/paths'
  const imgurResizeLetter = ['s', 'b', 't', 'm', 'l', 'h']
  const imgurHosts = ['i.imgur.com', 'imgur.com']
  let isImgLoaded = false

  function errorHandler(event: Event) {
    ;(event.target as HTMLImageElement).src = `${assets}/assets/img/image_notfound.png`
  }
  /**
   * Append special imgur character to the image id
   * to load smaller image
   * @param src
   */
  function imgurThumbnail(src: string, imgSize: string) {
    if (src[0] === '/') {
      return src
    }
    const url = new URL(src)
    const isImgur = imgurHosts.indexOf(url.hostname) !== -1
    if (!isImgur) return src
    const isImgurIdCorrect = url.pathname.split('.')[0].length === 8
    const isNeedResize = imgurResizeLetter.indexOf(url.pathname[url.pathname.indexOf('.') - 1]) === -1
    if (!isImgurIdCorrect && !isNeedResize) return src
    const dotPosition = url.pathname.indexOf('.')
    url.pathname = url.pathname.slice(0, dotPosition) + imgSize + url.pathname.slice(dotPosition)
    return url.toString()
  }

  export let src = `${assets}/assets/img/empty.png`
  export let alt = 'Image'
  export let size = 'l'
  export let className: string
  export let loadingOpacity = 'opacity-60'
</script>

<div class="flex justify-center w-full h-full {!isImgLoaded ? 'animated-background bg-gray-600 ' + loadingOpacity : ''}">
  {#if src !== ''}
    <img
      loading="lazy"
      src={imgurThumbnail(src, size)}
      class="{className} duration-1000 {!isImgLoaded ? 'opacity-0' : 'opacity-100'} object-cover "
      on:load|once={() => (isImgLoaded = true)}
      on:error|self|once={errorHandler}
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

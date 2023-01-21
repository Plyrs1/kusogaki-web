<script lang="ts">
  function accentParse(color: string): string {
    switch (color) {
      case 'purple':
        return 'border-kusogaki-purple'
      case 'blue':
        return 'border-kusogaki-blue'
      case 'red':
        return 'border-kusogaki-red'
      case 'yellow':
        return 'border-kusogaki-yellow'
      case 'cyan':
        return 'border-kusogaki-cyan'
      case 'green':
        return 'border-kusogaki-green'
      default:
        return 'border-gray-400'
    }
  }
  export let author = ''
  export let accent = ''
  export let src = ''
  export let url = '/#'
  export let eventName = ''
  export let eventUrl = '/#'
  import ImageLoad from './ImageLoad.svelte'
</script>

<div class="bg-kusogaki-purple rounded-md border-l-8 {accentParse(accent)}">
  <a href={eventUrl} target="_blank" rel="noreferrer">
    <div class="grid overflow-hidden w-full aspect-[3/4] rounded-t-md p-3">
      <ImageLoad className="rounded-lg" {src} alt={eventName} loadingOpacity="opacity-30" />
    </div>
  </a>
  <div class="pb-2">
    <a href={url} target="_blank" rel="noreferrer"><h5 class="text-xs md:text-sm lg:text-lg text-white">{author}</h5></a>
  </div>
</div>
<!-- uncomment to add like and user count -->
<!-- <div class="flex gap-1">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    ><path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z"
      fill="currentColor"
    /></svg
  >
  <p>10</p>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    ><path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
      fill="currentColor"
    /><path
      d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
      fill="currentColor"
    /></svg
  >
  <p>20</p>
</div> -->

<!-- <style>
  .scrolling {
    animation-iteration-count: infinite;
    transition: 2s linear;
  }
  .scrolling:hover {
    transform: translateX(-100%);
  }
</style> -->

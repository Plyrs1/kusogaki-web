<script lang="ts">
  import { base } from '$app/paths'

  import Wave from './Wave.svelte'
</script>

<div class="fixed bottom-0 left-0 right-0">
  <div class="fixed -bottom-12 lg:bottom-0 right-0 w-full h-1/4 -rotate-12 lg:-rotate-6 origin-top-right">
    <Wave className="fill-kusogaki-purple" />
  </div>
  <div class="fixed right-0 bottom-0 grid grid-cols-3 gap-2 py-4 lg:py-10">
    <div class="col-span-2">
      <p class="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[-5px_-5px_0px_rgb(97,103,197)]">クソガキ</p>
    </div>
    <div class="text-left grid content-end shrink text-[0.5rem] sm:text-xs md:text-sm lg:text-lg ">
      <p class="text-white">/KU SO GA KI/</p>
      <p class="text-white font-bold">CREW</p>
    </div>
    <div class="col-span-2 text-white text-[0.5rem] sm:text-xs md:text-sm lg:text-lg font-bold">
      <a href="{base}/events">EVENTS</a> . <a href="{base}/community">COMMUNITY</a> . <a href="{base}/badges">BADGES</a>
    </div>
  </div>
</div>

<style>
  a {
    text-decoration: none;
    font-weight: 700;
    position: relative;
    padding: 0 3px 0 3px;
  }

  a:hover {
    transition: all 0.3s ease-in-out;
    color: rgb(76, 82, 155);
  }
  a::before {
    content: '';
    color: #fff;
    background-color: #fff;
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 3px;
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }

  a:hover::before {
    bottom: 0;
    height: 100%;
  }
</style>

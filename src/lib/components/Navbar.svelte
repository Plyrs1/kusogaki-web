<script lang="ts">
  import type { AfterNavigate } from '@sveltejs/kit'

  import { afterNavigate, beforeNavigate } from '$app/navigation'
  import { base } from '$app/paths'
  import { isScrolled } from '$lib/stores/page'

  import Wave from './Wave.svelte'
  interface NavigationItem {
    label: string
    href: string
  }
  const navItems: Array<NavigationItem> = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Events', href: '/events' }
  ]

  let isNavbarOpen = false
  let currentPage = '/'
  beforeNavigate(() => {
    $isScrolled = false
  })
  afterNavigate((nav: AfterNavigate) => {
    currentPage = nav.to?.route.id || ''
    console.log(currentPage)
  })
  function toggleNavbar(): void {
    console.log(`isNavbarOpen : ${isNavbarOpen}`)
    isNavbarOpen = !isNavbarOpen
  }
</script>

<nav class="w-full">
  <div class="fixed top-0 left-0 w-full h-48 md:h-56 lg:h-64 {$isScrolled ? '' : '-rotate-12'} origin-bottom-left z-10 duration-500">
    <Wave className="fill-white opacity-60" flip={true} />
  </div>
  <div class="flex flex-wrap items-center justify-between m-0 p-4 md:p-8">
    <a
      href="{base}/#"
      class="text-4xl lg:text-5xl font-semibold whitespace-nowrap items-center z-20 self-center  text-kusogaki-purple"
      on:click={isNavbarOpen ? toggleNavbar : null}
      >クソガキ
    </a>
    <button type="button" class="inline-flex items-center p-0 text-sm z-20 lg:hidden" on:click={toggleNavbar}>
      <svg class="w-12 h-12 lg:w-16 lg:h-16 fill-kusogaki-purple" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        /></svg
      >
    </button>
    <div
      class="fixed w-full left-0 top-0 bottom-0 bg-gray-50 z-10 lg:left-auto lg:bottom-auto lg:top-auto lg:static lg:block lg:w-auto lg:bg-transparent"
      class:hidden={!isNavbarOpen}
    >
      <ul class="flex flex-col mt-32 lg:flex-row lg:mt-0">
        {#each navItems as navItem}
          <li class="py-4">
            <a
              href="{base}{navItem.href}"
              class="text-4xl text-kusogaki-purple font-semibold {currentPage === navItem.href ? 'active' : ''}"
              on:click={toggleNavbar}>{navItem.label}</a
            >
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

<style>
  a {
    position: relative;
    padding: 1rem;
  }

  a:hover {
    transition: all 0.3s ease-in-out;
    @apply text-white;
  }
  a.active {
    @apply text-white;
    @apply bg-kusogaki-purple;
  }
  a::before {
    @apply bg-kusogaki-purple;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;

    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
    z-index: -1;
  }

  a:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
</style>

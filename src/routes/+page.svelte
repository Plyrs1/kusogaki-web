<script>
  import AnnounceBar from '$src/lib/components/AnnounceBar.svelte'
  import Meta from '$src/lib/components/Meta.svelte'
</script>

<Meta
  title="Home"
  description="This is just a placeholder so the embed looks nice and full. I don't know what else to write so I'll just tell you a story about a chicken. Once upon a time, there's a mom chicken that laid an egg. Mom chicken takes care of the egg everyday. She keep it warm, giving motherly love to it since the first time it came out to the world. But in an unfortunate day, an evil human came to mom chicken and took the egg she loved and raised with utmost care. Mom chicken became sad, she cried everyday, until she got fed up of this cruel life and walked to the nearest KFC to give up her life."
/>
<div class="fixed grid right-0 justify-items-end">
  <AnnounceBar message="This is the first event" />
  <AnnounceBar message="And the second event must be longer than before so I can look at something wrong" isDark={true} />
  <AnnounceBar message="Another long event???" isDark={true} />
  <AnnounceBar message="Nope, what are we gonna do anyway? Finding chicken?" isDark={true} />
</div>
<div class="flex flex-col w-full h-4/6">
  <div class="flex-grow" />
  <div
    class="flex-none text-left mx-4 md:mx-12 font-bold md:font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.9)]"
  >
    <h1 class="text-white">Welcome to</h1>
    <h1 class="text-kusogaki-purple -my-5 md:-my-8 lg:-my-10">Kusogaki</h1>
  </div>
  <div class="h-1/4" />
</div>

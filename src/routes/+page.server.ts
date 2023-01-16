// TODO : Move meta to a component and only use
// .server.ts for serving data. I want to sleeeppp

import { assets } from '$app/paths'

import type { PageServerLoad } from './$types'

export const load = (() => {
  return {
    title: 'Home',
    description:
      "This is just a placeholder so the embed looks nice and full. I don't know what else to write so I'll just tell you a story about a chicken. Once upon a time, there's a mom chicken that laid an egg. Mom chicken takes care of the egg everyday. She keep it warm, giving motherly love to it since the first time it came out to the world. But in an unfortunate day, an evil human came to mom chicken and took the egg she loved and raised with utmost care. Mom chicken became sad, she cried everyday, until she got fed up of this cruel life and walked to the nearest KFC to give up her life.",
    image: `${assets}/assets/img/embed.jpg`,
    siteName: 'Kusogaki Crew',
    color: '#6167c5'
  }
}) satisfies PageServerLoad

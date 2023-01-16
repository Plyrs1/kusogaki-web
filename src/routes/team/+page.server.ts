import { assets } from '$app/paths'

import type { PageServerLoad } from './$types'

export const load = (() => {
  return {
    title: 'Team Member',
    description: 'Say hello to our team members!',
    image: `${assets}/assets/img/embed1.jpg`,
    siteName: 'Kusogaki Crew',
    color: '#6167c5'
  }
}) satisfies PageServerLoad

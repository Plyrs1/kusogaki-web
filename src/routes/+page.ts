import type { PageLoad } from './$types'
import type { AnnouncementData } from './home'

const announcementLists: Array<AnnouncementData> = [
  {
    title: 'Re:Solution',
    url: 'https://anilist.co/forum/thread/15218/comment/2091132'
  },
  {
    title: 'AniList Wrapped 2022',
    url: 'https://anilist.co/forum/thread/61534'
  }
]

export const load = (() => {
  return { announcementLists }
}) satisfies PageLoad

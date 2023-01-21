import { EventData } from '../events/events'

interface BadgeData {
  author: string
  url: string
  src: string
  eventName?: string
  accent?: string
  eventUrl?: string
}

interface UserData {
  anilistId: string
  name: string
  role: Array<string>
  username: string
}

interface ExpandedBadgeData {
  event: EventData
  user: UserData
}

interface BadgeItemApiData {
  img: string
  creator: string
  creatorAnilistId: number
  expand: ExpandedBadgeData
}
interface BadgePageApiData {
  page: number
  perPage: number
  totalPages: number
  totalItems: number
  items: Array<BadgeItemApiData>
}

export { BadgeData, BadgeItemApiData, BadgePageApiData }

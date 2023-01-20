import { EventData } from '../events/events'

interface BadgeData {
  author: string
  url: string
  src: string
  eventName?: string
  accent?: string
  eventUrl?: string
}

interface ExpandedEventData {
  event: EventData
}

interface BadgeItemApiData {
  img: string
  creator: string
  creatorProfile: string
  expand: ExpandedEventData
}
interface BadgePageApiData {
  page: number
  perPage: number
  totalPages: number
  totalItems: number
  items: Array<BadgeItemApiData>
}

export { BadgeData, BadgeItemApiData, BadgePageApiData }

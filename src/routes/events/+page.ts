import type { PageLoad } from './$types'

interface EventData {
  img: string
  href: string
  startDate: Date
  likes: number
}

async function getEvents(fetch: (url: string, options: RequestInit) => Promise<Response>, activityId: number): Promise<Array<EventData>> {
  const query = `query($activity:Int) { 
    Activity (id:$activity) { 
      ... on TextActivity { 
        text 
      } 
    } 
  }`
  const variables = { activity: activityId }
  const res = await fetch('https://graphql.anilist.co/', {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify({ query, variables }),
    method: 'POST'
  })
  const item = await res.json()
  const a = item.data.Activity.text
  const b = a.split('[').splice(1)
  return b.map((data: string) => {
    const aa = data.split(']')
    return {
      img: aa[0].split('(')[1].split(')')[0],
      href: aa[1].split('(')[1].split(')')[0],
      // TODO: use event start date. for now it's using
      // anilist activity creation date
      startDate: new Date(item.data.Activity.createdAt),
      likes: parseInt(item.data.Activity.text)
    }
  }) satisfies Array<EventData>
}

export const load = (async ({ fetch }) => {
  const eventData: Array<EventData> = (
    (await Promise.all([getEvents(fetch, 496400390), getEvents(fetch, 250299436)])) satisfies Array<Array<EventData>>
  )
    .flat()
    .sort((a: EventData, b: EventData) => (a.startDate.getTime() > b.startDate.getTime() ? -1 : 1))
  return { eventData }
}) satisfies PageLoad

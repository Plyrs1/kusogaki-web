import type { PageLoad } from './$types'
import type { FaqData } from './faq'

const faqLists: Array<FaqData> = [
  {
    question: 'How do I know when an event starts?',
    answer:
      'When you subscribe to this forum thread, you\'ll receive a notification when any events start. Make sure "When someone replies to a forum thread I\'m subscribed to" in notification settings is ticked. <img src="https://i.imgur.com/dL85tK4.png" />'
  },
  {
    question: 'How do I participate?',
    answer:
      'The participation requirements will be written on the event announcement, but almost always consist of making a status post with an image/gif relevant to the event, and linking this events thread.'
  },
  {
    question: 'When/how do I get my badge?',
    answer:
      "As soon as you've participated you're free to take one of the badges from the event! All badges are just images, so simply copy the image and place it where you'd like."
  },
  {
    question: 'Can I make my own badges and banners?',
    answer:
      "Absolutely! In fact, we encourage it! Reply to the event you've made a badge/banner for, and we'll add it to the community content section of our post!"
  },
  {
    question: 'Can I join the Events Team?',
    answer:
      'Yes, you may take a shot at joining! If you\'re lucky and good enough, you\'ll get accepted! More info on what positions are available can be found here: <a href="https://anilist.co/activity/96889265">https://anilist.co/activity/96889265</a>'
  }
]

export const load = (() => {
  return { faqLists }
}) satisfies PageLoad

import { assert } from 'chai'
import { video, live } from '../src/index'

describe('Search', () => {
  it('.video() returns array of videos', async () => {
    const videos = await video({
      q: '東方自作アレンジ',
      targets: ['tagsExact'],
      fields: ['title', 'contentId', 'userId', 'viewCounter'],
      sort: '-viewCounter',
    })

    assert.exists(videos)
    assert.isArray(videos)
  })

  it('.live() returns array of live broadcasts', async () => {
    const broadcasts = await live({
      q: '東方',
      targets: ['title', 'description', 'tags'],
      sort: '-startTime',
    })

    assert.exists(broadcasts)
    assert.isArray(broadcasts)
  })
})

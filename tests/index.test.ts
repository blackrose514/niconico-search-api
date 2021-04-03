import { assert } from "chai"
import search from "../src/search"

describe("Search", () => {
  it("Returns array of videos", async () => {
    const { data: videos } = await search({
      q: "東方自作アレンジ",
      targets: ["tagsExact"],
      fields: "*",
      sort: "-viewCounter",
    })

    assert.exists(videos)
    assert.isArray(videos)
  })
})

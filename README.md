## Installation

```bash
npm install niconico-search-api
```

## Usage

```js
import search from "niconico-search-api"
/*
 * CommonJS
 * const { search } = require("niconico-search-api");
 */

const { data, meta } = await search({
  q: "東方自作アレンジ",
  targets: ["tagsExact"],
  fields: ["title", "viewCounter", "contentId"],
  sort: "-viewCounter",
  limit: 20,
})
```

## Methods

- search (params: [SearchParams](#params)) : Promise\<[SearchAPIResponse](#response)\>

#### Params

| params   | Type             | Note                                                         |
| -------- | ---------------- | ------------------------------------------------------------ |
| q        | string           |
| targets  | string[]         |
| fields?  | string[] or "\*" | Fields to include in response data. <br>"\*" --> all fields. |
| filters? | object           |
| sort     | string           | e.g. "-viewCouner", "+lastCommentTime" etc                   |
| offset?  | number           | Default: 0 / Max: 100000                                     |
| limit?   | number           | Default: 10 / Max: 100                                       |
| context? | string           | Max: 40 characters                                           |

## Response

```js
meta: {
  id: string
  status: number
  totalCount: number
}
data: ResponseData
```

```ts
// ResponseData (all)
[
  {
    contentId: string
    title: string
    description: string
    viewCounter: number
    mylistCounter: number
    lengthSeconds: number
    thumbnailUrl: string
    startTime: string
    lastResBody: string
    commentCounter: number
    lastCommentTime: string
    categoryTags: string
    tags: string
    genre: string
  },
  //...
]
```

## API Docs

https://site.nicovideo.jp/search-api-docs/snapshot

## License

[MIT](LICENSE)

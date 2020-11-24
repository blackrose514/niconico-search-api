![preview-gif](images/nicosearchapi1.gif)

# Installation

```bash
npm install niconico-search-api
```

# Usage

```js
import search from 'niconico-search-api'

search
  .video({
    q: '東方アレンジ',
    targets: ['tagsExact'],
    fields: ['title', 'viewCounter', 'contentId'],
    sort: '-viewCounter',
    limit: 20,
  })
  .then((videos) => console.log(videos))
```

# Methods

- video (params: [SearchParams](#searchparams))

- live (params: [SearchParams](#searchparams))

### SearchParams

| params      | Type     | Description                  |
| ----------- | -------- | ---------------------------- |
| q           | string   |
| targets     | string[] |
| fields?     | string[] | Default: Returns all fields. |
| jsonFilter? | object   |
| sort        | string   |
| offset?     | number   | Default: 0 / Max: 1600       |
| limit?      | number   | Default: 10 / Max: 100       |
| context?    | string   | Max: 40 characters           |

Return: Promise\<ResponseData\>

# License

[MIT](LICENSE)

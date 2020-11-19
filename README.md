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
    _sort: '-viewCounter',
    _limit: 20,
  })
  .then((videos) => console.log(videos))
```

<!-- # Methods

- video (params: [SearchParams](#searchparams)) : Promise\<[ResponseData]()\>

- live (params: [SearchParams](#searchparams)) : Promise\<[ResponseData]()\>

### SearchParams

| params      | Type               |
| ----------- | ------------------ |
| q           | string             |
| targets     | string \| string[] |
| fields?     | string \| string[] |
| jsonFilter? | object             |
| \_sort      | string             |
| \_offset?   | number             |
| \_limit?    | number             |
| \_context?  | string             | -->

# License

[MIT](LICENSE)

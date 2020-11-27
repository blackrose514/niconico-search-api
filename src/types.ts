export interface SearchAPIResponse<
  T extends Video | Live,
  F extends SearchParams<T>['fields']
> {
  meta: {
    id: string
    status: number
    totalCount: number
  }
  data: ResponseData<T, F>
}

export interface ErrorResponse {
  meta: {
    id: string
    status: number
    errorCode: string
    errorMessage: string
  }
}

export type ResponseData<T, F> = F extends FieldsParam<T>
  ? Pick<T, F[number]>[]
  : Omit<T, 'tagsExact'>[]

export interface SearchParams<T extends Video | Live> {
  q: string
  targets: TargetsParam
  fields?: FieldsParam<T>
  jsonFilter?: JsonFilterParam<T>
  sort: SortParam<T>
  offset?: number
  limit?: number
  context?: string
}

export type TargetsParam = ('title' | 'description' | 'tags' | 'tagsExact')[]
export type FieldsParam<T> = (keyof Omit<T, 'tagsExact'>)[]
export type SortParam<T> = `${'+' | '-'}${SortField<T>}`
export type JsonFilterParam<T> =
  | EqualFilter<T>
  | RangeFilter<T>
  | AndOrFilter<T>
  | NotFilter<T>

interface EqualFilter<T> {
  type: 'equal'
  field: FilterField<T>
  value: string | number
}

interface RangeFilter<T> {
  type: 'range'
  field: FilterField<T>
  from?: string | number
  to?: string | number
  include_lower?: boolean
  include_upper?: boolean
}

interface AndOrFilter<T> {
  type: 'or' | 'and'
  filters: JsonFilterParam<T>[]
}

interface NotFilter<T> {
  type: 'not'
  filter: JsonFilterParam<T>
}

type FilterField<T> = Exclude<keyof T, FilterFieldNonAvailable>
type FilterFieldNonAvailable =
  | 'contentId'
  | 'title'
  | 'description'
  | 'thumbnailUrl'
  | 'liveScreenshotThumbnailSmall'
  | 'tsScreenshotThumbnailSmall'
  | 'communityIcon'

type SortField<T> = Extract<Exclude<keyof T, SortFieldNonAvailable>, string>
type SortFieldNonAvailable =
  | 'contentId'
  | 'title'
  | 'description'
  | 'thumbnailUrl'
  | 'categoryTags'
  | 'tags'
  | 'tagsExact'
  | 'lockTagsExact'
  | 'genre'
  | 'genre.keyword'
  | 'providerType'
  | 'timeshiftEnabled'
  | 'liveScreenshotThumbnailSmall'
  | 'tsScreenshotThumbnailSmall'
  | 'communityText'
  | 'communityIcon'
  | 'memberOnly'
  | 'liveStatus'

export interface Video {
  contentId: string
  title: string
  description: string
  userId: number
  viewCounter: number
  mylistCounter: number
  lengthSeconds: number
  thumbnailUrl: string
  startTime: string
  threadId: number
  commentCounter: number
  lastCommentTime: string
  categoryTags: string
  channelId: number
  tags: string
  tagsExact: string
  lockTagsExact: string
  genre: string
  // 'genre.keyword': string
}

export interface Live {
  contentId: string
  title: string
  description: string
  userId: number
  channelId: number
  communityId: number
  providerType: 'official' | 'community' | 'channel'
  tags: string
  tagsExact: string
  categoryTags: string
  viewCounter: number
  commentCounter: number
  openTime: string
  startTime: string
  liveEndTime: string
  timeshiftEnabled: boolean
  scoreTimeshiftReserved: number
  thumbnailUrl: string
  liveScreenshotThumbnailSmall: string
  tsScreenshotThumbnailSmall: string
  communityText: string
  communityIcon: string
  memberOnly: boolean
  liveStatus: 'past' | 'onair' | 'reserved'
}

export type Service = 'video' | 'live'

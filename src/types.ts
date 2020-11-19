export interface SearchAPIResponse<T extends Video | Live> {
  meta: {
    id: string
    status: number
    totalCount: number
  },
  data: ResponseData<T>
}

export interface SearchParams<
  T extends Video | Live
> {
  q: string
  targets: TargetsParam 
  fields?: FieldsParam<T> 
  jsonFilter?: JsonFilterParam<T>
  _sort: SortParam<T>
  _offset?: number
  _limit?: number
  _context?: string
}

export type ResponseData<T> = Partial<Omit<T, 'tagsExact'>>[]
export type TargetsParam = ('title' | 'description' | 'tags' | 'tagsExact')[] | string
export type FieldsParam<T> = (keyof Omit<T, 'tagsExact'>)[] | string
export type SortParam<T> = `${'+'|'-'}${SortField<T>}`
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

export type VideoSerach = (params: SearchParams<Video>) => Promise<ResponseData<Video>>
export type LiveSearch = (params: SearchParams<Live>) => Promise<ResponseData<Live>>
export type Service = 'video' | 'live'

import { FieldsParam, Live, Video } from './types'

// export const VIDEO_FIELDS: Array<keyof Video> = [
//   'contentId',
//   'title',
//   'description',
//   'userId',
//   'viewCounter',
//   'mylistCounter',
//   'lengthSeconds',
//   'thumbnailUrl',
//   'startTime',
//   'threadId',
//   'commentCounter',
//   'lastCommentTime',
//   'categoryTags',
//   'channelId',
//   'tags',
//   'tagsExact',
//   'lockTagsExact',
//   'genre',
// ]

// export const LIVE_FIELDS: Array<keyof Live> = [
//   'contentId',
//   'title',
//   'description',
//   'userId',
//   'channelId',
//   'communityId',
//   'providerType',
//   'tags',
//   'tagsExact',
//   'categoryTags',
//   'viewCounter',
//   'commentCounter',
//   'openTime', // ISO8601
//   'startTime', // ISO8601
//   'liveEndTime', // ISO8601
//   'timeshiftEnabled',
//   'scoreTimeshiftReserved',
//   'thumbnailUrl',
//   'liveScreenshotThumbnailSmall',
//   'tsScreenshotThumbnailSmall',
//   'communityText',
//   'communityIcon',
//   'memberOnly',
//   'liveStatus',
// ]

export const SEARCHVIDEO_FIELDS_PARAM: FieldsParam<Video> = [
  'contentId',
  'title',
  'description',
  'userId',
  'viewCounter',
  'mylistCounter',
  'lengthSeconds',
  'thumbnailUrl',
  'startTime',
  'threadId',
  'commentCounter',
  'lastCommentTime',
  'categoryTags',
  'channelId',
  'tags',
  'lockTagsExact',
  'genre',
]

export const SEARCHLIVE_FIELDS_PARAM: FieldsParam<Live> = [
  'contentId',
  'title',
  'description',
  'userId',
  'channelId',
  'communityId',
  'providerType',
  'tags',
  'categoryTags',
  'viewCounter',
  'commentCounter',
  'openTime', // ISO8601
  'startTime', // ISO8601
  'liveEndTime', // ISO8601
  'timeshiftEnabled',
  'scoreTimeshiftReserved',
  'thumbnailUrl',
  'liveScreenshotThumbnailSmall',
  'tsScreenshotThumbnailSmall',
  'communityText',
  'communityIcon',
  'memberOnly',
  'liveStatus',
]

import axios, { AxiosError } from 'axios'
import { SEARCHVIDEO_FIELDS_PARAM, SEARCHLIVE_FIELDS_PARAM } from './const'
import {
  Live,
  SearchParams,
  Video,
  FieldsParam,
  Service,
  SearchAPIResponse,
  ErrorResponse,
  ResponseData,
} from './types'

export default class SearchAPI {
  private async search<Y extends SearchParams<T>, T extends Video | Live>(
    service: Service,
    params: Y
  ): Promise<ResponseData<T, Y['fields']>> | never {
    try {
      //@ts-ignore
      params.fields ??= getAllFields(service)

      const {
        data: { data: items },
      } = await axios.get<SearchAPIResponse<T, Y['fields']>>(
        this.url(service),
        {
          params: {
            q: params.q,
            targets: params.targets.join(),
            fields: params.fields?.join(),
            jsonFilter: params.jsonFilter,
            _sort: params.sort,
            _offset: params.offset,
            _limit: params.limit,
            _context: params.context,
          },
        }
      )

      return items
    } catch (error) {
      const { response } = error as AxiosError
      if (response) {
        const { meta } = response.data as ErrorResponse
        throw {
          name: 'NiconicoSearchAPIResponseError',
          meta,
        }
      } else {
        throw error
      }
    }
  }

  private url = (service: Service) =>
    `https://api.search.nicovideo.jp/api/v2/${service}/contents/search`

  video = <Y extends SearchParams<Video>>(params: Y) =>
    this.search<Y, Video>('video', params)
  live = <Y extends SearchParams<Live>>(params: Y) =>
    this.search<Y, Live>('live', params)
}

function getAllFields(
  service: Service
): FieldsParam<Video> | FieldsParam<Live> | never {
  switch (service) {
    case 'video':
      return SEARCHVIDEO_FIELDS_PARAM
    case 'live':
      return SEARCHLIVE_FIELDS_PARAM
    default:
      throw 'Invalid service name.'
  }
}

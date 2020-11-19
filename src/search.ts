import axios from 'axios'
import { SEARCHVIDEO_FIELDS_PARAM, SEARCHLIVE_FIELDS_PARAM } from './const'
import {
  Live,
  SearchParams,
  Video,
  VideoSerach,
  LiveSearch,
  Service,
  FieldsParam,
  SearchAPIResponse,
  ResponseData,
} from './types'

export default class SearchAPI {
  private async search<T extends Video | Live>(
    service: Service,
    params: SearchParams<T>
  ): Promise<ResponseData<T>> {
    let { targets, fields } = params

    if (!fields) {
      //@ts-ignore
      fields = getAllFields(service)
    }

    params.targets = targets.toString()
    params.fields = fields?.toString()

    const {
      data: { data },
    } = await axios.get<SearchAPIResponse<T>>(this.url(service), {
      params,
    })

    return data
  }

  private url = (service: Service) =>
    `https://api.search.nicovideo.jp/api/v2/${service}/contents/search`

  video: VideoSerach = (params) => this.search<Video>('video', params)
  live: LiveSearch = (params) => this.search<Live>('live', params)
}

function getAllFields(
  service: Service
): FieldsParam<Video> | FieldsParam<Live> {
  switch (service) {
    case 'video':
      return SEARCHVIDEO_FIELDS_PARAM
    case 'live':
      return SEARCHLIVE_FIELDS_PARAM
    default:
      throw 'Invalid service name.'
  }
}

import { request } from '@/utils/axios'
import type { GetWeatherRes } from './type'
import { HttpStatus } from '@/const/HttpStatus'

export const getSentences = async () => {
  const res = await request<GetWeatherRes>({
    method: 'GET',
    url: 'https://api.apiopen.top/api/sentences'
  })
  if (res.status === HttpStatus.Success) {
    return res.data
  }
  return null
}

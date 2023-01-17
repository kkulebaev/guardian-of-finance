import { AxiosInstance, type AxiosResponse } from 'axios'
import { IOperation } from '../../types'

const costsPrefix = '/costs'

export const costsAPI = (api: AxiosInstance) => ({
  async getOperations(): Promise<AxiosResponse<IOperation[]>> {
    return api.get(costsPrefix)
  },

  async addOperation(payload: IOperation): Promise<AxiosResponse<IOperation>> {
    return api.post(costsPrefix, payload)
  },
})

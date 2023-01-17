import { AxiosInstance, type AxiosResponse } from 'axios'
import { IOperation } from '../../types'

const costsPrefix = '/costs'

export const costsAPI = (api: AxiosInstance) => ({
  async getOperations(): Promise<AxiosResponse<IOperation[]>> {
    return api.get(costsPrefix)
  },

  async addOperation(
    payload: Omit<IOperation, 'id'>
  ): Promise<AxiosResponse<IOperation>> {
    return api.post(costsPrefix, payload)
  },

  async deleteOperation(id: string): Promise<AxiosResponse<IOperation>> {
    return api.delete(`${costsPrefix}/${id}`)
  },
})

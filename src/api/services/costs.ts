import { AxiosInstance, type AxiosResponse } from 'axios'
import { IOperationDB } from '../types/custom.types'

const costsPrefix = '/costs'

export const costsAPI = (api: AxiosInstance) => ({
  async getOperations(): Promise<AxiosResponse<IOperationDB[]>> {
    return api.get(costsPrefix)
  },

  async deleteOperation(id: string): Promise<AxiosResponse<IOperationDB>> {
    return api.delete(`${costsPrefix}/${id}`)
  },
})

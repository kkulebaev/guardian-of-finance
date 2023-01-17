import { AxiosInstance } from 'axios'
import { IOperation } from '../../types'

const costsPrefix = '/costs'

export const costsAPI = (api: AxiosInstance) => ({
  async getOperations() {
    return api.get(costsPrefix)
  },

  async addOperation(payload: IOperation) {
    return api.post(costsPrefix, payload)
  },
})

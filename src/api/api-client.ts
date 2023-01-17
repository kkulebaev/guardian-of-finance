import { apiInstance } from './api-instance'
import { costsAPI } from './services/costs'

const apiClient = {
  costs: costsAPI(apiInstance),
}

export { apiClient }

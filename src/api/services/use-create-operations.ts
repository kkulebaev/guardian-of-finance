import { useMutation } from 'react-query'
import { supabaseInstance } from '../supabase-instance'
import { OPERATIONS } from '../tables-name'
import { IOperation } from '../types/custom.types'
import { queryClient } from '../query-instance'

export function useCreateOperations() {
  return useMutation(
    async (operation: IOperation) => {
      const { data } = await supabaseInstance.from(OPERATIONS).insert(operation)
      return data
    },
    {
      onSuccess: () => queryClient.invalidateQueries(OPERATIONS),
    }
  )
}

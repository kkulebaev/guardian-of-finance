import { useMutation } from 'react-query'

import { supabaseInstance } from '../supabase-instance'
import { OPERATIONS } from '../constants'
import { queryClient } from '../query-instance'
import { IOperationDB } from '../types/custom.types'

export function useDeleteOperation() {
  return useMutation(
    async (id: string) => {
      const { data } = await supabaseInstance
        .from(OPERATIONS)
        .delete()
        .eq('id', id)
        .select()
        .single()
      return data
    },
    {
      onSuccess: deletedOperation => {
        queryClient.setQueriesData<IOperationDB[]>(
          OPERATIONS,
          oldOperations => {
            if (!deletedOperation || !oldOperations) return oldOperations ?? []
            return oldOperations.filter(x => x.id !== deletedOperation.id)
          }
        )
      },
    }
  )
}

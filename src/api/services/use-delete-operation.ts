import { useMutation } from 'react-query'

import { supabaseInstance } from '../supabase-instance'
import { OPERATIONS } from '../constants'
import { queryClient } from '../query-instance'

export function useDeleteOperation() {
  return useMutation(
    async (id: string) => {
      const { data } = await supabaseInstance
        .from(OPERATIONS)
        .delete()
        .eq('id', id)
      return data
    },
    {
      onSuccess: () => queryClient.invalidateQueries(OPERATIONS),
    }
  )
}

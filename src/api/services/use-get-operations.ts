import { useQuery } from '@tanstack/react-query'
import { supabaseInstance } from '../supabase-instance'
import { DEFAULT_STALE_TIME, OPERATIONS } from '../constants'

const QUERY_STRING = `
  id,
  family (id, name),
  month,
  categories (id, label),
  amount
 `

export function useGetOperations() {
  return useQuery(
    [OPERATIONS],
    async () => {
      const { data } = await supabaseInstance
        .from(OPERATIONS)
        .select(QUERY_STRING)
      return data
    },
    {
      staleTime: DEFAULT_STALE_TIME,
    }
  )
}

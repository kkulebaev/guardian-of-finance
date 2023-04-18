import { useQuery } from 'react-query'
import { supabaseInstance } from '../supabase-instance'
import { OPERATIONS } from '../tables-name'

const QUERY_STRING = `
  id,
  users (id, name),
  month,
  categories (id, label),
  amount
 `

export function useGetOperations() {
  return useQuery(OPERATIONS, async () => {
    const { data } = await supabaseInstance
      .from(OPERATIONS)
      .select(QUERY_STRING)
    return data
  })
}

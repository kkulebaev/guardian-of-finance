import { useQuery } from 'react-query'
import { supabaseInstance } from '../supabase-instance'
import { FAMILY } from '../tables-name'

export function useGetUsers() {
  return useQuery(FAMILY, async () => {
    const { data } = await supabaseInstance.from(FAMILY).select()
    return data
  })
}

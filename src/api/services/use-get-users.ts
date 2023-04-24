import { useQuery } from 'react-query'
import { supabaseInstance } from '../supabase-instance'
import { DEFAULT_STALE_TIME, FAMILY } from '../constants'

export function useGetUsers() {
  return useQuery(
    FAMILY,
    async () => {
      const { data } = await supabaseInstance.from(FAMILY).select()
      return data
    },
    {
      staleTime: DEFAULT_STALE_TIME,
    }
  )
}

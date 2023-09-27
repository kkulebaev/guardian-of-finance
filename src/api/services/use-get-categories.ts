import { useQuery } from '@tanstack/react-query'
import { supabaseInstance } from '../supabase-instance'
import { CATEGORIES, DEFAULT_STALE_TIME } from '../constants'

export function useGetCategories() {
  return useQuery(
    [CATEGORIES],
    async () => {
      const { data } = await supabaseInstance.from(CATEGORIES).select()
      return data
    },
    {
      staleTime: DEFAULT_STALE_TIME,
    }
  )
}

import { useQuery } from 'react-query'
import { supabaseInstance } from '../supabase-instance'
import { CATEGORIES } from '../tables-name'

export function useGetCategories() {
  return useQuery(CATEGORIES, async () => {
    const { data } = await supabaseInstance.from(CATEGORIES).select()
    return data
  })
}

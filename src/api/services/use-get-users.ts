import { useQuery } from 'react-query'
import { supabaseInstance } from '../supabase-instance'
import { USERS } from '../tables-name'

export function useGetUsers() {
  return useQuery(USERS, async () => {
    const { data } = await supabaseInstance.from(USERS).select()
    return data
  })
}

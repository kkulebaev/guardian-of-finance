import { useQuery } from '@tanstack/react-query'
import { supabaseInstance } from '../../supabase-instance'
import { DEFAULT_STALE_TIME, USER } from '../../constants'

export function useGetUser() {
  return useQuery(
    [USER],
    async () => {
      const { data } = await supabaseInstance.auth.getUser()
      return data.user
    },
    {
      staleTime: DEFAULT_STALE_TIME,
    }
  )
}

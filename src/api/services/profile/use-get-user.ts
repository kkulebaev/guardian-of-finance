import { useQuery } from 'react-query'
import { supabaseInstance } from '../../supabase-instance'
import { DEFAULT_STALE_TIME, USER } from '../../constants'

export function useGetUser() {
  return useQuery(
    USER,
    async () => {
      const {
        data: { user },
      } = await supabaseInstance.auth.getUser()
      return user
    },
    {
      staleTime: DEFAULT_STALE_TIME,
    }
  )
}

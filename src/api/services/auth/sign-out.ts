import { supabaseInstance } from '../../supabase-instance'

export async function signOut() {
  return supabaseInstance.auth.signOut()
}

import { supabaseInstance } from '../../supabase-instance'
import { Credentials } from '../../types/custom.types'

export async function signIn(creds: Credentials) {
  return supabaseInstance.auth.signInWithPassword(creds)
}

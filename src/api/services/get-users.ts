import { supabaseInstance } from '../supabase-instance'
import { USERS } from '../tables-name'

export async function getUsers() {
  return supabaseInstance.from(USERS).select()
}

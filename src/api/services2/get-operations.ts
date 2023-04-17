import { supabaseInstance } from '../supabase-instance'
import { OPERATIONS } from '../tables-name'

export async function getOperations() {
  return supabaseInstance.from(OPERATIONS).select()
}

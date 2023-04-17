import { supabaseInstance } from '../supabase-instance'
import { OPERATIONS } from '../tables-name'

export async function removeOperation(id: string) {
  return supabaseInstance.from(OPERATIONS).delete().eq('id', id)
}

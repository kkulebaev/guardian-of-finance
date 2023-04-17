import { supabaseInstance } from '../supabase-instance'
import { CATEGORIES } from '../tables-name'

export async function getCategories() {
  return supabaseInstance.from(CATEGORIES).select()
}

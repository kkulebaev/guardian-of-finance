import { createClient } from '@supabase/supabase-js'
import { Database } from './types/api.types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY

export const supabaseInstance = createClient<Database>(supabaseUrl, supabaseKey)

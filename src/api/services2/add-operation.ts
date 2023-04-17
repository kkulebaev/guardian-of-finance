import { supabaseInstance } from '../supabase-instance'
import { OPERATIONS } from '../tables-name'
import { IOperation } from '../types/custom.types'

export async function addOperation(operation: IOperation) {
  return supabaseInstance.from(OPERATIONS).insert(operation)
}

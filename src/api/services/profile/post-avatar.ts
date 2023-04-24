import { RcFile } from 'antd/es/upload/interface'
import { supabaseInstance } from '../../supabase-instance'
import { AVATARS } from '../../constants'
import { JPG_EXT } from './get-avatar'

export async function postAvatar(fileName: string, file: RcFile) {
  const { data, error } = await supabaseInstance.storage
    .from(AVATARS)
    .upload(fileName + JPG_EXT, file, {
      cacheControl: '1',
      upsert: true,
    })

  return { data, error }
}

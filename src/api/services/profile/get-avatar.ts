import { supabaseInstance } from '../../supabase-instance'
import { AVATARS } from '../../tables-name'

export const JPG_EXT = '.jpg'

export async function getAvatar(userId: string) {
  const { data: blob, error } = await supabaseInstance.storage
    .from(AVATARS)
    .download(userId + JPG_EXT)

  if (error) throw Error(error?.message)

  return URL.createObjectURL(blob)
}

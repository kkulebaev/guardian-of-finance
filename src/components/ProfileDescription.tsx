import React from 'react'
import { Descriptions } from 'antd'
import dayjs from 'dayjs'
import { User } from '@supabase/supabase-js'
import { valueOrDash } from '../utils/value-or-dash'

interface ProfileDescriptionProps {
  user: User
}

function ProfileDescription({ user }: ProfileDescriptionProps) {
  return (
    <Descriptions title="User Info" layout="vertical" bordered column={1}>
      <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
      <Descriptions.Item label="Phone">
        {valueOrDash(user.phone)}
      </Descriptions.Item>
      <Descriptions.Item label="Registration date">
        {dayjs(user.created_at).format('DD-MM-YYYY')}
      </Descriptions.Item>
    </Descriptions>
  )
}

export default ProfileDescription

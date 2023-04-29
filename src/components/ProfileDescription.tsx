import React from 'react'
import { Descriptions } from 'antd'
import dayjs from 'dayjs'
import { User } from '@supabase/supabase-js'
import { valueOrDash } from '../utils/value-or-dash'

function ProfileDescription({ user }: { user?: User | null }) {
  return (
    <Descriptions title="User Info" layout="vertical" bordered column={1}>
      <Descriptions.Item label="Email">{user?.email}</Descriptions.Item>
      <Descriptions.Item label="Phone">
        {valueOrDash(user?.phone)}
      </Descriptions.Item>
      <Descriptions.Item label="Registration date">
        {dayjs(user?.created_at).format('DD-MM-YYYY')}
      </Descriptions.Item>
    </Descriptions>
  )
}

ProfileDescription.defaultProps = {
  user: null,
}

export default ProfileDescription

import React from 'react'
import { Spin } from 'antd'
import ProfileAvatar from '../components/ProfileAvatar'
import { useGetUser } from '../api/services/profile/use-get-user'
import ProfileDescription from '../components/ProfileDescription'

function Profile() {
  const { data: user, isLoading } = useGetUser()

  if (isLoading)
    return <Spin className="flex justify-center items-center h-full" />

  return (
    <>
      <ProfileAvatar />
      <ProfileDescription user={user} />
    </>
  )
}
export default Profile

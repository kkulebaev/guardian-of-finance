import { Result, Spin } from 'antd'
import ProfileAvatar from '../components/ProfileAvatar'
import { useGetUser } from '../api/services/profile/use-get-user'
import ProfileDescription from '../components/ProfileDescription'

function Profile() {
  const { data: user, isLoading } = useGetUser()

  if (isLoading)
    return <Spin className="flex justify-center items-center h-full" />

  if (!user)
    return (
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
      />
    )

  return (
    <>
      <ProfileAvatar userId={user.id} />
      <ProfileDescription user={user} />
    </>
  )
}
export default Profile

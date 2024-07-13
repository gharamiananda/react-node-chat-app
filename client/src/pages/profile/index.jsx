import { useAppStore } from '@/store'

const ProfilePage = () => {
  const { userInfo } = useAppStore()




console.log('userInfo', userInfo)









  return <div>ProfilePage {userInfo?.email}</div>
  
}

export default ProfilePage
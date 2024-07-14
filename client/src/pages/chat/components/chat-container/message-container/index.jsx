import { useAppStore } from '@/store';
import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner';

const MessageContainer= () => {


  const navigate=useNavigate();
  const {userInfo}=useAppStore();


useEffect(()=>{
if(!userInfo?.profileSetup){
  toast.error('Please setup profile to continue!')
navigate('/profile')
}
},[userInfo,navigate])

  return (
    <div
    className='flex-1 overflow-y-auto scrolbar-hidden p-4 md:w-[65vw] lg:w-[70vw] xl:w-[80vw] w-full'
    >
      

      
      
      
      </div>
  )
}

export default MessageContainer
import { useAppStore } from '@/store';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner';

const ChatPage = () => {


  const navigate=useNavigate();
  const {userInfo}=useAppStore();


useEffect(()=>{
if(!userInfo?.profileSetup){
  toast.error('Please setup profile to continue!')
navigate('/profile')
}
},[userInfo,navigate])

  return (
    <div>ChatPage</div>
  )
}

export default ChatPage
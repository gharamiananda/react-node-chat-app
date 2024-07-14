import { useAppStore } from '@/store';
import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner';
import ChatHeader from './components/chat-header';
import MessageBar from './message-bar';
import MessageContainer from './message-container';

const ChatContainer= () => {


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
    className='fixed top-0 h-[100vh] w-[100vw] bg-[#1c1d25] flex flex-col md:static md:flex-1 '
    >
      
<ChatHeader/>
<MessageContainer/>

<MessageBar/>

      
      
      </div>
  )
}

export default ChatContainer
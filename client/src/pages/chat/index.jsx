import { useAppStore } from '@/store';
import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner';
import ContactContacain from './components/conatct-container';
import EmptyChatContainer from './components/empty-chat-container';
import ChatContainer from './components/chat-container';

const ChatPage = () => {


  const navigate=useNavigate();
  const {userInfo,



    selectChatType ,
    selectChatData,
  }=useAppStore();


useEffect(()=>{
if(!userInfo?.profileSetup){
  toast.error('Please setup profile to continue!')
navigate('/profile')
}
},[userInfo,navigate])

  return (
    <div className='flex h-[100vh] text-white overflow-hidden'>
      <ContactContacain/>

      {
        !selectChatType ? <EmptyChatContainer/> : <ChatContainer/>
      }


      {/* <EmptyChatContainer/> */}
      {/* <ChatContainer/>     */}
      
      
      </div>
  )
}

export default ChatPage
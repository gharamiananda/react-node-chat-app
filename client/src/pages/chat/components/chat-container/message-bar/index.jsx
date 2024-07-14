import { useAppStore } from '@/store';
import  { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner';

import {
  GrAttachment
} from 'react-icons/gr'
import { RiEmojiStickerLine } from 'react-icons/ri';
import { IoSend } from 'react-icons/io5';
import EmojiPicker from 'emoji-picker-react';

const MessageBar= () => {


  const navigate=useNavigate();
  const {userInfo}=useAppStore();
const emojiRef=useRef();


const [showEmoji, setShowEmoji] = useState(false)

  const [message, setMessage] = useState('')


useEffect(()=>{
if(!userInfo?.profileSetup){
  toast.error('Please setup profile to continue!')
navigate('/profile')
}
},[userInfo,navigate]);


useEffect(()=>{
  function clickOutSIde(){
if(emojiRef.current && !emojiRef.current.contains(event.target))
{

  setShowEmoji(false)
}
  }


  document.addEventListener('mousedown', clickOutSIde);

  return ()=>{
    document.removeEventListener('mousedown', clickOutSIde);
  }
},[emojiRef])


const handleSendMessage=async()=>{

}

const handleEmoji=(emoji)=>{
  console.log('emoji', emoji)
setMessage(msg=> msg+ emoji.emoji)
}

  return (
    <div

className='h-[10vh] bg-[#1c1d25] flex justify-center items-center px-8 mb-6 gap-6 '
>
      
<div className="flex-1 flex bg-[#2a2b33] rounded-md items-center gap-5 pr-5">
<input
value={message}
onChange={e=>setMessage(e.target.value)}
type="text" className='flex-1 p-5 bg-transparent rounded-md focus:outline-none' />



  
<button className='text-neutral-500 focus:border-none focus:outline-none focus:text-white  duration-300 transition-all'>
  <GrAttachment
  className='text-2xl'
  />
</button>

<div className="relative">
  
  
<button

onClick={()=>setShowEmoji(true)}
className='text-neutral-500 focus:border-none focus:outline-none focus:text-white  duration-300 transition-all'>
  <RiEmojiStickerLine
  className='text-2xl'
  />
</button>

<div

ref={emojiRef}

className="absolute bottom-16 right-0">
<EmojiPicker
theme='dark'
open={showEmoji}
onEmojiClick={handleEmoji}
autoFocusSearch={false}
/>
</div>
</div>

  
  </div>
<button 
onClick={handleSendMessage}
className='bg-[#8417ff] rounded-md flex items-center text-white p-5 focus:border-none focus:outline-none focus:text-white   hover:bg-[#741bda] focus:bg-[#741bda] duration-300 transition-all '
>
  <IoSend
  className='text-2xl'
  />
</button>
      
      
      
      </div>
  )
}

export default MessageBar
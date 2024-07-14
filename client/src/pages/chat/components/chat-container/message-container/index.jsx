import { useAppStore } from '@/store';
import moment from 'moment';
import  { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner';

const MessageContainer= () => {


  const navigate=useNavigate();
  const {userInfo,

    selectChatMessages,

    selectChatData, selectChatType,addChatMessage 
  }=useAppStore();

  const scrolleRef=useRef();

useEffect(()=>{
 if(scrolleRef.current){
  scrolleRef.current.scrollIntoView({behavior:"smooth"})
 }
},[selectChatMessages]);



const renderDmMessage=(message)=>{
return<div>

</div>
}

const renderMessages=()=>{


  let lastData=null;

  return selectChatMessages.map((message, index)=>{
    const messageDate=moment(message?.timestamp).format('YYYY-MM-DD');

    const showDate=messageDate !==lastData;

    lastData=messageDate;

    return(
      <div className="" key={index}>
{
  showDate && <div className="text-sm text-center text-gray-500 font-medium">{moment(message?.timestamp).format('LL')}</div>
}

{
  selectChatType==='contact' &&(
renderDmMessage(message)
  )
}
      </div>
    )
  })
}

  return (
    <div
    className='flex-1 overflow-y-auto scrolbar-hidden p-4 md:w-[65vw] lg:w-[70vw] xl:w-[80vw] w-full'
    >
   {   renderMessages()}

      
      <div className="" ref={scrolleRef}>

      </div>
      
      </div>
  )
}

export default MessageContainer
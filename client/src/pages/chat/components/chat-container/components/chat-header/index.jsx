import { useAppStore } from '@/store';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner';

import { RiCloseFill } from 'react-icons/ri'
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { getColor } from '@/lib/utils';

const ChatHeader = () => {


  const navigate = useNavigate();
  const { userInfo, closeChat, selectChatData ,selectChatType} = useAppStore();


  useEffect(() => {
    if (!userInfo?.profileSetup) {
      toast.error('Please setup profile to continue!')
      navigate('/profile')
    }
  }, [userInfo, navigate])

  return (
    <div
      className='h-[10vh] border-b-2 border-[#2f303b] flex items-center justify-between px-20'
    >

      <div className="flex-gap-5 items-center">
        <div className="flex gap-3 items-center justify-center">

          <div className="w-12 h-12 relative">

            <Avatar className={`h-12 w-12 rounded-full overflow-hidden ${getColor(selectChatData?.color)}`}>
              {
                selectChatData?.image ? <AvatarImage

                  className='object-cover w-full h-full bg-black' /> : <div className="uppercase h-12 w-12 text-lg border-[1px] flex items-center justify-center 

">
                  {



                    selectChatData?.firstName ? selectChatData?.firstName?.split("")?.shift() : selectChatData?.email?.split("")?.shift()
                  }
                </div>
              }


            </Avatar>
          </div>
          <div className="">


          {
            selectChatType==='contact' &&(
             
             
selectChatData?.firstName ? `${selectChatData?.firstName} ${selectChatData?.lastName} `: selectChatData?.email 
              
            )
          }
          </div>
        </div>
      </div>

      <div className="flex gap-3 items-center justify-center">

        <button className='text-neutral-500 focus:border-none focus:outline-none focus:text-white  duration-300 transition-all'>
          <RiCloseFill
            onClick={closeChat}
            className='text-3xl'
          />
        </button>
      </div>



    </div>
  )
}

export default ChatHeader
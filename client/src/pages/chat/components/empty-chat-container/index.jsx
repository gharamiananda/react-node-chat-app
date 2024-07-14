import { useAppStore } from '@/store';
import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner';

import Lottie from 'react-lottie'
import { animationDataOption } from '@/lib/utils';

const EmptyChatContainer= () => {


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
    className='flex-1 md:bg-[#1c1d25] md:flex flex-col justify-center items-center hidden duration-100 transition-all'
    >
      
      <Lottie
isClickToPauseDisabled
height={200}
width={200}
options={animationDataOption}












      />


      <div className="text-white text-white-80 flex flex-col gap-5 items-center mt-10 text-3xl duration-300 transition-all
      lg:text-4xl text-center 
      ">

        <h3 className="poppins-medium">
          Hi, <span className="text-purple-500">!</span>Welcome to 
          <span className="text-purple-500">Synronus</span>

          <span>Chat App</span>
        </h3>
      </div>
    </div>
  )
}

export default EmptyChatContainer
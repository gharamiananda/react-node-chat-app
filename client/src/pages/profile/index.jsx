import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { apiClient } from '@/lib/api-client';
import { colors, getColor } from '@/lib/utils';
import { useAppStore } from '@/store';
import { ADDUPDATE_USERIMG_ROUTE, UPDATE_USERINFO_ROUTE } from '@/utils/constants';
import { useEffect, useRef, useState } from 'react';

import {FaTrash,
  FaPlus
}
from 

'react-icons/fa'

import {
  IoArrowBack
}
from "react-icons/io5"
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
const ProfilePage = () => {
  const { userInfo ,setUserInfo} = useAppStore()


useEffect(()=>{
  if(userInfo?.email){
    setfirstName(userInfo.firstName)
    setlastName(userInfo.lastName)
    setColor(userInfo.color)
  }
},[userInfo])

console.log('userInfo', userInfo)

const [color, setColor] = useState(0)

const [hovered, sethovered] = useState(false);
const [image, setImage] = useState(null)
const [firstName, setfirstName] = useState('');
const [lastName, setlastName] = useState('');
const fileRef=useRef(null)
const handleUpdateUser=async() => {


    try {
      
      const res= await apiClient.post(UPDATE_USERINFO_ROUTE,
        {
          firstName,
          lastName,
          color
        }
        ,{
        withCredentials:true
      });
    
    if(res.data.user.email){
      setUserInfo(res.data.user)
    }else{
      setUserInfo(undefined);
    }
    
      console.log('res', res)
    } catch (error) {
      toast.error('error')
      setUserInfo(undefined);

    }
    
    
}
const navigate=useNavigate()

const handleNavigate=()=>{
if(!userInfo?.setupProfile){
  navigate('/chat')
}else{
  toast.error('Please complete your profile!')
}
}
const handleClickFile=()=>{
  fileRef.current.click();

}
const handleImageChange=async()=>{


  const file=event.target.files[0];

  if(file){
    const formData=new FormData();
    formData.append('profile-image',file);




  try {
      
    const res= await apiClient.post(ADDUPDATE_USERIMG_ROUTE,
      formData
      ,{
      withCredentials:true
    });
  
  if(res.data.user.email){
    setUserInfo(res.data.user)
  }else{
    setUserInfo(undefined);
  }

  const reader=new FileReader();
  reader.onload=()=>{
    setImage(reader.result)
  }
  
  reader.readAsDataURL(file)
    console.log('res', res)
  } catch (error) {
    toast.error('error')
    setUserInfo(undefined);

  }
  

  }


  
}


const handleDeleteImage=(event)=>{

  const file=event.target.files[0];

  if(file){
    const formData=new FormData();
    formData.append('profile-image',file)
  }

  console.log('event.target', event.target)
  
}

  return <div
  
  className='bg-[#1b1c24] h-[100vh]  flex items-center justify-center gap-10'
  >

    <div className="flex flex-col gap-10 md:w-max w-[80vw] ">
<div className="">
  <IoArrowBack 
  onClick={handleNavigate}
  
  className='text-4xl lg:text-6xl text-white/90 cursor-pointer'
  
  />


</div>


<div className="grid grid-cols-2">
<div className=" w-32 h-32  md:h-48 md:w-48 relative flex items-center justify-center overflow-hidden "


onMouseEnter={()=>sethovered(true)}
onMouseLeave={()=>sethovered(false)}

>
<Avatar    className={`h-full w-32 md:w-48 md:h-48 rounded-full overflow-hidden ${getColor(color)}`}>
{
  image ? <AvatarImage 
  
  className='object-cover w-full h-full bg-black' /> : <div className="uppercase h-32 w-32 md:w-48 md:h-48 text-5xl border-[1px] flex items-center justify-center 
  
  ">
    {
      userInfo?.firstName ? userInfo?.firstName?.split("")?.shift() : userInfo?.email?.split("")?.shift()
    }
  </div>
}

{
  hovered && (
 
    <div 
  onClick={image ?handleDeleteImage: handleClickFile }

    className='absolute inset-0    flex justify-center items-center bg-black/50 ring-fusia-500 cursor-pointer rounded-full
    '>
      {
         image ?
         <FaTrash
         
         className='text-white text-3xl cursor-pointer'
         
         />  :
         <FaPlus
         className='text-white text-3xl cursor-pointer'

                    />
      }
    </div>
  )
} 
<input type="file"
className='hidden'

ref={fileRef}
onChange={handleImageChange}
name='profile-image' accept='.png .jpg .svg' 
/>
</Avatar>


</div>

<div className="flex min-w-32 md:min-w-64 flex-col gap-5 text-white items-center justify-center ">
<div className="w-full ">
  <Input
disabled
value={userInfo?.email}
className='rounded-lg p-6 text-white bg-[#2c2e3b] border-none'

/>
</div>
<div className="w-full ">
  <Input
onChange={e=>setfirstName(e.target.value)}
value={firstName}
className='rounded-lg p-6 text-white bg-[#2c2e3b] border-none'

/>
</div><div className="w-full ">
  <Input
onChange={e=>setlastName(e.target.value)}

value={lastName}
className='rounded-lg p-6 text-white bg-[#2c2e3b] border-none'

/>
</div>
<div className="w-full flex gap-5">
{
  colors.map((c,ind)=>(
    <div
    onClick={()=>setColor(ind)}
    key={c} className={`${c} h-8 w-8 rounded-full cursor-pointer transition-all duration-300 ${
      ind ===color ? 'outline outline-white ' : ""
    }`}>

    </div>
  ))
}
</div>
</div>
</div>
<Button
onClick={handleUpdateUser}
className='h-16 w-full bg-purple-700 hover:bg-purple-500 transition-all duration-300'
>
  Save Changes
</Button>
    </div></div>
  
}

export default ProfilePage
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { apiClient } from "@/lib/api-client";
import { getColor } from "@/lib/utils";
import { useAppStore } from "@/store";
import { LOGOUT_ROUTE } from "@/utils/constants";
import { FiEdit2 } from "react-icons/fi";
import {  IoPowerSharp } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ProfileInfo = () => {
    const { userInfo ,setUserInfo} = useAppStore();

    const navigate=useNavigate();


    const logoutHandle=async() => {




    try {
      
        const res= await apiClient.post(LOGOUT_ROUTE,
          {
           
          }
          ,{
          withCredentials:true
        });
      
    
      if(res.statusCode===200){
        toast.success('Logout success')
navigate('/auth')
      }
        console.log('res', res)
      } catch (error) {
        toast.error('error')
  
      }finally{
        setUserInfo(undefined);

      }
      
    }

    return (
        <div
            className="absolute bottom-0  flex h-16 items-center justify-between px-10 w-full bg-[#2a2b33]"
        >
            <div className="flex gap-3  h-full items-center justify-center">
                <div className="w-12 h-12 relative">

                    <Avatar className={`h-12 w-12 rounded-full overflow-hidden ${getColor(userInfo?.color)}`}>
                        {
                            userInfo?.image ? <AvatarImage

                                className='object-cover w-full h-full bg-black' /> : <div className="uppercase h-12 w-12 text-lg border-[1px] flex items-center justify-center 
  
  ">
                                {
                                    userInfo?.firstName ? userInfo?.firstName?.split("")?.shift() : userInfo?.email?.split("")?.shift()
                                }
                            </div>
                        }


                    </Avatar>
                </div>
                    <div className="text-white text-sm">
                        {userInfo?.firstName} {userInfo?.lastName}
                        
    
    </div>

            </div>
            <div className="flex gap-5">
            <TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
        <FiEdit2 
    onClick={()=>navigate('/profile')}
        className="text-purple-500 text-xl font-medium"
        />
    </TooltipTrigger>
    <TooltipContent
    className=''
    >
      <p>Edit Profile</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
        <IoPowerSharp 

    onClick={logoutHandle}
        className="text-red-500 text-xl font-medium"
        />
    </TooltipTrigger>
    <TooltipContent
    className=''
    >
      <p>Edit Profile</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

            </div>
        </div>
    )
}

export default ProfileInfo
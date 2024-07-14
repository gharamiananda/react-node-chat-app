import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { apiClient } from "@/lib/api-client";
import { getColor } from "@/lib/utils";
import { useAppStore } from "@/store";
import { CONTACTLIST_ROUTE, LOGOUT_ROUTE } from "@/utils/constants";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import {  IoPowerSharp } from "react-icons/io5";
import { ScrollArea } from "@/components/ui/scroll-area"
import Lottie from 'react-lottie'
import { animationDataOption } from '@/lib/utils';


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

const NewDm = () => {
    const { userInfo ,setUserInfo,


      setSelectedChatType,
      setSelectedChatData
    } = useAppStore();


    const navigate=useNavigate();



    const [searchContactsList, setSetsearchContactsList] = useState([])


    const searchContact=async(searchText) => {




    try {
      
        const res= await apiClient.post(CONTACTLIST_ROUTE,
          {
          searchTerm:  searchText
          }
          ,{
          withCredentials:true
        });
      
    
      if(res.data?.contacts?.length>0){
// navigate('/auth')
setSetsearchContactsList(res.data?.contacts)
      }
        console.log('res', res)
      } catch (error) {
        toast.error('error')
  
      }finally{
        // setUserInfo(undefined);
      }
      
    }

    const [openContactModal, setOpenContactModal] = useState(false);


    const handleSelectNewContact =async(
contact
    ) => {
      setOpenContactModal(false)
setSetsearchContactsList([]);

setSelectedChatType('contact');
setSelectedChatData(contact);

    }

    return (
     <>
     
           
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
        <FaPlus 

    onClick={()=>setOpenContactModal(true)}
        className="text-neutral-400 font-light text-opacity-90 hover:text-neutral-100 text-xl duration-300 transition-all"
        />
    </TooltipTrigger>
    <TooltipContent
    className='bg-[#1c1b1e] border-none mb-2 p-3 text-white'
    >
      <p>Edit Profile</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>



<Dialog open={openContactModal} onOpenChange={setOpenContactModal}>
  <DialogContent className='bg-[#181920] border-none mb-2 text-white h-[400px] w-[400px] flex flex-col' >
    <DialogHeader>
      <DialogTitle>Please select a contact</DialogTitle>
      <DialogDescription> </DialogDescription>
    </DialogHeader>
    <div className="">
          <Input type="text" 
          
          onChange={(e)=>searchContact(e.target.value)}
          placeholder="Search contacts" className="rounded-lg p-6 bg-[#2c2e3b] border-none" />
        </div>

        {
          searchContactsList.length > 0 


          ?
<ScrollArea className='h-[250px]'>

<div className="flex flex-col gap-5 ">
{
  searchContactsList.map((contact)=>(<div key={contact?._id}
  
  onClick={()=>handleSelectNewContact(contact)}
  className="flex cursor-pointer items-center gap-3">

<div className="w-12 h-12 relative">

<Avatar className={`h-12 w-12 rounded-full overflow-hidden ${getColor(contact?.color)}`}>
    {
        contact?.image ? <AvatarImage

            className='object-cover w-full h-full bg-black' /> : <div className="uppercase h-12 w-12 text-lg border-[1px] flex items-center justify-center 

">
            {
                contact?.firstName ? contact?.firstName?.split("")?.shift() : contact?.email?.split("")?.shift()
            }
        </div>
    }


</Avatar>
</div>
<div className="flex flex-col">
  <span>
    {
                      contact?.firstName ? `${contact?.firstName} ${contact?.lastName} `: contact?.email 

    }
  </span>
  <span className="text-xs">
    {
      contact?.email
    }
  </span>
</div>
  </div>))
}
</div>

</ScrollArea>

          :


          <div
          className='flex-1 md:bg-[#1c1d25] md:flex flex-col justify-center items-center hidden duration-100 transition-all'
          >
            
            <Lottie
      isClickToPauseDisabled
      height={100}
      width={100}
      options={animationDataOption}
      
      
      
      
      
      
      
      
      
      
      
      
            />

<div className="text-white text-white-80 flex flex-col gap-5 items-center mt-10 text-xl duration-300 transition-all
      lg:text-2xl text-center 
      ">

        <h3 className="poppins-medium">
          Hi, <span className="text-purple-500">!</span>Search  new 
          <span className="text-purple-500"> Contact</span>

        
        </h3>
      </div>
    

            </div>
        }
  </DialogContent>
</Dialog>

     </>
    )
}

export default NewDm
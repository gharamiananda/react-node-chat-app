
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import victoryImg from "../../assets/victory.svg"
import login2Img from "../../assets/login2.png"

import { useState } from "react"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { apiClient } from "@/lib/api-client";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "@/utils/constants";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/store";

const AuthPage = () => {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [confrimPassword, setconfrimPassword] = useState('');
  const { setUserInfo } = useAppStore();

  const navigate=useNavigate();

    const handleLogin=async() => {
      try {
        
      const res=await apiClient.post(LOGIN_ROUTE,{
        email,
        password
      },{
        withCredentials: true,
      });
if(res?.data?.token){
  toast.success(res?.data?.message);
console.log('res?.data?.user', res?.data?.user)

  setUserInfo(res?.data?.user)
  const navigateUrl=res?.data?.user?.profileSetup ? '/chat' :'/profile'
  navigate(navigateUrl)
}

      console.log(res)
      } catch (error) {
        toast.error('Error') 
         }
    };
    const handleSignup=async() => {

      try {


        const res=await apiClient.post(SIGNUP_ROUTE,{
          email,
          password
        },{
          withCredentials: true,
        });
  
        console.log(res)

if(res?.data?.token){
  toast.success(res?.data?.message);
console.log('res?.data?.user', res?.data?.user)

  setUserInfo(res?.data?.user)
    const navigateUrl=res?.data?.user?.profileSetup ? '/chat' :'/profile';

  navigate(navigateUrl)
}

        
      } catch (error) {
        toast.error('Error') 
        
      }

     
    
    };


  return (
    <div
    
    className='h-[100vh] w-[100vw] flex justify-center items-center'
    >
        <div className=" h-[80vh]  border-2 border-white  w-[80vw] shadow-2xl rounded-3xl text-opacity-90 md:w-[90vw] lg:w-[70vw] xl:w-[60vw] 
        
        grid xl:grid-cols-2
        ">
            <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
<h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
<img src={victoryImg} alt="victory" className="h-[100px]" />
</div>
<p className="font-medium text-center">Fill in the details to get started chat with best App!</p>



<div className="flex items-center justify-center w-full">
<Tabs defaultValue="login" className="w-3/4">
  <TabsList className='bg-transparent rounded-none w-full'>
    <TabsTrigger value="login"  className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold 
    
    data-[state=active]:border-b-purple-500 p-3 transition-all
    '>Login</TabsTrigger>
    <TabsTrigger value="signup"
    
    className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold 
    
    data-[state=active]:border-b-purple-500 p-3 transition-all
    '
    >Signup</TabsTrigger>
  </TabsList>
  <TabsContent value="login" className='flex flex-col gap-5 mt-10'>
    <Input 
    
    placeholder='Email'
    className='rounded-full p-6' value={email} onChange={e=>setEmail(e.target.value)}    />

<Input 
    
    placeholder='Password'
    className='rounded-full p-6' value={password} onChange={e=>setpassword(e.target.value)}    />
    <Button  className='rounded-full p-6' onClick={handleLogin}>Login</Button>

  </TabsContent>
  <TabsContent value="signup" className='flex flex-col gap-5'>
    <Input 
    
    placeholder='Email'
    className='rounded-full p-6' value={email} onChange={e=>setEmail(e.target.value)}    />

<Input 
    
    placeholder='Password'
    className='rounded-full p-6' value={password} onChange={e=>setpassword(e.target.value)}    />

<Input 
    
    placeholder='Confirm Password'
    className='rounded-full p-6' value={confrimPassword} onChange={e=>setconfrimPassword(e.target.value)}    />
    <Button onClick={handleSignup}  className='rounded-full p-6'>Signup</Button>
  </TabsContent>
</Tabs>
</div>
            </div>


            <div className=" justify-center items-center hidden xl:flex">
            <img src={login2Img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AuthPage
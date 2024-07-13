/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Auth from './pages/auth'
import ProfilePage from './pages/profile'
import Chat from './pages/chat'
import { useAppStore } from './store'
import { useEffect, useState } from 'react'
import { apiClient } from './lib/api-client'
import { toast } from 'sonner'
import { GET_USERINFO_ROUTE } from './utils/constants'



const PrivateRoute  = ({ children }) => {
  const { userInfo } = useAppStore()


      if (!userInfo?.email) return <Navigate to="/auth"  />

      return children;
    }




const AuthRoute  = ({ children }) => {
  const { userInfo } = useAppStore()


      if (userInfo?.email) return <Navigate to="/chat"  />

      return children;
    }

const App=()=>{

  const [loading, setLoading] = useState(true)
  
  const { userInfo ,setUserInfo} = useAppStore()


  useEffect(()=>{



    const getUserInfo=async()=>{
try {
  
  const res= await apiClient.get(GET_USERINFO_ROUTE,{
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

}finally{
  setLoading(false)
}
    };

    if(!userInfo?.email){
      getUserInfo()
    }else{
      setLoading(false)
    }
  },[userInfo])
  
  
  
  return(

    loading
    ?


<p>Loading.....</p>


    :
  <BrowserRouter>
    <Routes>
      <Route path="/auth" element={

        <AuthRoute>
          <Auth />
        </AuthRoute>} />
      <Route path="/chat" element={
        <PrivateRoute>


          <Chat />
        </PrivateRoute>
        
        
        
        } />
      <Route path="/profile" element={
        
        <PrivateRoute>


        <ProfilePage />
      </PrivateRoute>
        
        } />
      <Route path="*" element={<Navigate to="auth" />} />

    </Routes>
  </BrowserRouter>)
  

}

export default App
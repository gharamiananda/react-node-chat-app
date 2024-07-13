import { BrowserRouter, Routes ,Route, Navigate} from 'react-router-dom'
import Auth from './pages/auth'
import ProfilePage from './pages/profile'
import Chat from './pages/chat'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/auth" element={<Auth />} />
      {/* <Route path="/auth" element={<Auth />} /> */}
      <Route path="/chat" element={<Chat />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="auth"  />} />

      </Routes>
      </BrowserRouter>)}

      export default App
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'sonner'
import { SocketContextProvider } from './context/socketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SocketContextProvider>
    <App />

    <Toaster closeButton  ></Toaster>

    </SocketContextProvider>

)

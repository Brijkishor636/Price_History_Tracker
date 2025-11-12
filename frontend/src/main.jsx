import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from "@react-oauth/google"
import { ToastContainer } from "react-toastify"
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const clientId = import.meta.env.VITE_CLIENT_ID;
// console.log(clientId); 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <GoogleOAuthProvider clientId={clientId}>
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)

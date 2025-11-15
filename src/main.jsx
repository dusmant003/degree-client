import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Outlet />
    <ToastContainer position="top-right" reverseOrder={false} />
    <App />
  </BrowserRouter>,
)

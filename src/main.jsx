import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import { router } from './routes'

import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyle />
    <ToastContainer autoClose={2000} theme='colored'/> 
  </StrictMode>,
)

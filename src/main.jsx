import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { RouterProvider } from 'react-router-dom'
import 'react-tabs/style/react-tabs.css'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './Providers/AuthProvider.jsx'
import routes from './Route/Routes.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl mx-auto'>
      <AuthProvider >
          <HelmetProvider>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={routes}></RouterProvider>
                </QueryClientProvider>
              <ToastContainer />
          </HelmetProvider>
        </AuthProvider>
  </div>
)

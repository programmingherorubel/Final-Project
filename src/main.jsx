import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './Route/Routes.jsx'
import './index.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl mx-auto'>
        <HelmetProvider>
            <RouterProvider router={routes}>
            </RouterProvider>
        </HelmetProvider>
  </div>
)

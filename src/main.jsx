import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {AppRouter} from './routes/appRouter.jsx'

createRoot(document.getElementById('root')).render(
   <RouterProvider router={AppRouter} />
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout.jsx'

import Home from './components/Home/Home.jsx'
import Timeline from './components/Timeline/Timeline.jsx'
import Stats from './components/Stats/Stats.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout> </RootLayout>,
    children: [
     {
       index: true,
      element: <Home></Home>,
        loader: async () => {
          const res = await fetch("/friends.json");
          return res.json();
        },
     },
     {
      path: "timeline",
      element: <Timeline></Timeline>
     },
     {
      path: "stats",
      element: <Stats></Stats>
     }
    ]
    
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}>
 </RouterProvider>
  </StrictMode>,
)

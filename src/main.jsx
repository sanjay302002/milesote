import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Slider from '/src/components/Slider.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import BuildAssistance from './components/BuildAssistance.jsx'
import Landing_3 from './components/Landing_3.jsx'
import Milestone from './components/Milestone.jsx'
import Form from './components/Form.jsx'
import Copyright from './components/Copyright.jsx'
import Navigation from './components/Navigation.jsx'
import Contact from './components/Contact.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
    
      {
        path:"/Slider",
        element:<Slider/>
      },
      {
        path:"/BuildAssistance",
        element:<BuildAssistance/>
      },
      {
        path:"/Milestone",
        element:<Milestone/>
      },
      {
        path:"/Form",
        element:<Form/>
      },{
        path:"Copyright",
        element:<Copyright/>
      },
      {
        path:"Navigation",
        element:<Navigation/>
      },
      {
        path:"/Landing_3",
        element:<Landing_3/>
      }
      ,{
        path:"Contact",
        element:<Contact/>
      }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

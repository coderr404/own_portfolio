import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
// import Header from './component/Header.jsx'
import Login from './component/Login.jsx'
import LayOut from './component/LayOut.jsx'
import SignUp from './component/SignUp.jsx'
// import Project from './component/MyProject.jsx'
// import About from './component/About.jsx'
// import Home from './component/Home.jsx'


const router = createBrowserRouter([
  {
    element: <LayOut />,
    children:[
      {
        path: "/",
        element: <App />,
      },
      // {
      //   path: "/",
      //   element: <Project />,
      // },
      {
        path: "/Login",
        element: <Login />
      },
    ]

  },
 {
    path: "/SignUp",
    element: <SignUp />
      
  },
 
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
    // <App/>
)

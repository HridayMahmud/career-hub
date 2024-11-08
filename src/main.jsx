import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Error from './Components/Errorpage/Error.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Appliedjobs from './Components/Appliedjobs/Appliedjobs.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Root from './Components/Root/Root.jsx';

import Featurejobsdata from './Components/Featurejobsdata/Featurejobsdata.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/Statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'appliedjobs',
        element:<Appliedjobs></Appliedjobs>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },{
        path:'/jobsdata',
        element:<Featurejobsdata></Featurejobsdata>
      }
    ]
    // other routes
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

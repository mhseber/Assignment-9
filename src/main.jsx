import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRouter from './Router/MainRouter.jsx';
import Home from './components/Layout/Home.jsx';
import UpdateProfile from './components/Layout/UpdateProfile.jsx';
import UserProfile from './components/Layout/UserProfile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRouter></MainRouter>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "updateProfile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "userProfile",
        element: <UserProfile></UserProfile>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

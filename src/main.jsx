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
import AuthLayout from './components/Layout/AuthLayout.jsx';
import Login from './components/Pages/Login.jsx';
import Register from './components/Pages/Register.jsx';

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
      },

    ],

  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "*",
        element: <h1>Error</h1>
      },
    ],
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

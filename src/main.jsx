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
import UpdateProfile from './components/Layout/Details.jsx';
import UserProfile from './components/Layout/Contact.jsx';
import AuthLayout from './components/Layout/AuthLayout.jsx';
import Login from './components/Pages/Login.jsx';
import Register from './components/Pages/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Details from './components/Layout/Details.jsx';
import Contact from './components/Layout/Contact.jsx';
import ExploreNow from './components/Pages/ExploreNow.jsx';


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
        path: "exploreNow",
        element: <ExploreNow></ExploreNow>
      },

      {
        path: "details",
        element: <Details></Details>
      },
      {
        path: "contact",
        element: <Contact></Contact>
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)

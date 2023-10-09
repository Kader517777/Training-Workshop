import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthContext from './Provider/AuthContext';
import PrivateRoute from './Route/PrivateRoute';
import Workshop from './Pages/Workshop/Workshop';
import Webinar from './Pages/Webinar/Webinar';
import DetailsService from './Pages/DetailsService/DetailsService';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/:id',
        element: <PrivateRoute><DetailsService></DetailsService></PrivateRoute>,
      },
      {
        path: '/workshop',
        element: <PrivateRoute><Workshop></Workshop></PrivateRoute>,
      },
      {
        path: '/webinar',
        element: <PrivateRoute><Webinar></Webinar></PrivateRoute>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>,
)

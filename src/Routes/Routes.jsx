import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/Error/ErrorPage";
import AvailAbleRooms from "../pages/Home/AvailableRooms/AvailAbleRooms";

import Mybooking from "../pages/Shared/Mybooking/Mybooking";
import PrivateRoutes from "./PrivateRoute";
import Details from "../pages/Home/Details/Details";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/room')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
          path: '/rooms',
          element: <AvailAbleRooms></AvailAbleRooms>,
          // loader: () => fetch('http://localhost:5000/availableRooms')
        },
        // {
        //   path: '/details',
        //   element: <Details></Details>,
        //   loader: () => fetch('<Details></Details>,')
        // },
        {
          path: '/details/:id',
          element: <Details></Details>,
          loader: ({params}) => fetch(`http://localhost:5000/availableRooms/${params.id}`)
        },
        {
          path: '/mybooking',
          element: <PrivateRoutes><Mybooking></Mybooking></PrivateRoutes>
        }
      ]
    },
  ]);
  

  export default router;
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
import BookingsAll from "../pages/BookingsAll/BookingsAll";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://hotel-room-server-kappa.vercel.app/room')
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
        },
        {
          path: '/details/:id',
          element: <Details></Details>,
          loader: ({params}) => fetch(`https://hotel-room-server-kappa.vercel.app/availableRooms/${params.id}`)
        },
        {
          path: '/mybooking',
          element: <PrivateRoutes><Mybooking></Mybooking></PrivateRoutes>
        },
        {
          path: '/book/:id',
          element: <BookingsAll></BookingsAll>,
          loader: ({params}) => fetch(`https://hotel-room-server-kappa.vercel.app/availableRooms/${params.id}`)
        }
      ]
    },
  ]);
  

  export default router;
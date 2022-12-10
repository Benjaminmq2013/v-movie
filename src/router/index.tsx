import Home from "../views/home"
import Login from "../views/login"
import Favorites from "../views/favorites"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home /> 
    },
    {
      path: "/login",
      element: <Login/> 
    },
    {
      path: "/favorites",
      element: <Favorites/> 
    },
])



const Router = () => {
  return <RouterProvider router={ router } />
}

export default Router
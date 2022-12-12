import Home from "../views/home"
import Login from "../views/login"
import Favorites from "../views/favorites"
import Details from "../views/details"
import ProtectedRoute from "../components/protectedRoute"

import { Routes, Route, BrowserRouter } from "react-router-dom"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route index element={
          <ProtectedRoute> 
            <Home /> 
          </ProtectedRoute> 
        } />

        <Route path="home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }/>

        <Route path="login" element={<Login />} />

        <Route path="favorites" element={
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        } />

        <Route path="details:movieId" element={
          <ProtectedRoute>
            <Details />
          </ProtectedRoute>
        } />

      </Routes>

    </BrowserRouter>
  )
}

export default Router
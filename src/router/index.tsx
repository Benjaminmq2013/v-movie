import Home from "../views/home"
import Login from "../views/login"
import Favorites from "../views/favorites"
import NotFound from "../views/error 404"
import Details from "../views/details"
import ProtectedRoute from "../components/protectedRoute"

import { Routes, Route, BrowserRouter } from "react-router-dom"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route index element={
          <ProtectedRoute protectFrom="not-authenticated" redirect="/login" > 
            <Home /> 
          </ProtectedRoute> 
        } />

        <Route path="home" element={
          <ProtectedRoute protectFrom="not-authenticated" redirect="/login" >
            <Home />
          </ProtectedRoute>
        }/>

        <Route path="login" element={
          <ProtectedRoute protectFrom="authenticated" redirect="/" >
            <Login />
          </ProtectedRoute>
        } />

        <Route path="favorites" element={
          <ProtectedRoute protectFrom="not-authenticated" redirect="/login" >
            <Favorites />
          </ProtectedRoute>
        } />

        <Route path="details:movieId" element={
          <ProtectedRoute protectFrom="not-authenticated" redirect="/login" >
            <Details />
          </ProtectedRoute>
        } />

        <Route path="*" element={
          <ProtectedRoute protectFrom="not-authenticated" redirect="/login" >
            <NotFound />
          </ProtectedRoute>
        } />
        

      </Routes>

    </BrowserRouter>
  )
}

export default Router
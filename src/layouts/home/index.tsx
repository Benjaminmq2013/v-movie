import Button from "../../components/button"
import Header from "../../components/Header"
import Input from "../../components/input"
import { useLocation, useMatch, useNavigate, useNavigation } from "react-router-dom";
import "./index.css"

export interface params{
    children: JSX.Element | JSX.Element[]
}

const HomeLayout = (params:params):JSX.Element => {

  const Navigate = useNavigate()
  const Location = useLocation()

  const handleNavigateHome = () => Navigate("/")
  const handleNavigateFavorites = () => Navigate("/favorites")

  return (
    <div className="home-container">
        <Header className="home-header" />
        <div className="home-searchbar__container">
          <Input className="home-searchbar" placeholder="Search a movie..." />

        </div>

        <div className="home-wrapper" >
          <div className="home-menu">
            <h4 className="home-menu__title" >Menu</h4>
            <Button icon="icons/home/popular.svg" title="Popular" className={`home-nav__button ${Location.pathname === "/" ? "home-active_btn" : ""}`} onClick={ handleNavigateHome } />
            <Button icon="icons/home/star.svg" title="Favorites" className={`home-nav__button ${Location.pathname === "/favorites" ? "home-active_btn" : ""}`} onClick={ handleNavigateFavorites } />
          </div>

          { params.children }
        </div>
    </div>
  )
}

export default HomeLayout
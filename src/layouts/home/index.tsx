
import Button from "../../components/button"
import Header from "../../components/Header"
import Input from "../../components/input"
import searchMovie from '../../middleware/searchMovie';

import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { SearchContext } from '../../context/searchContext';
import { useDispatch } from 'react-redux';
import { setLogOut } from "../../store/auth";
import useSession from '../../hooks/useSession';

import "./index.css"
import "./responsive.css"
import LoadingIcon from '../../components/loading/index';

export interface params{
  children: JSX.Element | JSX.Element[],
}

const HomeLayout = (params:params):JSX.Element => {

  const { handleRemoveSession } = useSession()

  const dispatch = useDispatch()

  const Navigate = useNavigate()
  const Location = useLocation()

  const handleNavigateHome = () => Navigate("/")
  const handleNavigateFavorites = () => Navigate("/favorites")

  const { isLoading, handleSearch } = searchMovie("search/movie")
  
  const { value, setValue } = useContext(SearchContext)
  const setText = (input: string) => setValue(input)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSearch(value)
  }

  const handleLogOut = () => {
    // Redux Storage
    dispatch(setLogOut())
    
    // Local Storage
    handleRemoveSession()
    
  }
  

  return (
    <div className="home-container">
        <Header className="home-header" />
        <form className="home-searchbar__container" onSubmit={ handleSubmit } >
          <Input className="home-searchbar" placeholder="Search a movie..." value ={ value } setValue = { setText } />
          <Button className="home-search_button" icon="/icons/home/search.svg" />
          <Button className="home-search_button results-tag logout-btn" icon="/icons/home/logout.svg" title="Log Out" onClick={handleLogOut} type="button" />
        </form>

        <div className="home-wrapper" >
          <div className="home-menu">
            <h4 className="home-menu__title" >Menu</h4>
            <Button icon="icons/home/popular.svg" title="Popular" className={`home-nav__button ${Location.pathname === "/" ? "home-active_btn" : ""}`} onClick={ handleNavigateHome } />
            <Button icon="icons/home/star.svg" title="Favorites" className={`home-nav__button ${Location.pathname === "/favorites" ? "home-active_btn" : ""}`} onClick={ handleNavigateFavorites } />
          </div>

          { params.children }
        </div>

        { isLoading === true ? <LoadingIcon /> : <></>}
    </div>
  )
}

export default HomeLayout
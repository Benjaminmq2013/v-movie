import "./index.css"
import "../../layouts/home/responsive.css"
import HomeLayout from "../../layouts/home"
import Button from "../../components/button"
import useFavorites from "../../hooks/useFavorites"
import { T } from "../../interfaces";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../store";
import { useContext } from 'react';
import { SearchContext } from '../../context/searchContext';
import { setSearchMovies } from "../../store/movies"


const NotFound = () => {

  let data: T.Movies[] | T.MovieDetails[] = []

  const Movies:T.Movies[] = useSelector((state: RootState) => state.movieSlice.searchMovies)

  const dispatch = useDispatch()

  const handleRemoveSearch = () => dispatch(setSearchMovies([]))
  
  const { favorites } = useFavorites()
  
  
  // If there are results from a search, they will be displayed. Otherwise Favorite Movies will be displayed.
  if(Movies.length >= 1) data = Movies
  else if(favorites !== null) data = favorites

  const { value } = useContext(SearchContext)
  
  return (
    <HomeLayout>
      <div className="home-catalogue__container">

        <div className="results-row">
          <h2>{Movies.length >= 1 ? "Search results:" : "Not Found" }</h2>

          { Movies.length >= 1 && 
          <Button 
            className="home-search_button results-tag" 
            icon="/icons/home/close.svg" 
            title={value} 
            onClick={handleRemoveSearch} 
          />}
          
        </div>

        <div className="home-catalogue not-found__container">
          <img src="icons/404/not-found.svg" alt="Not Found" className="not-found__image" />
          <h5 className="not-found__title">No results were found for this search</h5>
          <h6 className="not-found__subtitle" >But stay tuned! <br />
            We add new content every week</h6>
        </div>
      </div>      
    </HomeLayout>
  )
}

export default NotFound
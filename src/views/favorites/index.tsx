import "./index.css"
import HomeLayout from "../../layouts/home"
import Card from "../../components/card"
import Button from "../../components/button"
import useFavorites from "../../hooks/useFavorites"
import { useNavigate } from 'react-router-dom';
import { T } from "../../interfaces";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../store";
import { useContext } from 'react';
import { SearchContext } from '../../context/searchContext';
import { setSearchMovies } from "../../store/movies"


const Favorites = () => {

  let data: T.Movies[] | T.MovieDetails[] = []

  const Movies:T.Movies[] = useSelector((state: RootState) => state.movieSlice.searchMovies)

  const dispatch = useDispatch()

  const handleRemoveSearch = () => dispatch(setSearchMovies([]))
  
  const { favorites } = useFavorites()
  const navigate = useNavigate()
  const handleNavigate = (movieId: string) => navigate(`/details&${movieId}`)
  
  // If there are results from a search, they will be displayed. Otherwise Favorite Movies will be displayed.
  if(Movies.length >= 1) data = Movies
  else if(favorites !== null) data = favorites

  const { value } = useContext(SearchContext)
  
  return (
    <HomeLayout>
      <div className="home-catalogue__container">

        <div className="results-row">
          <h2>{Movies.length >= 1 ? "Search results:" : "Favorites" }</h2>

          { Movies.length >= 1 && 
          <Button 
            className="home-search_button results-tag" 
            icon="/icons/home/close.svg" 
            title={value} 
            onClick={handleRemoveSearch} 
          />}
          
        </div>

        <div className="home-catalogue">
          {data.map(movie => (
            <Card 
              key={movie.id}
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
              title={ movie.title } 
              subtitle={ movie.release_date } 
              description={ movie.overview }
              onClick={ () => handleNavigate(`${movie.id}`) }
            />
          ))}
        </div>
      </div>
    </HomeLayout>
  )
}

export default Favorites
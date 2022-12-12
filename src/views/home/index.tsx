import "./index.css"
import HomeLayout from "../../layouts/home"
import Card from "../../components/card"
import Button from "../../components/button"
import useGetData from '../../hooks/useGetData';
import { useNavigate } from 'react-router-dom';
import { T } from "../../interfaces";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/index';
import { useContext } from 'react';
import { SearchContext } from '../../context/searchContext';
import { setSearchMovies } from "../../store/movies";
import LoadingIcon from '../../components/loading/index';

const Home = () => {

  const SearchMovies:T.Movies[] = useSelector((state: RootState) => state.movieSlice.searchMovies)
  const { value } = useContext(SearchContext)

  const dispatch = useDispatch()
  const handleRemoveSearch = () => dispatch(setSearchMovies([]))

  let data: T.Movies[] = []

  const { Movies, isLoading } = useGetData("movie/popular")
  const navigate = useNavigate()
  const handleNavigate = (movieId: string) => navigate(`details&${movieId}`)

  // If there are results from a search, they will be displayed. Otherwise Popular Movies will be displayed.
  if(SearchMovies.length >= 1) data = SearchMovies
  else data = Movies

  return (
    <HomeLayout>
      <div className="home-catalogue__container">

        <div className="results-row">
          <h2>{SearchMovies.length >= 1 ? "Search results:" : "Popular" }</h2>

          { SearchMovies.length >= 1 && 
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

      { isLoading === true ? <LoadingIcon /> : <></>}
    </HomeLayout>
  )
}

export default Home
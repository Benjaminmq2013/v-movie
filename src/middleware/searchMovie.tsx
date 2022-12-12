// The initial request to get movies
import { T } from "../interfaces/index"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setLoading, setSearchMovies } from "../store/movies"
import fetchData from "../api/fetchData";


const searchMovie = (endpoint: string) => {
  
  const dispatch = useDispatch()
  
  const isLoading:boolean = useSelector((state: RootState) => state.movieSlice.loading )  
  
  const handleSetMovies = (movies: T.Movies[]) => dispatch(setSearchMovies(movies));
  const handleLoading = (loading: boolean) => dispatch(setLoading(loading))
  
  
  const handleSearch = (inputSearch: string) => {fetchData<{pages:number, results: T.Movies[]}>(
    { entryPoint: endpoint, onLoading: (loading: boolean) => handleLoading(loading), params:{ query: inputSearch } },
    { setData: ({results, pages}) => handleSetMovies(results) }
    )}

    return { isLoading, handleSearch }
}

export default searchMovie
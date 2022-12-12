// The initial request to get movies
import { T } from "../interfaces/index"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setLoading, setMovies } from "../store/movies"
import fetchData from "../api/fetchData";
import { useEffect } from 'react';



const useGetData = (endpoint: string) => {

  const dispatch = useDispatch()
  
  const Movies:T.Movies[] = useSelector((state: RootState) => state.movieSlice.movies)
  const isLoading:boolean = useSelector((state: RootState) => state.movieSlice.loading )  

  const handleSetMovies = (movies: T.Movies[]) => dispatch(setMovies(movies));
  const handleLoading = (loading: boolean) => dispatch(setLoading(loading))

  const getProducts = () => fetchData<{pages:number, results: T.Movies[]}>(
    { entryPoint: endpoint, onLoading: (loading: boolean) => handleLoading(loading) },
    { setData: ({results, pages}) => handleSetMovies(results) }
  )

  useEffect(() => {
    getProducts()
  }, [])

  return { Movies, isLoading }
}

export default useGetData
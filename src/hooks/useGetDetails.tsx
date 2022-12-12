// The initial request to get movie details
import { T } from "../interfaces/index"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setLoading, setDetails } from "../store/movies"
import fetchData from "../api/fetchData";
import { useEffect } from 'react';


const useGetDetails = (endpoint: string,) => {
    

    const dispatch = useDispatch()
    
    const Details:T.MovieDetails = useSelector((state: RootState) => state.movieSlice.details)
    const isLoading:boolean = useSelector((state: RootState) => state.movieSlice.loading )  
  
    const handleSetDetails = (Details: T.MovieDetails) => dispatch(setDetails(Details));
    const handleLoading = (loading: boolean) => dispatch(setLoading(loading))
  
    const getDetails = () => fetchData<T.MovieDetails>(
      { entryPoint: endpoint, onLoading: (loading: boolean) => handleLoading(loading) },
      { setData: (details:T.MovieDetails) => handleSetDetails(details) }
    )
  
    useEffect(() => {
        getDetails()
    }, [endpoint])

    return { Details, isLoading }
}

export default useGetDetails
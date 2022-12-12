// The initial request to get movies Credits
import { T } from "../interfaces/index"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setLoading, setCredits } from "../store/movies"
import fetchData from "../api/fetchData";
import { useEffect } from 'react';


const useGetCredits = (endpoint: string,) => {

    const dispatch = useDispatch()
    
    const Credits:T.MovieCredits = useSelector((state: RootState) => state.movieSlice.credits)
    const isLoading:boolean = useSelector((state: RootState) => state.movieSlice.loading )  
  
    const handleSetCredits = (Credits: T.MovieCredits) => dispatch(setCredits(Credits));
    const handleLoading = (loading: boolean) => dispatch(setLoading(loading))
  
    const getCredits = () => fetchData<T.MovieCredits>(
      { entryPoint: endpoint, onLoading: (loading: boolean) => handleLoading(loading) },
      { setData: (Credits:T.MovieCredits) => handleSetCredits(Credits) }
    )
  
    useEffect(() => {
        getCredits()
    }, [])

    return { Credits, isLoading }
}

export default useGetCredits
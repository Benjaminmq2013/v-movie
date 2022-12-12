// The initial request to get movies Recommendations
import { T } from "../interfaces/index"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setLoading, setRecommendations } from "../store/movies"
import fetchData from "../api/fetchData";
import { useEffect } from 'react';


const useGetRecommendations = (endpoint: string,) => {

  const dispatch = useDispatch()
  
  const Recommendations = useSelector((state: RootState) => state.movieSlice.recommendations)
  const isLoading:boolean = useSelector((state: RootState) => state.movieSlice.loading )  

  const handleSetRecommendations = (Recommendations: T.RecommendationsData) => dispatch(setRecommendations(Recommendations.results));
  const handleLoading = (loading: boolean) => dispatch(setLoading(loading))

  const getRecommendations = () => fetchData<T.RecommendationsData>(
    { entryPoint: endpoint, onLoading: (loading: boolean) => handleLoading(loading) },
    { setData: (Recommendations:T.RecommendationsData) => handleSetRecommendations(Recommendations) }
  )

  useEffect(() => {
      getRecommendations()
  }, [])

  return { Recommendations, isLoading }
}

export default useGetRecommendations
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { T } from '../../interfaces'

export interface moviesState {
  movies:T.Movies[],
  details: T.MovieDetails
  credits: T.MovieCredits
  recommendations: T.Recommendations[] | null,
  searchMovies: T.Movies[]
  loading: boolean,
}

const initialState: moviesState = {
  movies: [],
  details: {} as T.MovieDetails,
  credits: {} as T.MovieCredits,
  recommendations: [],
  searchMovies: [],
  loading: false
}

export const movieSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    
    setMovies: (state, action: PayloadAction<T.Movies[]>) => {
      state.movies = action.payload
    },  
    
    setDetails: (state, action: PayloadAction<T.MovieDetails>) => {
      state.details = action.payload
    }, 
    
    setCredits: (state, action: PayloadAction<T.MovieCredits>) => {
      state.credits = action.payload
    }, 

    setRecommendations: (state, action: PayloadAction<T.Recommendations[] | null>) => {
      state.recommendations = action.payload
    }, 
    
    setSearchMovies: (state, action: PayloadAction<T.Movies[]>) => {
      state.searchMovies = action.payload
    },  
    
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    
  },
})


export const { setMovies, setLoading, setDetails, setCredits, setRecommendations, setSearchMovies } = movieSlice.actions

export default movieSlice.reducer
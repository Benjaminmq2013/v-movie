import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { T } from '../../interfaces'

export interface shopState {
  movies:T.Movies[],
  details: T.MovieDetails
  credits: T.MovieCredits
  loading: boolean,
}

const initialState: shopState = {
  movies: [],
  details: {} as T.MovieDetails,
  credits: {} as T.MovieCredits,
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

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    
  },
})


export const { setMovies, setLoading, setDetails } = movieSlice.actions

export default movieSlice.reducer
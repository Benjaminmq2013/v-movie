import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { T } from '../../interfaces'


export interface shopState {
  movies:T.Movies[],
  loading: boolean,
}

const initialState: shopState = {
  movies: [],
  loading: false
}

export const movieSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    
    setMovies: (state, action: PayloadAction<T.Movies[]>) => {
      state.movies = action.payload
    },   
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    
  },
})


export const { setMovies, setLoading } = movieSlice.actions

export default movieSlice.reducer
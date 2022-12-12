import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './movies/index';
import authSlice from './auth/index';

export const store = configureStore({
  reducer: {
    movieSlice,
    authSlice
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
// This movie saves Favorite Movies in LocalStorage and makes validations.

import { useState } from 'react';
import { T } from '../interfaces';


const useFavorites = () => {

    
    const getFavorites = ():T.MovieDetails[] | null => {
        try {
            const favorites = window.localStorage.getItem("FavoriteMovies")
            if(favorites !== null) return JSON.parse(favorites)
        } catch (error) {
            console.error(error)
        }
        
        return null    
    }
    
    const [favorites, setFavorites] = useState<T.MovieDetails[] | null>(()=> getFavorites())
    

    const handleSetFavorites = (movie:T.MovieDetails) =>{

        // If the movie is already in Favorites, we finish this function.
        if(favorites?.find(film => film.id === movie.id)) return

        // Saving Movie in LocalStorage
        try {
            if(favorites !== null) window.localStorage.setItem("FavoriteMovies", JSON.stringify([...favorites, movie]));
            else  window.localStorage.setItem("FavoriteMovies", JSON.stringify([movie]));
        } catch (error) {
            console.error(error);
        } 
        setFavorites(getFavorites())
    } 



    const handleRemoveFavorites = (movie:T.MovieDetails) => {
        // Saving Movie in LocalStorage
        try {
            if(favorites === null) return
            else  window.localStorage.setItem("FavoriteMovies", JSON.stringify(favorites.filter(elem => elem.id !== movie.id)));
        } catch (error) {
            console.error(error);
        } 
        setFavorites(getFavorites())
    }

  return { favorites, handleSetFavorites, handleRemoveFavorites }
}

export default useFavorites
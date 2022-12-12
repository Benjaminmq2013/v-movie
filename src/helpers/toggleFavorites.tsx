
import useFavorites from '../hooks/useFavorites'
import { T } from '../interfaces'

const handleFavorites = (Details: T.MovieDetails, movieId:string | undefined) => {
    
    const { favorites, handleSetFavorites, handleRemoveFavorites } = useFavorites()
    
    const toggleFavorite = () => {
        if(isFavorite) handleRemoveFavorites(Details)
        else handleSetFavorites(Details)
    }
    
    // verifying favorite existence in storage
    const isFavorite:boolean = !!favorites?.find(elem => elem.id === Number(movieId))

  return { toggleFavorite, isFavorite }
}


export default handleFavorites
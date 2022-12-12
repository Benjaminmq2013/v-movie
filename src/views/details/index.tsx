import "./index.css"

import Header from "../../components/Header"
import Button from "../../components/button"
import User from "../../components/user"
import Avatar from "../../components/avatar"
import { useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useGetDetails from '../../hooks/useGetDetails';
import useGetCredits from '../../hooks/useGetCredits';
import useGetRecommendations from '../../hooks/useGetRecommendations';
import handleFavorites from "../../helpers/toggleFavorites"


const Details = () => {
  
  let { movieId } = useParams();
  

  const navigate = useNavigate()
    const handleBackToHome = () => navigate("/")    
    
    
    // I am cleaning the received param from "&" characters
    movieId = movieId?.split("").filter(char => char !== "&").join("")
    
    const { Details } = useGetDetails(`movie/${movieId}`)
    const { Credits } = useGetCredits(`movie/${movieId}/credits`)
    const { Recommendations } = useGetRecommendations(`movie/${movieId}/recommendations`)
    
    
    // In the first render, backdrop_path will be undefined, so we need to validate
    const heroRef = useRef<HTMLDivElement>(null)

    if(heroRef.current !== null && Details.backdrop_path !== undefined){
      heroRef.current.style.backgroundImage = `url("https://image.tmdb.org/t/p/w780/${Details.backdrop_path}")`
    }

    const { isFavorite, toggleFavorite } = handleFavorites(Details, movieId)

    const handleNavigate = (movieId: string) => navigate(`/details&${movieId}`)
    

    
    return (
    <div className="details-container">
      <div className="details-hero" ref={heroRef}>

        <div className="details-mask">
            <Header />

            <div className="details-btn__container">
                <Button onClick={ handleBackToHome } className="details-back__button" title="Back to home" icon="icons/details/back.svg" />
            </div>

            <div className="details-info_container">
                <h1 className="details-title">{ Details.title }</h1>
                <h2 className="details-subtitle">{Details.original_language} | {Details.genres?.map(genre => genre.name + " ")} | { Details.runtime + " min" }</h2>
            </div>

            <Button 
              onClick={ toggleFavorite } 
              className="details-like__button" 
              icon={`/icons/details/${isFavorite? "heart-red.svg" : "heart-white.svg"}`} 
              title="Add to favorites" 
            />

        </div>
      </div>

      <div className="details-overview">
        <h2 className="details-overview__title">Overview:</h2>
        <p className="details-overview__description">{ Details.overview }</p>
      </div>

      <div className="details-cast">
        <h2 className="details-cast__title" >Star cast</h2>

        <div className="details-row">
          {Credits.cast?.map(cast => (
            <User 
              className="details-user" 
              title="Actor" 
              subtitle={ cast.name } 
              image={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`} 
              key={ cast.cast_id } />
          ))}
        </div>
        
      </div>

      <div className="details-row">
        {Recommendations?.map(movie => (
          <Avatar 
            image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
            title={ movie.title } 
            key={movie.id} 
            onClick={ () => handleNavigate(`${movie.id}`) }
          />
        ))}
        
      </div>      
    </div>
  );
}

export default Details
import "./index.css"

import Header from "../../components/Header"
import Button from "../../components/button"
import User from "../../components/user"
import Avatar from "../../components/avatar"
import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useGetDetails from '../../hooks/useGetDetails';



const Details = () => {
    const navigate = useNavigate()
    const heroRef = useRef<HTMLDivElement>(null)
    let { movieId } = useParams();

    // I am cleaning the received param from "&" characters
    movieId = movieId?.split("").filter(char => char !== "&").join("")

    const { Details } = useGetDetails(`movie/${movieId}`)
    

    const handleBackToHome = () => navigate(-1)    

   
    if(heroRef.current !== null){
      heroRef.current.style.backgroundImage = `url("https://image.tmdb.org/t/p/w780/${Details.backdrop_path}")`
    }

    

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

            <Button className="details-like__button" icon="/icons/details/heart-white.svg" title="Add to favorites" />

        </div>
      </div>

      <div className="details-overview">
        <h2 className="details-overview__title">Overview:</h2>
        <p className="details-overview__description">{ Details.overview }</p>
      </div>

      <div className="details-cast">
        <h2 className="details-cast__title" >Star cast</h2>
        <div className="details-row">
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
      </div>

      <div className="details-row">
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
        <Avatar image="images/poster.png" title="Ironman" />
      </div>

    </div>
  );
}

export default Details
import "./index.css"

import Header from "../../components/Header"
import Button from "../../components/button"
import User from "../../components/user"
import Avatar from "../../components/avatar"
import { useRef, useEffect } from 'react';



const Details = () => {
    const heroRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(heroRef.current !== null){
            heroRef.current.style.backgroundImage = `url("images/poster.png")`
        }
    }, [])
    

  return (
    <div className="details-container">
      <div className="details-hero" ref={heroRef}>

        <div className="details-mask">
            <Header />

            <div className="details-btn__container">
                <Button className="details-back__button" title="Back to home" icon="icons/details/back.svg" />
            </div>

            <div className="details-info_container">
                <h1 className="details-title">Ironman</h1>
                <h2 className="details-subtitle">Eng | Action, Sci-Fi | 3h10m</h2>
            </div>

            <Button className="details-like__button" icon="/icons/details/heart-white.svg" title="Add to favorites" />

        </div>
      </div>

      <div className="details-overview">
        <h2 className="details-overview__title">Overview:</h2>
        <p className="details-overview__description">From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.</p>
      </div>

      <div className="details-cast">
        <h2 className="details-cast__title" >Star cast</h2>
        <div className="details-row">
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <User className="details-user" title="Actor" subtitle="Angelina Jolie" image="https://images.pexels.com/photos/8419632/pexels-photo-8419632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
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
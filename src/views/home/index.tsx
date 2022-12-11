import "./index.css"
import HomeLayout from "../../layouts/home"
import Card from "../../components/card"
import useGetData from '../../hooks/useGetData';
import { useNavigate } from 'react-router-dom';

const Home = () => {


  const { Movies, isLoading } = useGetData("movie/popular")
  const navigate = useNavigate()

  
  const handleNavigate = (movieId: string) => navigate(`details&${movieId}`)

  return (
    <HomeLayout>
      <div className="home-catalogue__container">
        <h2>Popular</h2>
        <div className="home-catalogue">
          {Movies.map(movie => (
            <Card 
              key={movie.id}
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
              title={ movie.title } 
              subtitle={ movie.release_date } 
              description={ movie.overview }
              onClick={ () => handleNavigate(`${movie.id}`) }
            />
          ))}
        </div>
      </div>
    </HomeLayout>
  )
}

export default Home
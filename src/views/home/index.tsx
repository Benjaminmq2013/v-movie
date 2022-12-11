import "./index.css"
import HomeLayout from "../../layouts/home"
import Card from "../../components/card"
import useGetData from '../../hooks/useGetData';

const Home = () => {


  const { Movies, isLoading } = useGetData("movie/popular")
  

  const data:number[] = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 ]

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
            />
          ))}
        </div>
      </div>
    </HomeLayout>
  )
}

export default Home
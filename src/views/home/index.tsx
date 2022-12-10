import "./index.css"
import HomeLayout from "../../layouts/home"
import Card from "../../components/card"

const Home = () => {
  const data:number[] = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 ]
  return (
    <HomeLayout>
      <div className="home-catalogue__container">
        <h2>Popular</h2>
        <div className="home-catalogue">
          {data.map(movie => (
            <Card 
              key={movie}
              image='images/poster.png' 
              title="Ironman" 
              subtitle="2019" 
              description="From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who  act as deniable assets for the  United States government,  undertaking high-risk black ops  missions in exchange for  commuted prison sentences." 
            />
          ))}
        </div>
      </div>
    </HomeLayout>
  )
}

export default Home
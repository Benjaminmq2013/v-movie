import Rating from "../../rating"
import "./index.css"

export interface params{
  image: string,
  title: string,
  subtitle?: string,
  description: string,
  onClick?: () => void,
}

const App = (params:params):JSX.Element => {
  return (
    <div className="catalogue_card" onClick={ params.onClick } >
      <img className="card_image" src={ params.image } alt="" />
      <div className="card_info">
        <h5 className="card_title" >{ params.title }</h5>
        <div className="card-row">
        <h6 className="card_subtitle" >{ params.subtitle }</h6>
        <Rating rate={5} />
        </div>
        <p className="card_description">{ params.description }</p>
      </div>
    </div>
  )
}

export default App
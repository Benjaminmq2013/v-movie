import { CSSProperties } from "react"
import "./index.css"


export interface params {
  title: string
  subtitle: string
  image: string
  onClick?: () => void
  className?: string
  style?: CSSProperties
}

/**
 * className internos para editar:
 *  - container
 *    - __grid
 *      - __title
 *      - __subtitle
 * 
 * @param params 
 * 
 * @example
 * 
 * <Component 
        image="/assets/avatar.png" 
        title="Gistara Hashi"
        subtitle={ newDate }
        className=""
      />

 * @returns JSX.Element
 */


const App = (params: params): JSX.Element => {

  params = { ...{ className: '' }, ...params }

  return (
    <div className={`user ${params.className}` } onClick={ params.onClick } style={ params.style } >
      <img className="image" src={params.image} />
      <div className='grid'>
        <p className='title'>{params.title}</p>
        <p className='subtitle'>{params.subtitle}</p>
      </div>
    </div>

  )
}


export default App
import "./index.css"
import { CSSProperties } from "react"


export interface params {
  image: string;
  title: string;
  active?: boolean;
  subtitle?: string;  
  onClick?: ()=> void;
  className?: string
  style?: CSSProperties
}

/**
 * 
 * css variables:
 * --avatar-height: 6rem;
 * --avatar-width: 6rem;
 * 
 * className internos para editar
 * 
 *  - container
 *      - __figure
 *        - __image
 * 
 *      - __title
 *      - __subtitle* 
 * 
 * @param params 
 * @param params.subtitle Subtitle gets rendered only if it's value comes within the params
 * @param params.borderRadius border radius specified in "Pixels"
 * @param params.border border tickness specified in Pixels
 * @param params.active The user's indicator when he's online/offline
 * @example
 * 
 * <Component image="assets/user.jpeg" title="Alissa Mayer" subtitle="Licencia A1" active={ true } />
 * 
 * @returns 
 */

const App = (params: params): JSX.Element => {
  
  params = { ...{ className: '' }, ...params }
  
  return (
    <div className={`avatar ${params.className}` } onClick={ params.onClick } style={ params.style } > 
    
      <figure className="avatar-figure"  >
        <img className="avatar-image" src={params.image} />
        { params.active && <div className="avatar-active"></div> }
      </figure>   

      <h3 className="avatar-title"  >{ params.title }</h3>

      
    </div>

  )
}


export default App
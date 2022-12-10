import "./index.css"
import { CSSProperties, useState } from "react"
import Icon from "../../icon"

export interface params {
  className?: string
  style?: CSSProperties
  onClick?: ()=> void
  rate?: number;
}

export interface dataProps{
  rate: number
}

const data: dataProps[] = [
  { rate: 1 },
  { rate: 2 },
  { rate: 3 },
  { rate: 4 },
  { rate: 5 },
  { rate: 6 },
];

/**
 * className internos para editar:
 * - container
 *  - __icon __selected
 * 
 * 
 * @param params.className custom className
 * @param params.onClick callback, click event handler
 * @param params.rate rate from 1 to 6.
 * @param param.locked If you set it to true, the user will not be able to change rating
 * 
 * @example 
 * <Component rate={ 5 } locked={ true } />
 * 
 * @returns 
 */

const App = (params: params): JSX.Element => {
  params = { ...{ className: '' }, ...params }

  const [rate, setRate] = useState<number>(params.rate || 0)

  return (
    <div className={`rating-container ${params.className}`} style={params.style} >

      {data.map(star => (
        <Icon  
          className={`rate-icon ${rate >= star.rate && "rate-selected"}` } 
          src="icons/home/star.svg"
          key={ star.rate }
        />
      ))}

    </div>

  )
}


export default App
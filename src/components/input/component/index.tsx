import { ChangeEvent } from "react"
import "./index.css"

export interface params{
  label?: string,
  className?: string,
  placeholder?: string,
  type?: React.HTMLInputTypeAttribute;
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const App = (params:params):JSX.Element => {
  params = { ...{ className: 'container' }, ...params }

  const handleSetValue = (e:ChangeEvent<HTMLInputElement>) => params.setValue(e.target.value)

  return (
    <div className={`input_container ${params.className}`}>
      <label className="input_label" >{ params.label }</label>
      
      <input 
        value={ params.value } 
        className={"input"} 
        onChange={ (e:ChangeEvent<HTMLInputElement>) => handleSetValue(e) } 
        type={ params.type }
        placeholder={ params.placeholder }
      />
    </div>
  )
}

export default App
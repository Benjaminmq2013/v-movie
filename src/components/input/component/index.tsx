import { ChangeEvent } from "react"
import "./index.css"

export interface params{
  label?: string,
  className?: string,
  placeholder?: string,
  type?: React.HTMLInputTypeAttribute;
  value: string,
  setValue: (input: string) => void
  required?: boolean
}

const App = (params:params):JSX.Element => {
  params = { ...{ className: 'container', required: false }, ...params }

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
        required={params.required}
      />
    </div>
  )
}

export default App
import { ChangeEvent, useState } from "react"
import "./index.css"

export interface params{
  label?: string,
  className?: string,
  initialValue?: string,
  placeholder?: string,
  type?: React.HTMLInputTypeAttribute;
}

const App = (params:params):JSX.Element => {
  params = { ...{ className: 'container' }, ...params }
  const [value, setValue] = useState<string>(params.initialValue || "")

  const handleSetValue = (e:ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  return (
    <div className={`input_container ${params.className}`}>
      <label className="input_label" >{ params.label }</label>
      
      <input 
        value={ value } 
        className={"input"} 
        onChange={ (e:ChangeEvent<HTMLInputElement>) => handleSetValue(e) } 
        type={ params.type }
        placeholder={ params.placeholder }
      />
    </div>
  )
}

export default App
import { useState } from 'react';
import { SearchContext } from "./searchContext"

interface Props{
    children: JSX.Element |  JSX.Element[]
}

export const SearchProvider = ({ children }:Props ) => {

    const [value, setValue] = useState<string>("")    

  return (
    <SearchContext.Provider value={{ value, setValue }}>
        { children }
    </SearchContext.Provider>
  )
}

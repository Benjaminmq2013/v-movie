import { createContext } from "react";

export type SearchValueContext = {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export const SearchContext = createContext<SearchValueContext>({} as SearchValueContext);
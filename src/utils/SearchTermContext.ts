import { createContext } from "react";
type SearchContextType = {
    searchTerm: string
    setSearchTerm:(c: string) => void
  }
export const SearchTermContext = createContext<SearchContextType>({
    searchTerm:'',
    setSearchTerm : () => {}
})
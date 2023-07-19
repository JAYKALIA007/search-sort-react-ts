import { createContext } from "react";
type SearchContextType = {
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  }
export const SearchTermContext = createContext<SearchContextType>({
    searchTerm:'',
    setSearchTerm : () => {}
})
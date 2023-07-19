import { createContext } from "react";

type SortToggleContextType = {
    sort: boolean,
    setSort:React.Dispatch<React.SetStateAction<boolean>>
}
export const SortToggleContext = createContext<SortToggleContextType>({
    sort : false,
    setSort : () => {}
})

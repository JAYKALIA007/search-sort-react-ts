import { createContext } from "react";

type SortToggleContextType = {
    sort: boolean,
    setSort:(c: boolean) => void
}
export const SortToggleContext = createContext<SortToggleContextType>({
    sort : false,
    setSort : () => {}
})

import { createContext } from "react"
import { personModel } from "./model"
type PeopleContextType = {
    people: personModel[],
    setPeople: (c: personModel[]) => void
}
export const PeopleContext = createContext<PeopleContextType>({
    people: [],
    setPeople : () => {}
})
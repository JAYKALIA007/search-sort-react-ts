import { createContext } from "react"
import { personModel } from "./model"
type PeopleContextType = {
    people: personModel[],
    setPeople: React.Dispatch<React.SetStateAction<personModel[]>>
}
export const PeopleContext = createContext<PeopleContextType>({
    people: [],
    setPeople : () => {}
})
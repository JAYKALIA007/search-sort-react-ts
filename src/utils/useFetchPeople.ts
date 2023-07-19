import { useContext, useEffect } from "react"
import { PeopleContext } from "./PeopleContext"
import { fetchDataFromAPI } from "./helper"

export const useFetchPeople = (numberOfUsersToFetch : number) => {
    const { people, setPeople } = useContext(PeopleContext)
    useEffect(()=>{
        fetchDataFromAPI(numberOfUsersToFetch, setPeople, people, false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    // console.log(people)
    return people
}


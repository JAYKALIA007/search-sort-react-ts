import { RANDOM_USER_API_URL } from './constants'
import { personModel } from './model'

export const fetchDataFromAPI = async (
        numberOfUsersToFetch: number, 
        setPeople: (c: personModel[]) => void, 
        people : personModel[], 
        moreFlag: boolean
    ) => {
    const url = RANDOM_USER_API_URL + numberOfUsersToFetch
    const data = await fetch(url)
    const jsonData = await data.json()
    !moreFlag ? setPeople(jsonData?.results) : setPeople([...people, jsonData?.results[0]])
}
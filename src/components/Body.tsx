import { useContext, useEffect, useState } from 'react';
import { fetchDataFromAPI, useFetchPeople } from '../utils/useFetchPeople';
import { PersonCard } from './PersonCard';
import { SearchTermContext } from '../utils/SearchTermContext';
import { SortToggleContext } from '../utils/SortToggleContext';
import { personModel } from '../utils/model';
import { PeopleContext } from '../utils/PeopleContext';
interface Props{

}

export const Body : React.FC<Props> = () => {
    const { people, setPeople } = useContext(PeopleContext)
    const [filteredPeople , setFilteredPeople] = useState(people)
    const {searchTerm} = useContext(SearchTermContext)
    const {sort} = useContext(SortToggleContext)
    useFetchPeople(10)

    useEffect(()=>{
        setFilteredPeople(people.filter(person=>
            person.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
            person.name.last.toLowerCase().includes(searchTerm.toLowerCase())
        ))
    },[searchTerm, people])

    useEffect(()=>{
        setFilteredPeople(
            filteredPeople.slice().sort((a:personModel,b:personModel)=> 
            (a.name.first > b.name.first) ? 1 : ((b.name.first > a.name.first) ? -1 : 0)
        ))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[sort])

    return filteredPeople.length === 0 ? <span>No users found</span> : (
        <div>
            <button onClick={()=>{
                fetchDataFromAPI(1, setPeople, people, true)
            }} >Fetch More</button>
            {filteredPeople.map(person => (
                <PersonCard key = {person.login.uuid} person = {person}  />
            ))}
        </div>
    );
}
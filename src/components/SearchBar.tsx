import React, { useContext } from 'react';
import { SearchTermContext } from '../utils/SearchTermContext';

interface Props{

}

export const SearchBar : React.FC<Props> = () => {
    const {searchTerm, setSearchTerm} = useContext(SearchTermContext)
    
    const handleChange = (e:React.FormEvent<EventTarget>) => {
        let target = e.target as HTMLInputElement;
        // console.log(target.value)
        setSearchTerm(target.value)
    }
    return (
        <div>
            
            <input 
                type='text'
                placeholder='Search...'
                value={searchTerm}
                onChange={(e)=>handleChange(e)}
            />
        </div>
    );
}
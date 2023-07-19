import React, { useContext } from 'react';
import { SearchBar } from './SearchBar';
import { SortToggleContext } from '../utils/SortToggleContext';

interface Props{

}

export const Header : React.FC<Props> = () => {
    const {sort, setSort} = useContext(SortToggleContext)
    return (
        <div>
            <SearchBar />
            {!sort && <button onClick={()=>setSort(!sort)} >Sort</button>}
            <br/><br/>
        </div>
    );
}
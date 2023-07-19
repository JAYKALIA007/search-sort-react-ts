import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { SearchTermContext } from './utils/SearchTermContext';
import { SortToggleContext } from './utils/SortToggleContext';
import { personModel } from './utils/model';
import { PeopleContext } from './utils/PeopleContext';

function App() {

  const [ searchTerm, setSearchTerm ] = useState<string>('')
  const [ sort, setSort ] = useState<boolean>(false)
  const [ people, setPeople ] = useState<personModel[]>([])
  return (
    <SearchTermContext.Provider value={{searchTerm, setSearchTerm }}>
      <SortToggleContext.Provider value={{sort, setSort}} >
        <PeopleContext.Provider value={{people,setPeople}} >
          <div>
            <Header/>
            <Body/> 
          </div>
        </PeopleContext.Provider>
      </SortToggleContext.Provider>
    </SearchTermContext.Provider>
  );
}

export default App;

import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch(){
  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext)

    return(
      <input 
      placeholder="¡Construye tu futuro ahora!"
      className='TodoSearch'
      value={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value);
      }}
      />
    );
  }

  export {TodoSearch};
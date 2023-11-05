import React from 'react';
import './TodoSearch.css'

function TodoSearch(){
const [searchValue, setSearchValue] = React.useState('');

console.log('Los usuarios buscan TODOS de '+ searchValue);

    return(
      <input 
      placeholder="Cortar cebolla"
      className='TodoSearch'
      onChange={(event)=>{
        setSearchValue(event.target.value);
      }}
      />
    );
  }

  export {TodoSearch};
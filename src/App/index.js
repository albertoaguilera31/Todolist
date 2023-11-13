/*import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';*/
import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
//import { useLocalStorage } from './useLocalStorage';

//import React from 'react';
//import useLocalStorage from './useLocalStorage';
//import React from 'react';

/*function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);

  const [loading, setLoading] = React.useState(true);

  const [error, setError] = React.useState(false);

  //let parsedItem;
  
  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
    
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
    
        setLoading(false);
        }catch(error){
          setLoading(false);
          setError(true);
        }
    }, 2000);
    
  });
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {item, saveItem, loading, error};
}*/


function App() {

  
  /*return (
    <React.Fragment>

      <TodoCounter 
      completed={completedTodos} 
      total={totalTodos} 
      />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.complete}
          onComplete= {()=> completeTodo(todo.text)}
          onDelete= {()=> deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />

    </React.Fragment>
  );*/

  return(
    <TodoProvider>
      <AppUI 
    //loading={loading}
    //error={error}
    //completedTodos={completedTodos}
    //totalTodos={totalTodos}
    //searchValue={searchValue}
    //setSearchValue={setSearchValue}
    //searchedTodos={searchedTodos}
    //completeTodo={completeTodo}
    //deleteTodo={deleteTodo}
    />
    </TodoProvider>
    
  );
}





export default App;

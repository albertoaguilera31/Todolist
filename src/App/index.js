/*import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';*/
import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
//import { useLocalStorage } from './useLocalStorage';

//import React from 'react';
//import useLocalStorage from './useLocalStorage';

/*localStorage.removeItem('TODOS-V1');
const defaultTodos = [
  {text: "cortar cebolla", complete: true},
  {text: "curso de react", complete: false},
  {text: "llorar con la llorona", complete: false},
  {text: "lalalala", complete: false},
  {text: "Usar estados derivados", complete: true},
];

localStorage.setItem('TODOS-V1', JSON.stringify(defaultTodos));*/


//import React from 'react';

function useLocalStorage(itemName, initialValue) {

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
}


function App() {

  const {item: todos, saveItem: saveTodos, loading, error,} = useLocalStorage('TODOS-V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos= todos.filter(todo => !!todo.complete).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo)=>{
      return todo.text.toLowerCase().includes
      (searchValue.toLocaleLowerCase());
    }
  );

  
  
  const completeTodo= (text)=> {
    const newTodos= [...todos];
    const todoIndex= newTodos.findIndex(
      (todo)=> todo.text === text
    );
    newTodos[todoIndex].complete = true;
    saveTodos(newTodos);
  }

  const deleteTodo= (text)=> {
    const newTodos= [...todos];
    const todoIndex= newTodos.findIndex(
      (todo)=> todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

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
    <AppUI 
    loading={loading}
    error={error}
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}





export default App;

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

/*const defaultTodos = [
  {text: "cortar cebolla", complete: true},
  {text: "curso de react", complete: false},
  {text: "llorar con la llorona", complete: false},
  {text: "lalalala", complete: false},
  {text: "Usar estados derivados", complete: true},
];*/

//localStorage.setItem('TODOS-V1', defaultTodos);
//localStorage.removeItem('TODOS-V1');

function App() {

  const localStorageTodos = localStorage.getItem('TODOS-V1');

let parsedTodos = JSON.parse(localStorageTodos);

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos= todos.filter(todo => !!todo.complete).length;

  const searchedTodos = todos.filter(
    (todo)=>{
      return todo.text.toLowerCase().includes
      (searchValue.toLocaleLowerCase());
    }
  );
  
  const completeTodo= (text)=> {
    const newTodos= [...todos];
    const todoIndex= newTodos.findIndex(
      (todo)=> todo.text == text
    );
    newTodos[todoIndex].complete = true;
    setTodos(newTodos);
  }

  const deleteTodo= (text)=> {
    const newTodos= [...todos];
    const todoIndex= newTodos.findIndex(
      (todo)=> todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
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
  );
}





export default App;

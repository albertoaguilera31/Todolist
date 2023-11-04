import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  {text: "cortar cebolla", complete: true},
  {text: "curso de react", complete: false},
  {text: "llorar con la llorona", complete: false},
  {text: "lalalala", complete: false},
];


function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.complete}
          />
        ))}
      </TodoList>
      <CreateTodoButton />

    </React.Fragment>
  );
}





export default App;

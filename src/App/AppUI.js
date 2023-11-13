import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import React from 'react';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmtyTodos } from '../EmtyTodos';
import { TodoContext } from '../TodoContext';

function AppUI(){
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
  } = React.useContext(TodoContext);


    return (
        <React.Fragment>
    
          <TodoCounter />
          <TodoSearch />

          
              <TodoList>
              {loading && < TodosLoading />}
              {error && <TodosError />}
              {(!loading && searchedTodos.length === 0) && <EmtyTodos/>}
    
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

export {AppUI};
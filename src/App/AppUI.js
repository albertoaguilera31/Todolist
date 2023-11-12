import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import React from 'react';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}){
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
          {loading && <p>Estamos cargando...</p>}
          {error && <p>Hubo un error...</p>}
          {(!loading && searchedTodos.length === 0) && <p>Crea tu primer TO DO!</p>}

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
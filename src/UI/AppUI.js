import React from "react";
import {TodoCounter} from '../components/TodoCounter'
import {TodoItem} from '../components/TodoItem'
import {TodoList} from '../components/TodoList'
import {TodoSearch} from '../components/TodoSearch'
import {CreateTodoButton} from '../components/CreateTodoButton'

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    }){
    return(
        <>
        <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList >
          {searchedTodos.map(todo=>(
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
  
        <CreateTodoButton />
  
      </>
    )
}

export { AppUI }
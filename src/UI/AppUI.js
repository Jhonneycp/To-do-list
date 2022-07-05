import React from "react";
import {TodoCounter} from '../components/TodoCounter'
import {TodoItem} from '../components/TodoItem'
import {TodoList} from '../components/TodoList'
import {TodoSearch} from '../components/TodoSearch'
import {CreateTodoButton} from '../components/CreateTodoButton'
import {TodoContext} from '../TodoContext/todoContext.js'

function AppUI(){

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo
  } = React.useContext(TodoContext)

    return(
        <>
        <TodoCounter/>
        <TodoSearch/>

              <TodoList >
              {error && <p>Hubo un error, desesperate!</p>}
              {loading && <p>Estamos cargando, no desesperes!</p>}
              {(!loading && !searchedTodos.length && <p>Crea tu primer TODO!</p>)}
    
    
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
import React from "react";
import {TodoCounter} from '../components/TodoCounter'
import {TodoItem} from '../components/TodoItem'
import {TodoList} from '../components/TodoList'
import {TodoSearch} from '../components/TodoSearch'
import {CreateTodoButton} from '../components/CreateTodoButton'
import {TodoContext} from '../TodoContext/todoContext.js'
import {Modal} from '../components/Modal.js'
import { TodoForm } from "../components/TodoForm";
import { Loading } from "../components/Loading";

function AppUI(){

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    inCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)

    return(
        <>
        <TodoCounter/>
        <TodoSearch/>

              <TodoList >
              {error && <p>Hubo un error, desesperate!</p>}
              {loading && <Loading/>}
              {(!loading && !searchedTodos.length && <p>Crea tu primer TODO!</p>)}
    
    
              {searchedTodos.map(todo=>(
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={()=>completeTodo(todo.text)}
                inComplete={()=>inCompleteTodo(todo.text)}
                onDelete={()=>deleteTodo(todo.text)}
                />
              ))}
            </TodoList>

            {openModal && (
            <Modal>
              <TodoForm 
                setOpenModal={setOpenModal}
                openModal={openModal}
              />
            </Modal>
            )}
  
        <CreateTodoButton 
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
  
      </>
    )
}

export { AppUI }
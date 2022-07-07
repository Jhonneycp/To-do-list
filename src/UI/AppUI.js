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
import { Advice } from "../components/Advice";
import { Error } from "../components/Error";

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
              {error && <Error/>}
              {loading && <Loading/>}
              {(!loading && !searchedTodos.length && <Advice setOpenModal={setOpenModal} openModal={openModal}/>)}
    
    
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
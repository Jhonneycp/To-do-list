import React from "react";
import { TodoContext } from "../TodoContext/todoContext";
import '../Styles/TodoForm.css'

function TodoForm({setOpenModal}) {

    const[newTodoValue, setNewTodoValue ] = React.useState(' ')
    const {
        addTodo
    } = React.useContext(TodoContext)

    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
    }

    const onCancel = () =>{
        setOpenModal(false)
    }

    const onAdd = () =>{

    }

    const onSubmit = (event) =>{
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Write your first To Do</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Write your task"
            />
            <div className="TodoForm-buttonContainer">
                <button
                onClick={onCancel}
                type='button'
                className="TodoForm-button TodoForm-button--cancel"
                >
                    cancel
                </button>
                <button
                onClick={onAdd}
                type='submit'
                className="TodoForm-button TodoForm-button--add"
                >
                    add
                </button>
            
            </div>
        </form>
    )
}

export {TodoForm}
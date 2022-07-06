import React from 'react'
import '../Styles/TodoCounter.css'
import {TodoContext} from '../TodoContext/todoContext.js'

function TodoCounter() {
    const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

    return(
         <h2 className='TodoCounter'>You have completed {completedTodos} of {totalTodos} ToDo's</h2>   
    )
}

export {TodoCounter}

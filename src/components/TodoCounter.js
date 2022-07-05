import React from 'react'
import '../Styles/TodoCounter.css'
import {TodoContext} from '../TodoContext/todoContext.js'

function TodoCounter() {
    const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

    return(
         <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>   
    )
}

export {TodoCounter}

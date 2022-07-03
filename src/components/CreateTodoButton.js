import React from 'react'
import '../Styles/CreateTodoButton.css'

function CreateTodoButton() {
    const onClickButton = (msg) => {
        alert(msg)
    }

    return(
        <button 
            className="CreateTodoButton"
            onClick={()=> onClickButton('Aqui deberia estar el mensaje')}
        >
            +
        </button>
    )
}

export {CreateTodoButton}
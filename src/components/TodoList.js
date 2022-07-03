import React from 'react'
import '../Styles/TodoList.css'


function TodoList(props) {
    return( 
        <section className='TodoList'> 
        {props.children}
        </section>
    )
}

export {TodoList}
import React from 'react'
import { AppUI } from './UI/AppUI'
import { TodoProvider } from './TodoContext/todoContext'
import { render } from '@testing-library/react';
//import './App.css';

/*const defaultTodos = [
  {text: 'cortar cebolla', completed: false},
  {text: 'hacer curso de react', completed: true},
  {text: 'cenaaarrrr', completed: true}
]*/


function App() {
  return(
  <TodoProvider>
      <AppUI/>
  </TodoProvider>
  )
}

export default App;

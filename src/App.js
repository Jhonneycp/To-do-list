import React from 'react'
import { AppUI } from './UI/AppUI'
import { TodoProvider } from './TodoContext/todoContext'
//import './App.css';


function App() {
  return(
  <TodoProvider>
      <AppUI/>
  </TodoProvider>
  )
}

export default App;

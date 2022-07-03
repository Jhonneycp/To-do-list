import React from 'react'
import { AppUI } from './UI/AppUI'
//import './App.css';

/*const defaultTodos = [
  {text: 'cortar cebolla', completed: false},
  {text: 'hacer curso de react', completed: true},
  {text: 'cenaaarrrr', completed: true}
]*/

function App(props) {

  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }
  
  const [todos, setTodos ] = React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState('')
  
  const completedTodos = todos.filter(todo => todo.completed).length    
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1){
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLocaleLowerCase()
      const searchText = searchValue.toLocaleLowerCase()
      return todoText.includes(searchText)
    })
  }

  const saveTodos = (newTodos) => {
    
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex,1)
    setTodos(newTodos)
  }

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;

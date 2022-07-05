import React from "react";

function useLocalStorage(itenName, initialValue) {
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem ] = React.useState(initialValue)
  
    React.useEffect(()=>{
      
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itenName)
          let parsedItem
        
          
          if (!localStorageItem) {
            localStorage.setItem(itenName, JSON.stringify(initialValue))
            parsedItem = []
          } else {
            parsedItem = JSON.parse(localStorageItem)
          }
    
          setItem(parsedItem)
          setLoading(false)
        } catch (error) {
          setError(true)
        }
      },1000)
    })
  
  
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem)
        localStorage.setItem(itenName, stringifiedItem)
        setItem(newItem)
      } catch(error) {
        setError(true)
      }
    }
  
    return{
      item,
      saveItem,
      loading,
      error
    }
  }

  export { useLocalStorage }
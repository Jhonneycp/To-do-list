import React from 'react'
import '../Styles/TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }

    return(
        <input 
        className="TodoSearch" 
        placeholder="escribe algo, puta" 
        value={searchValue}
        onChange={onSearchValueChange}
        />
    )
}

export {TodoSearch}

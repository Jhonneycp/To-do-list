import React from "react";
import "../Styles/Advice.css"

function Advice({setOpenModal, openModal}){
    const onClickButton = () => {
        setOpenModal(true)
    }

    return(
        <div 
        onClick={onClickButton}
        className="Advice">
        <p>Create your first To Do 😉</p>
        </div>
    )
}

export {Advice}
import React from "react";
import '../Styles/Loading.css'

const Loading = () =>{
    return(
        <div className="container">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <p>Loading</p>
        </div>
        )
}

export {Loading}
"use client"

import { useState } from "react"

function StartButton(){
    const [textButton,setTextButton]= useState("PLAY");
    const handleClick = () =>setTextButton("IN PROGRESS")
        return(
        <div className="title">
            <button onClick={handleClick}>{textButton}</button>
        </div>
    )
}

export {StartButton}
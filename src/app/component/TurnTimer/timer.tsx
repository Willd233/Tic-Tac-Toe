"use client"
import { useEffect, useRef, useState } from "react"



const Timer = () => {
    const [timer, setTimer] = useState(5);

    const countDown = () => {
    setTimer((timer)=> Math.max(timer -1,0))
    };
    
    const handleStartClick=()=>{
        setTimer(5);
        const interval = setInterval(countDown, 1000);
        return ()=> clearInterval(interval);
    }

    return (
        <div>    <span>{timer}</span>
    <button onClick={handleStartClick}>start</button>
    </div>

    )

}

export {Timer}


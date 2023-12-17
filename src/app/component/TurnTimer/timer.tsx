"use client"
import { useEffect, useRef, useState } from "react"



const Timer = () => {
    const [timer, setTimer] = useState(5);
    const [isRunning, setIsRunning] = useState(false)
    const timerRef= useRef();

    
    const countDown = () => {
    setTimer((timer)=> Math.max(timer -1,0))
    };
    

    useEffect(()=>{
        const interval = setInterval(countDown, 1000);
        return ()=> clearInterval(interval);
    },[]);

    return (
    <span>{timer}</span>
    
    )

}

export {Timer}


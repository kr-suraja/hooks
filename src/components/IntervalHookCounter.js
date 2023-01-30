import React, { useEffect, useState } from "react";

function IntervalHookCounter(){
    
    const [count,setcount]=useState(0)
    
    const tick=()=>{
        setcount(prevcount=>prevcount+1)
    }

    useEffect(()=>{
        const interavl=setInterval(tick,1000)

        return()=>{
            clearInterval(tick)
        }
    },[])

    return(
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter;
import React, { useState } from "react";


function HooksCounterTwo (){

    const [counter,setCounter] = useState(0)
    
    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>{setCounter(prevcounter=>prevcounter+1)}}>
                click to increase
            </button>
            <button onClick={()=>{setCounter(counter-1)}}>
                click to decrease
            </button>
            <button onClick={()=>{setCounter(0)}}>click to set</button>
        </div>
    )
}

export default HooksCounterTwo;
import React, { useState, useEffect } from "react";


function UseEffectOne(){
    
    const [count,setcount] =useState(0)
    const [name,setname] =useState('')

    useEffect(()=>{
        console.log('update')
        document.title = `youve clicked ${count} times`
    },[count])
    
    return(
        <div>
            <input value={name} onChange={e => setname(e.target.value)} />
            <button onClick={()=>{setcount(count+1)}}>{count}</button>
        </div>
    )
}

export default UseEffectOne;
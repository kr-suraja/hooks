import React,{useState, useEffect} from "react";

function HookMouse(){
    
    const [x,setx] = useState(0)
    const [y,sety] = useState(0)

    const logMousePosition = e =>{
        setx(e.clientX)
        sety(e.clientY)
        console.log("log mouse")
    }

    useEffect(()=>{
        console.log('useeffect used')
        window.addEventListener('mousemove', logMousePosition)
        return() =>{

            console.log('unmount')
            window.removeEventListener('mouseover',logMousePosition)
        }
    },[])
    
    return(
        <div>
            Hooks X-{x} Y-{y}
        </div>
    )
}

export default HookMouse;
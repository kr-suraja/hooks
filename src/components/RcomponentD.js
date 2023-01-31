import React,{useContext} from "react";
import { CountContext } from "../App";

function RcomponentD(){
    const countContext=useContext(CountContext)
    return(
        <div>
            Component D
            <button onClick={()=>countContext.countDispatch('reset')}>reset</button>
            <button onClick={()=>countContext.countDispatch('increment')}>increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>decrement</button>
        </div>
    )
}

export default RcomponentD;
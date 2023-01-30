import React, {useReducer}from "react";

const initialState = 0

const reducer = (state,action)=>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state -1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function Rcounterone(){
    const [count,dispatch] = useReducer(reducer,initialState)
    
    return(
        <div>
            <div>count-{count}</div>
            <button onClick={()=>dispatch('reset')}>reset</button>
            <button onClick={()=>dispatch('increment')}>increment</button>
            <button onClick={()=>dispatch('decrement')}>decrement</button>
        </div>
    )
}


export default Rcounterone; 
import React, {useReducer}from "react";

const initialState = {
    firstcounter : 0,
    secondcounter : 10
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state, firstcounter : state.firstcounter + action.value}
        case 'decrement':
            return {...state, firstcounter : state.firstcounter - action.value}
            case 'increment2':
                return {...state, secondcounter : state.secondcounter + action.value}
            case 'decrement2':
                return {...state, secondcounter : state.secondcounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function Rcountertwo(){
    const [count,dispatch] = useReducer(reducer,initialState)
    
    return(
        <div>
            <div>first count-{count.firstcounter}</div>
            <div>second count -{count.secondcounter}</div>
            <button onClick={()=>dispatch({type :'reset'})}>reset</button>
            <button onClick={()=>dispatch({type : 'increment' , value : 1})}>increment 1</button>
            <button onClick={()=>dispatch({type : 'decrement', value : 1 })}>decrement 1</button>
            <button onClick={()=>dispatch({type : 'increment', value: 5 })}>increment 5</button>
            <button onClick={()=>dispatch({type : 'decrement', value : 5 })}>decrement 5</button>
            <div>
            <button onClick={()=>dispatch({type : 'increment2' , value : 2})}>increment 2</button>
            <button onClick={()=>dispatch({type : 'decrement2', value : 2 })}>decrement 2</button>
            </div>
        </div>
    )
}


export default Rcountertwo; 

import './App.css';
import ClassCounter from './components/ClassCounter';
import React,{useReducer} from 'react';
import HooksCounter from './components/HookCounter';
import HooksCounterTwo from './components/HookCounterTwo';
import HooksCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import UseEffectOne from './components/UseEffectOne';
import ClassMouseMount from './components/ClassMouseMount';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import Datafecthing from './components/DataFecthing';
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/UserContext';
import FComponentC from './components/FComponentC';
import Rcounterone from './components/Rcounterone';
import ClassMProp from './components/ClassMProp';
import FMprop from './components/FMprop';
import Rcountertwo from './components/Rcountertwo';
import RcomponentA from './components/RcomponentA';
import RcomponentB from './components/RcomponenetB';
import RcomponentC from './components/RcomponentC';

export const UserContext=React.createContext()
export const ChannelContext=React.createContext()
export const CountContext =React.createContext()

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

function App() {
  
  const [count,dispatch] = useReducer(reducer,initialState)
  
  return (
    <CountContext.Provider value={{countState: count , countDispatch: dispatch}}>
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HooksCounter /> */}
      {/* <HooksCounterTwo /> */}
      {/* <HooksCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <UseEffectOne /> */}
      {/* <ClassMouseMount/> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter/> */}
      {/* <Datafecthing/> */}
      {/* <UserProvider value='vishwas'>
      <ComponentC/>
      </UserProvider> */}
      {/* <UserContext.Provider value={'suraj'}>
        <ChannelContext.Provider value={'aherrao'}>
          <FComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <Rcounterone/> */}
      {/* <div>
      <ClassMProp/>
      </div>
      <FMprop /> */}
      {/* <Rcountertwo/> */}
      count - {count}
      <RcomponentA/>
      <RcomponentB/>
      <RcomponentC/>
    </div>
    </CountContext.Provider>
  );
}

export default App;


import './App.css';
import ClassCounter from './components/ClassCounter';
import React from 'react';
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

export const UserContext=React.createContext()
export const ChannelContext=React.createContext()



function App() {
  return (
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
      <Rcounterone/>

    </div>
  );
}

export default App;

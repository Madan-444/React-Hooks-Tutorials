import React, { useReducer } from 'react';
import './App.css';
import DataFeching1 from './useReducer_Datafeching/DataFeching1';
import DataFechingtwo from './useReducer_Datafeching/DataFechingtwo';
// import ComponentC from './useContest/ComponentC';?
// import CounterReducer from './useReducer/CounterReducer';
// import ReducerCounter from './useReducer/ReducerCounter';
// import Counter2 from './useReducer/'
// import MultipleReducer from './useReducer/multipleReducer';
// import ComponentA from './useReducer_with_contextApi/ComponentA';
// import ComponentB from './useReducer_with_contextApi/ComponentB';
// import ComponentC from './useReducer_with_contextApi/ComponentC';
// import UseEffectcounter from './components/UseEffectcounter';
// import HooksMouse from './components/HooksMouse';
// import CleanUp from './components/CleanUp';
// import IntervalCounter from './components/IntervalCounter';
// import IntervalCounterHooks from './components/IntervalCounterHooks';
// import Datafetching from './components/Datafetching';

// import UseEffect from './components/UseEffect';
// import StatewithArray from './components/StatewithArray';
// import HookCounterThree from './components/HookCounterThree';
// import StateHooks from './components/StateHooks';
// import UseEffecthooks from './components/UseEffecthooks';
// import HookCounter from './components/HookCounter';

//  export const UserContext = React.createContext()
//  export const ChannelContext = React.createContext()

// export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }





function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      {/* <StateHooks /> */}
      {/* <UseEffecthooks /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterThree /> */}
      {/* <StatewithArray /> */}
      {/* <UseEffectcounter /> */}
      {/* <CleanUp /> */}
      {/* <IntervalCounter />
      <IntervalCounterHooks /> */}
      {/* <Datafetching /> */}
      {/* <UserContext.Provider value={'Madan'} >
        <ChannelContext.Provider value={'Rijal'}>
          <ComponentC />  
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <ReducerCounter /> */}
      {/* <Counter2 /> */}
      {/* <MultipleReducer /> */}
      {/* <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
        <h2> Count - {count} </h2>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}
      {/* <DataFeching1 /> */}
      <DataFechingtwo />
    </div>
  );
}

export default App;

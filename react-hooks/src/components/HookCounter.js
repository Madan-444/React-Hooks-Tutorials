import React,{ useState} from 'react'

function HookCounter() {
    const initialState=0
    const [count,setCount]= useState(initialState)
    console.log(count)
    const increment5=()=> {
        for(var i=0;i<5;i++){
            setCount(prevCount=> prevCount+1)
        }
    }
    return (
        <div>
            <p> {count} </p>
            <button onClick={()=> setCount(initialState) }>Reset</button>
            <button onClick={()=> setCount(prevState=> prevState+1)}>Increment</button>
            <button onClick={()=> setCount(prevState=> prevState-1)}>Decrement</button>
            <button onClick={increment5}> Increment by 5</button>
        </div>
    )
}

export default HookCounter

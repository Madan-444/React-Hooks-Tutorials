import React,{ useEffect,useState } from 'react'

function UseEffect() {
    const [count,setcout] = useState(0)

    useEffect=()=> {
    
        document.title= `You clicked ${count}  times`
        
    }
    return (
        <div>
            <button onClick= {()=> setcout(count+1)}> Click  {count} times </button>
        </div>
    )
}

export default UseEffect

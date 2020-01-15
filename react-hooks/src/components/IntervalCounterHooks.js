import React,{useEffect,useState} from 'react'

function IntervalCounterHooks() {
    let initialState=0
    const [count, setcount] = useState(initialState)
useEffect(()=> {
    console.log('jpt')
    let initialInterval = setInterval(tick,1000)
    return (()=>{
        clearInterval(initialInterval)

    })
},[])
let tick=()=> {
    setcount(prevCount => prevCount +1)
}

    return (
        <div>
            <h2> {count} </h2>
            
        </div>
    )
}

export default IntervalCounterHooks

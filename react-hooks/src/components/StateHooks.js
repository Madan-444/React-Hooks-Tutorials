import React,{ useState } from 'react'

function StateHooks() {
    let [fruit,setFruit] = useState('banana')
    
    return (
        <div>
            <button onClick={()=> setFruit('orange')} > {fruit} Click me</button>
            
        </div>
    )
}

export default StateHooks

import React, { useState, useEffect} from 'react'

function UseEffectcounter() {
    const [count,setcout] = useState(0)
    const [name,setName]= useState('')

    useEffect(()=> {
        console.log('useeffect-updating document title')
        document.title=`You clicked ${count} times`
    })
    return (
        <div>
            <input type='text' value={name} onChange={ e=> setName(e.target.value)} />
            <button onClick= {()=> setcout(count+1)}> Click  {count} times </button>
        </div>
    )
}

export default UseEffectcounter

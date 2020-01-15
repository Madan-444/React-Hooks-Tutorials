import React, {useState} from 'react'
import HooksMouse from './HooksMouse'

function CleanUp() {
    const [display,setDisplay] = useState(true)

    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>Toggle button</button>
            {
                display && <HooksMouse />
            }
        </div>
    )
}

export default CleanUp

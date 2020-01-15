import React,{ useState,useEffect } from 'react'

function HooksMouse() {
    const [x,setX]= useState(0)
    const [y,setY]= useState(0)

const logMousePosition =e=> {
    console.log('mouse event')
    setX(e.clientX)
    setY(e.clientY)
}

    useEffect(()=>{
        console.log('useeffect called')
        window.addEventListener('mousemove',logMousePosition)

        return (()=> window.removeEventListener('mousemove',logMousePosition))
    },[])

    return (
        <div>
            <p> hooks x -  {x} y- {y} </p>
        </div>
    )
}

export default HooksMouse

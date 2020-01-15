import React,{useContext} from 'react'
import { UserContext,ChannelContext} from '../App'

// import { UserContext, ChannelContext} from '../App'
function ComponentF() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            <h2>My name is {user} {channel} Magar </h2>
        </div>
    )
}

export default ComponentF

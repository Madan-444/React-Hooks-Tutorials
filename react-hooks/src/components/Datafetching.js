import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Datafetching() {
    let initialState=[]
    const [post, setpost] = useState(initialState)
    const [id, setId] = useState(0)
    const [idfromButton,setIdfrombutton] = useState(0)

useEffect(()=> {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idfromButton}`)
    .then((res)=> {
        console.log(res)
        setpost(res.data)
    })
    .catch((err)=> {
        console.log(err)
    })
},[idfromButton])

    return (
        <div>
            <input type='text' value={id} onChange={(e)=> setId(e.target.value)}  />
            <button type='button' value={idfromButton} onClick= {()=> setIdfrombutton(id)} >Click me</button>
            {id === idfromButton ? <h2> {post.title} </h2> : <div/>}
            {/* <ul>
                {posts.map(post=> 
                    <li key={post.id} > {post.title} </li>
                )}
            </ul> */}
            
        </div>
    )
}

export default Datafetching

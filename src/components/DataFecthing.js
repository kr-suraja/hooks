import React, { useEffect, useState } from "react";
import axios from "axios";

function Datafecthing(){

    const [post,setpost]=useState({})
    const [id,setid]=useState(1)
    const [idFromButtonClick,setidFromButtonclick]=useState()

    const handlefetch=()=>{
        setidFromButtonclick(id)
    }
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>{
            console.log(res)
            setpost(res.data)
        })
        .catch(err=>{console.log(err)})
    },[idFromButtonClick])

    

    return(
        <div>
            <input type='text' value={id} onChange={e=>setid(e.target.value)}/>
            <div>{post.title}</div>
            <button type='button' onClick={handlefetch}>fetch data</button>
            {/* <ul>
                {post.map(post =><li key={post.id}>{post.title}</li>)}
            </ul> */}

        </div>
    )
}

export default Datafecthing;
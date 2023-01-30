import React, { useState } from "react";


function HooksCounterThree(){

    const [name,setname] = useState({
        firstname:"",
        lastname:""
    })
    
    return(
        <div>
            <form>
                <h1>{name.firstname + " " +name.lastname}</h1>
                <input type='text' 
                value={name.firstname} 
                onChange={e => setname({...name, firstname:e.target.value})}></input>
                <input type='text' 
                value={name.lastname} 
                onChange={e =>setname({...name,lastname:e.target.value})}></input>
            </form>
        </div>
    )
}

export default HooksCounterThree;
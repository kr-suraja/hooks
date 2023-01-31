import React, { useState } from "react";
import FMpropC from "./FMpropC";


function FMprop(){
    
    const [parent]=useState('Functional Component')
    
    function greeting(){
        alert(`Hello ${parent}`)
    }
    
    return(
        <div>
            <FMpropC greet={greeting}/>
        </div>
    )
}
export default FMprop;
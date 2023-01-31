import React, {Component} from "react";
import ClassMPropC from "./ClassMpropC";

class ClassMProp extends Component{
    constructor(){
        super()

        this.state={
            parent:'Class component'
        }

        this.greeting = this.greeting.bind(this)
    }
    
    greeting(){

        alert(`hello ${this.state.parent}`)
    }
    
    render(){
        return(
            <div>
               <ClassMPropC greet={this.greeting}/>
            </div>
        )
    }
}

export default ClassMProp;
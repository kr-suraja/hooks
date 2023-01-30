
import React,{Component} from "react"

class ClassCounter extends Component{

    constructor(){
        super()

        this.state = {
            counter : 0
        }
    }

    increaseC = ()=>{
        this.setState({
            counter : this.state.counter+1
        })
    }
       
    
    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increaseC}>click me </button>
            </div>
        )
    }
}

export default ClassCounter;
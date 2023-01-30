import React,{Component} from "react";

class ClassMouseMount extends Component{
    constructor(){
        super();
        this.state={
            x:0,
            y:0
        }
    }


    logMousePosition = e=> this.setState({
        x:e.clientX,
        y:e.clientY
    })
    
    componentDidMount(){
        window.addEventListener('mousemove',this.logMousePosition)
    }



    render(){
        return(
            <div>
                <p>x-{this.state.x}</p>
                <p>y-{this.state.y}</p>
            </div>
        )
    }
}

export default ClassMouseMount;
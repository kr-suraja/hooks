import React, {Component} from "react";


class ClassMPropC extends Component{

    render(props){
        return(
            <div>
                <button type='button' onClick={this.props.greet}>click me</button>
            </div>
        )
    }
}

export default ClassMPropC;
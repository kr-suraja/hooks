import React from "react";
import { UserContext, ChannelContext} from "../App";

function FComponentF(){
    return(
        <div>
            <UserContext.Consumer>
                {
                    user=>{
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel =>{
                                        return <div>User context Value {user}, Channel context Value {channel}</div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>   
    )
}

export default FComponentF;
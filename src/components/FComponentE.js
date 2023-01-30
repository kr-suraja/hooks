import React, {useContext} from "react";
import FComponentF from "./FComponentF";
import { UserContext, ChannelContext } from "../App";

function FComponentE(){

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return(
        <div>
            {user}-{channel}
        </div>
    )
}

export default FComponentE;
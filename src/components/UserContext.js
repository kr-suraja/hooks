import React from "react";

const UserContext = React.createContext('abhi')

const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserProvider,UserConsumer}
export default UserContext;
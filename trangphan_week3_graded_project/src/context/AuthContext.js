import React, { createContext } from "react";

const AuthContext = createContext({
    login: (user) => {},
    user: {},
})

export default AuthContext;
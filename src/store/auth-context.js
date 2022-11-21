import {createContext, useState} from "react";

export const AuthContext = createContext({
    isAuth: false,
    login: () => {
    },
    logout: () => {
    },
    register: () => {
    }
})

const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)

    const login = () => {
        setIsAuth(true)
    }

    const logout = () => {
        setIsAuth(false)
    }

    const register = async() => {
    }

    const value = {
        isAuth: isAuth,
        login,
        logout,
        register
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
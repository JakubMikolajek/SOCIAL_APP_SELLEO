import {createContext, useState} from "react";
import {client} from "../utils/supabase";

export const AuthContext = createContext({
    isAuth: false,
    ownId: null,
    login: (email, password) => {
    },
    logout: () => {
    },
    register: (email, password) => {
    },
})

const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
    const [ownId, setOwnId] = useState(null)

    const login = async (email, password) => {
        return await client.auth.signInWithPassword({
            email: email,
            password: password,
        }).then((response) => {
            setOwnId(response.data.user.id)
            setIsAuth(true)
        })
    }

    const logout = async () => {
        return await client.auth.signOut().then(() => {
            setIsAuth(false)
        })
    }

    const register = async (email, password) => {
        await client.auth.signUp({
            email: email,
            password: password,
        });
    }

    const value = {
        isAuth: isAuth,
        ownId: ownId,
        login,
        logout,
        register,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
import {createContext, useState} from "react";
import {client} from "../utils/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
    isAuth: false,
    ownId: null,
    login: (email, password) => {
    },
    logout: () => {
    },
    register: (email, password) => {
    },
    updateData: (name, surname) => {
    }
})

const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
    const [ownId, setOwnId] = useState("")

    const login = async (email, password) => {
        const response = await client.auth.signInWithPassword({
            email: email,
            password: password,
        });
        setOwnId(response.data.user.id)
        if (ownId !== "") {
            setIsAuth(true)
        }

    }

    const logout = async () => {
        const response = await client.auth.signOut()
        setIsAuth(false)
    }

    const register = async (email, password) => {
        const response = await client.auth.signUp({
            email: email,
            password: password,
        });
    }

    const updateData = async(name,surname) => {
        const response = await client.from("users").update({
            uuid: ownId,
            first_name: null,
            last_name: null
        })
    }

    const value = {
        isAuth: isAuth,
        login,
        logout,
        register,
        updateData,
        ownId: ownId
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
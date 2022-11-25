import {createContext, useEffect, useState} from "react";
import {client} from "../supabase/supabase";
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
})

const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
    const [ownId, setOwnId] = useState(null)

    useEffect(() => {
        const isLoggedIn = async () => {
            const seassonToken = await AsyncStorage.getItem("@seassonToken")
            const userToken = await AsyncStorage.getItem("@userToken")
            const token = JSON.parse(seassonToken)
            const id = JSON.parse(userToken)

            if(token && id){
                setOwnId(id)
                setIsAuth(true)
            }
        }
        isLoggedIn()
    },[])

    const login = async (email, password) => {
        return await client.auth.signInWithPassword({
            email: email,
            password: password,
        }).then(async(response) => {
            setOwnId(response.data.user.id)
            setIsAuth(true)
            const seassonToken = JSON.stringify(response.data.session.access_token)
            const userToken = JSON.stringify(response.data.user.id)
            await AsyncStorage.setItem("@seassonToken", seassonToken)
            await AsyncStorage.setItem("@userToken", userToken)
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
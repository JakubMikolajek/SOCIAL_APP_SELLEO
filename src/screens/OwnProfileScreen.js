import {Button, StyleSheet, View} from 'react-native'
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../store/auth-context";

import {GlobalStyles} from "../constants/GlobalStyles";
import Avatar from "../components/profile/Avatar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OwnProfileScreen = () => {
    const authCtx = useContext(AuthContext)
    const [userData, setUserData] = useState({
        name: "",
        surname: ""
    })

    const logoutHandler = () => {
        AsyncStorage.clear
        authCtx.logout()
    }

    useEffect(() => {
        const fetchData = async () => {
            const name = await AsyncStorage.getItem("@name")
            const surname = await AsyncStorage.getItem("@surname")
            setUserData({
                name: name,
                surname: surname
            })
        }
        fetchData()
    }, [])


    return (
        <View style={styles.container}>
            <Avatar name={userData.name} surname={userData.surname}/>
            <View style={styles.buttonContainer}>
                <Button color={GlobalStyles.colors.primary200} title="Logout" onPress={logoutHandler}/>
            </View>
        </View>
    )
}

export default OwnProfileScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 100
    },
    buttonContainer: {
        marginTop: 20,
        alignSelf: "center",
        width: 100
    }
})

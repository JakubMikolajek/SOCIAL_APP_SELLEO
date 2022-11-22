import {Button, StyleSheet, View} from 'react-native'
import {useContext} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AuthContext} from "../store/auth-context";
import Avatar from "../components/profile/Avatar";
import {useQueryClient} from "@tanstack/react-query"

import {GlobalStyles} from "../constants/GlobalStyles";

const OwnProfileScreen = () => {
    const authCtx = useContext(AuthContext)
    const queryClient = useQueryClient()

    const loginUserData = queryClient.getQueryData(['loginUser'])

    const logoutHandler = () => {
        AsyncStorage.clear
        authCtx.logout()
    }

    return (
        <View style={styles.container}>
            <Avatar name={loginUserData.data.first_name} surname={loginUserData.data.last_name} imageUrl={loginUserData.data.image_url}/>
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

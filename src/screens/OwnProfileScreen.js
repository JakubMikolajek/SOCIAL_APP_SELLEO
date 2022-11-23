import {Button, StyleSheet, View, Dimensions, ActivityIndicator, Text} from 'react-native'
import {useContext} from "react";
import {AuthContext} from "../store/auth-context";
import Avatar from "../components/profile/Avatar";
import {useQuery} from "@tanstack/react-query"
import {getCurrentUser} from "../helpers/userDataHelpers";
import {GlobalStyles} from "../constants/GlobalStyles";
import {SafeAreaView} from "react-native-safe-area-context";
import GridPostList from "../components/profile/GridPostList";
import Loader from "../components/UI/Loader";

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

const OwnProfileScreen = ({navigation}) => {
    const authCtx = useContext(AuthContext)
    const {isLoading, data} = useQuery(['loginUser'], () => getCurrentUser(authCtx.ownId));
    const userData = data?.data;

    const logoutHandler = () => {
        authCtx.logout()
    }

    const editProfileHandler = () => {
        navigation.navigate("UpadateData")
    }

    if (isLoading) {
        return <Loader/>
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 3}}>
                <Avatar name={userData.first_name} surname={userData.last_name} imageUrl={userData.image_url}/>
                <View style={styles.buttonContainer}>
                    <Button color={GlobalStyles.colors.primary200} title="Logout" onPress={logoutHandler}/>
                </View>
                <View style={styles.buttonContainerAlt}>
                    <Button style={styles.button} color={GlobalStyles.colors.primary100} title="Edit profile"
                            onPress={editProfileHandler}/>
                </View>
            </View>
            <View style={{flex: 4, alignItems: "center"}}>
                <GridPostList userId={authCtx.ownId}/>
            </View>
        </SafeAreaView>
    )
}

export default OwnProfileScreen

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 20,
        alignSelf: "center",
        width: 100
    },
    buttonContainerAlt: {
        marginTop: 20,
        alignSelf: "center",
        width: 150
    },
    gridContainer: {
        bottom: 40,
        marginTop: 10,
        alignItems: "center",
        width: windowWidth,
        height: windowHeight * 0.55
    }

})

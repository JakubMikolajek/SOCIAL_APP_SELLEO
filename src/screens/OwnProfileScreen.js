import {Button, StyleSheet, View, Dimensions, Switch, ActivityIndicator} from 'react-native'
import {useContext, useState} from "react";
import {AuthContext} from "../store/auth-context";
import Avatar from "../components/profile/Avatar";
import {useQuery} from "@tanstack/react-query"
import {getCurrentUser} from "../helpers/userDataHelpers";
import GridPostListAlt from "../components/profile/GridPostListAlt";
import OwnPostsListAlt from "../components/dashboard/postsList/OwnPostsListAlt";
import {GlobalStyles} from "../constants/GlobalStyles";

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

const OwnProfileScreen = ({navigation}) => {
    const [enable, setEnable] = useState(false)
    const toggleSwitch = () => setEnable(prevState => !prevState)
    const authCtx = useContext(AuthContext)
    const {isLoading, data } = useQuery(['loginUser'], () => getCurrentUser(authCtx.ownId));
    const userData = data?.data;

    const logoutHandler = () => {
        authCtx.logout()
    }

    const editProfileHandler = () => {
        navigation.navigate("UpadateData")
    }

    if(isLoading) {
        return <ActivityIndicator  size="large" color={GlobalStyles.colors.primary100}/>
    }
    return (
        <View style={styles.container}>
            <View>
                <Avatar name={userData.first_name} surname={userData.last_name} imageUrl={userData.image_url}/>
                <View style={styles.buttonContainer}>
                    <Button color={GlobalStyles.colors.primary200} title="Logout" onPress={logoutHandler}/>
                </View>
                <View style={styles.buttonContainerAlt}>
                    <Button style={styles.button} color={GlobalStyles.colors.primary100} title="Edit profile" onPress={editProfileHandler}/>
                </View>
            </View>
            <View style={styles.gridContainer}>
                <Switch trackColor={{false: GlobalStyles.colors.primary100, true: GlobalStyles.colors.primary200}} thumbColor={enable ? GlobalStyles.colors.primary100 : GlobalStyles.colors.primary200} onValueChange={toggleSwitch} value={enable} style={{left:120}}/>
                {!enable ? <GridPostListAlt/> : <OwnPostsListAlt/>}
            </View>
        </View>
    )
}

export default OwnProfileScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
    },
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
    gridContainer:{
        bottom: 40,
        marginTop:20,
        alignItems:"center",
        width: windowWidth,
        height: windowHeight/2
    }

})

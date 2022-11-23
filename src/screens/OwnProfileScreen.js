import {Button, View} from 'react-native'
import {useContext} from "react";
import {AuthContext} from "../store/auth-context";
import Avatar from "../components/UI/Avatar";
import {useQuery} from "@tanstack/react-query"
import {getCurrentUser} from "../helpers/userDataHelpers";
import {GlobalStyles} from "../constants/GlobalStyles";
import {SafeAreaView} from "react-native-safe-area-context";
import GridPostList from "../components/dashboard/GridPostList";
import Loader from "../components/UI/Loader";
import {profileScreen} from "../stylesheets/screens/ProfileScreen";


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
        <SafeAreaView style={profileScreen.container}>
            <View style={profileScreen.ownUserContainer}>
                <Avatar name={userData.first_name} surname={userData.last_name} imageUrl={userData.image_url}/>
                <View style={profileScreen.btn}>
                    <Button color={GlobalStyles.colors.primary200} title="Logout" onPress={logoutHandler}/>
                </View>
                <View style={profileScreen.btnAlt}>
                    <Button color={GlobalStyles.colors.primary100} title="Edit profile"
                            onPress={editProfileHandler}/>
                </View>
            </View>
            <View style={profileScreen.postContainer}>
                <GridPostList userId={authCtx.ownId}/>
            </View>
        </SafeAreaView>
    )
}

export default OwnProfileScreen
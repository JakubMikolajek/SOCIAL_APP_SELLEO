import {Alert, Button, View} from 'react-native'

import UsersList from "../components/dashboard/usersList/UsersList";
import PostsList from "../components/dashboard/postsList/PostsLists";
import {dashboardScreen} from "../stylesheets/screens/DashboardScreen";
import {SafeAreaView} from "react-native-safe-area-context";
import {useContext, useState} from "react";
import {AuthContext} from "../store/auth-context";
import {useNavigation} from "@react-navigation/native";
import {getLoginUserData, getUsersData} from "../hooks/userDataHooks";

const DashboardScreen = () => {
    const navigation = useNavigation()
    const authCtx = useContext(AuthContext)
    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        imageUri: ""
    })

    getUsersData()
    getLoginUserData(authCtx.ownId)

    // console.log(data)




    if(userData.name === null || userData.surname === null){
        return (<View style={{flex: 1,alignItems:"center", justifyContent:"center"}}>
            <Button title="Update your data" onPress={() => navigation.navigate("UpadateData")}/>
        </View>)
    }else {


    }


    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={dashboardScreen.container}>
            <UsersList/>
            <PostsList/>
        </View>
        </SafeAreaView>
    )
}

export default DashboardScreen

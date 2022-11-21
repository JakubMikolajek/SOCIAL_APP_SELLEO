import {Alert, Button, View} from 'react-native'

import UsersList from "../components/dashboard/usersList/UsersList";
import PostsList from "../components/dashboard/postsList/PostsLists";
import {dashboardScreen} from "../stylesheets/screens/DashboardScreen";
import {SafeAreaView} from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {client} from "../utils/supabase";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../store/auth-context";
import {useNavigation} from "@react-navigation/native";


const DashboardScreen = () => {
    const navigation = useNavigation()
    const authCtx = useContext(AuthContext)
    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        imageUri: ""
    })

    useEffect(() => {
        const fetchOwnProfileData = async () => {
            const user = await client
                .from("users")
                .select()
                .eq("uuid", authCtx.ownId)
                .single();
            setUserData({
                uuid: user.data.uuid,
                name: user.data.first_name,
                surname: user.data.last_name,
                imageUri: user.data.image_url
            })
        }
        fetchOwnProfileData()
    }, [])

    const setAsyncStorage = async() => {
        await AsyncStorage.setItem("@name", userData.name)
        await AsyncStorage.setItem("@surname", userData.surname)
        // await AsyncStorage.setItem("image", userData.imageUri)
    }

    if(userData.name === null || userData.surname === null){
        return (<View style={{flex: 1,alignItems:"center", justifyContent:"center"}}>
            <Button title="Update your data" onPress={() => navigation.navigate("UpadateData")}/>
        </View>)
    }else {
        setAsyncStorage()

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

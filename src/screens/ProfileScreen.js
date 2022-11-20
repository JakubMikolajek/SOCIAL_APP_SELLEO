import {Button, Text, View} from 'react-native'
import {useContext} from "react";
import {AuthContext} from "../store/auth-context";

import {centerScreen} from "../stylesheets/CenterScreen";

const ProfileScreen = () => {
    const authCtx = useContext(AuthContext)

    return (
        <View style={centerScreen.container}>
            <Text>ProfileScreen</Text>
            <Button title="Logout" onPress={() => authCtx.logout()}/>
        </View>
    )
}

export default ProfileScreen

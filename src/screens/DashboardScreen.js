import {View} from 'react-native'
import UsersList from "../components/dashboard/usersList/UsersList";
import PostsList from "../components/dashboard/postsList/PostsList";
import {dashboardScreen} from "../stylesheets/screens/DashboardScreen";
import {SafeAreaView} from "react-native-safe-area-context";

const DashboardScreen = () => {

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

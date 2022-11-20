import {View} from 'react-native'

import UsersList from "../components/dashboard/usersList/UsersList";
import PostsList from "../components/dashboard/postsList/PostsLists";
import {dashboardScreen} from "../stylesheets/screens/DashboardScreen";


const DashboardScreen = () => {
    return (
        <View style={dashboardScreen.container}>
            <UsersList/>
            <PostsList/>
        </View>
    )
}

export default DashboardScreen

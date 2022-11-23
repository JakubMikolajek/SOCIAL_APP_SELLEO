import {View} from 'react-native'
import UsersList from "../components/dashboard/UsersList";
import PostsList from "../components/dashboard/PostsList";
import {SafeAreaView} from "react-native-safe-area-context";
import {useQuery} from "@tanstack/react-query";
import {getPostsData} from "../helpers/postDataHelpers";
import {getUsersData} from "../helpers/userDataHelpers";
import Loader from "../components/UI/Loader";
import {dashboardScreen} from "../stylesheets/screens/DashboardScreen";

const DashboardScreen = () => {

    const {isLoading: isPostLoading} = useQuery(['posts'], () => getPostsData());
    const {isLoading: isUserLoading} = useQuery(['users'], () => getUsersData());

    if(isPostLoading || isUserLoading){
        return <Loader/>
    }

    return (
        <SafeAreaView style={dashboardScreen.container}>
            <View style={dashboardScreen.userList}>
                <UsersList/>
            </View>
            <View style={dashboardScreen.postList}>
                <PostsList/>
            </View>
        </SafeAreaView>
    )
}

export default DashboardScreen

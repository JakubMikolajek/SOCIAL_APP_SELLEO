import {View} from 'react-native'
import UsersList from "../components/dashboard/usersList/UsersList";
import PostsList from "../components/dashboard/postsList/PostsList";
import {SafeAreaView} from "react-native-safe-area-context";
import {useQuery} from "@tanstack/react-query";
import {getPostsData} from "../helpers/postDataHelpers";
import {getUsersData} from "../helpers/userDataHelpers";
import Loader from "../components/UI/Loader";

const DashboardScreen = () => {

    const {isLoading: isPostLoading} = useQuery(['posts'], () => getPostsData());
    const {isLoading: isUserLoading} = useQuery(['users'], () => getUsersData());

    if(isPostLoading || isUserLoading){
        return <Loader/>
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <UsersList/>
            </View>
            <View style={{flex: 6}}>
                <PostsList/>
            </View>
        </SafeAreaView>
    )
}

export default DashboardScreen

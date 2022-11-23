import {Switch, View} from 'react-native'
import {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {useQuery} from "@tanstack/react-query";
import {getUsersData} from "../helpers/userDataHelpers";
import Avatar from "../components/UI/Avatar";
import GridPostList from "../components/dashboard/GridPostList";
import OwnPostsList from "../components/dashboard/OwnPostsList";
import {profileScreen} from "../stylesheets/screens/ProfileScreen";
import {GlobalStyles} from "../constants/GlobalStyles";

const ProfileScreen = ({route}) => {
    const [enable, setEnable] = useState(false)
    const toggleSwitch = () => setEnable(prevState => !prevState)

    const userId = route.params.userId
    const {data: usersData} = useQuery(['users'], () => getUsersData());
    const users = usersData.data
    const user = users.find((user) => user.uuid === userId)

    return (
        <SafeAreaView style={profileScreen.container}>
            <View style={profileScreen.userContainer}>
                <Avatar name={user.first_name} surname={user.last_name} imageUrl={user.image_url}/>
            </View>
            <View style={profileScreen.postContainer}>
                <Switch trackColor={{false: GlobalStyles.colors.primary100, true: GlobalStyles.colors.primary200}}
                        thumbColor={enable ? GlobalStyles.colors.primary100 : GlobalStyles.colors.primary200}
                        onValueChange={toggleSwitch} value={enable} style={{left: 120}}/>
                {!enable ? <GridPostList userId={userId}/> : <OwnPostsList userId={userId}/>}
            </View>

        </SafeAreaView>

    )
}

export default ProfileScreen

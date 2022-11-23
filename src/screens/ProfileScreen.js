import {Dimensions, StyleSheet, Switch, View} from 'react-native'
import Avatar from "../components/profile/Avatar";
import {useQuery} from "@tanstack/react-query";
import {GlobalStyles} from "../constants/GlobalStyles";
import {useState} from "react";
import {getUsersData} from "../helpers/userDataHelpers";
import GridPostList from "../components/profile/GridPostList";
import OwnPostsList from "../components/dashboard/postsList/OwnPostsList";

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

const ProfileScreen = ({route}) => {
    const userId = route.params.userId
    const [enable, setEnable] = useState(false)
    const toggleSwitch = () => setEnable(prevState => !prevState)
    const {data: userData} = useQuery(['users'], () => getUsersData());
    const users = userData.data
    const user = users.find((user) => user.uuid === userId)

    return (
        <View style={styles.container}>
            <Avatar name={user.first_name} surname={user.last_name} imageUrl={user.image_url}/>
            <View style={styles.gridContainer}>
                <Switch trackColor={{false: GlobalStyles.colors.primary100, true: GlobalStyles.colors.primary200}} thumbColor={enable ? GlobalStyles.colors.primary100 : GlobalStyles.colors.primary200} onValueChange={toggleSwitch} value={enable} style={{left:120}}/>
                {!enable ? <GridPostList userId={userId}/> : <OwnPostsList userId={userId}/>}
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 100
    },
    buttonContainer: {
        marginTop: 20,
        alignSelf: "center",
        width: 100
    },
    gridContainer:{
        bottom: 40,
        marginTop:20,
        alignItems:"center",
        width: windowWidth,
        height: windowHeight * 0.75
    }
})

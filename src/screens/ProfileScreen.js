import {StyleSheet, View} from 'react-native'

import {DUMMY_DATA} from "../../DUMMY_DATA/dummy-data";
import Avatar from "../components/profile/Avatar";

const ProfileScreen = ({route}) => {
    const userData = DUMMY_DATA.find((user) => user.uuid === route.params.userId)

    return (
        <View style={styles.container}>
            <Avatar name={userData.name} surname={userData.surname} imageUrl={userData.imageUrl}/>
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
    }
})

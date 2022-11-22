import {StyleSheet, View} from 'react-native'
import Avatar from "../components/profile/Avatar";
import {useQueryClient} from "@tanstack/react-query";

const ProfileScreen = ({route}) => {
    const queryClient = useQueryClient()
    const data = queryClient.getQueryData(['users'])
    const users = data.data
    const user = users.find((user) => user.uuid === route.params.userId)

    return (
        <View style={styles.container}>
            <Avatar name={user.first_name} surname={user.last_name} imageUrl={user.image_url}/>
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

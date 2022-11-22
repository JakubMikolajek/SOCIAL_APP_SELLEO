import {Image, StyleSheet, Text, View} from 'react-native'
import {DUMMY_DATA, DUMMY_POST} from "../../DUMMY_DATA/dummy-data"
import SingleUser from "../components/dashboard/usersList/SingleUser";
import {useQueryClient} from "@tanstack/react-query";

const PostDetailScreen = ({navigation, route}) => {
    const queryClient = useQueryClient()
    const userData ={
        name: route.params.userData.userName,
        surname: route.params.userData.userSurname,
        image: route.params.userData.userImg,
        uuid: route.params.userData.userUuid
    }
    const postId = route.params.postId
    const posts = queryClient.getQueryData(['posts'])
    const postsData = posts.data
    const post = postsData.find((post) => post.id === postId)

    const pressHandler = () => {
        navigation.navigate("Profile", {
            userId: userData.uuid
        })
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: post.image_url}}/>
            <View style={styles.innerContainer}>
                <SingleUser name={userData.name} surname={userData.surname} imageUrl={userData.image}
                            onPress={pressHandler}/>
                <View>
                    <Text> likes</Text>
                    <Text>Title: {post.description}</Text>
                </View>
            </View>
            <View>
                <Text>Comments in future</Text>
                <Text>Comments in future</Text>
                <Text>Comments in future</Text>
                <Text>Comments in future</Text>
            </View>
            <Text>Here will be add comments input</Text>
        </View>
    )
}

export default PostDetailScreen

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 225
    },
    container: {
        marginTop: 90,
        alignItems: "center"
    },
    innerContainer:{
        flexDirection: "row",
        alignSelf:"flex-start",
        marginLeft: 20,
        marginTop: 10,
        alignItems:"center"
    }
})

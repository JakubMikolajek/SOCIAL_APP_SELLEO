import {Image, StyleSheet, Text, View} from 'react-native'
import SingleUser from "../components/dashboard/usersList/SingleUser";
import {useQuery} from "@tanstack/react-query";
import {getUsersData} from "../helpers/userDataHelpers";
import {getPostsData} from "../helpers/postDataHelpers";

const PostDetailScreen = ({navigation, route}) => {
    const postId = route.params.postId
    const creatorId = route.params.creatorId

    const {data: postData} = useQuery(['posts'], () => getPostsData(), {enabled: false});
    const {data: userData} = useQuery(['users'], () => getUsersData(), {enabled: false});
    const posts = postData.data
    const users = userData.data
    const singlePost = posts.find((post) => post.id === postId)
    const postOwner = users.find((user) => user.uuid === creatorId)


    const pressHandler = () => {
        navigation.navigate("Profile", {
            userId: postOwner.uuid
        })
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: singlePost.image_url}}/>
            <View style={styles.innerContainer}>
                <SingleUser name={postOwner.first_name} surname={postOwner.last_name} imageUrl={postOwner.image_url}
                            onPress={pressHandler}/>
                <View>
                    <Text> likes</Text>
                    <Text>Title: {singlePost.description}</Text>
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
    innerContainer: {
        flexDirection: "row",
        alignSelf: "flex-start",
        marginLeft: 20,
        marginTop: 10,
        alignItems: "center"
    }
})

import {Image, StyleSheet, Text, View} from 'react-native'
import {DUMMY_DATA, DUMMY_POST} from "../../DUMMY_DATA/dummy-data"
import SingleUser from "../components/dashboard/usersList/SingleUser";

const PostDetailScreen = ({navigation, route}) => {
    const postId = route.params.postId

    const selectedPost = DUMMY_POST.find((post) => post.id === postId)

    const postAuthor = DUMMY_DATA.find((user) => user.uuid === selectedPost.uuid)

    const pressHandler = () => {
        navigation.navigate("Profile", {
            uuid: postAuthor.uuid
        })
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: selectedPost.imageUrl}}/>
            <View style={styles.innerContainer}>
                <SingleUser name={postAuthor.name} surname={postAuthor.surname} imageUrl={postAuthor.imageUrl}
                            onPress={pressHandler}/>
                <View>
                    <Text>{selectedPost.likes} likes</Text>
                    <Text>Title: {selectedPost.title}</Text>
                </View>
            </View>
            <Text>{selectedPost.description}</Text>
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

import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native'
import SingleUser from "../components/dashboard/usersList/SingleUser";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {getUsersData} from "../helpers/userDataHelpers";
import {addComment, getPostsData} from "../helpers/postDataHelpers";
import CommentsList from "../components/dashboard/postsList/CommentsList";
import {input} from "../stylesheets/components/ui/Input";
import {useState} from "react";

const PostDetailScreen = ({navigation, route}) => {
    const postId = route.params.postId
    const creatorId = route.params.creatorId

    const {data: postData} = useQuery(['posts'], () => getPostsData(), {enabled: false});
    const {data: userData} = useQuery(['users'], () => getUsersData(), {enabled: false});
    const posts = postData.data
    const users = userData.data
    const singlePost = posts.find((post) => post.id === postId)
    const postOwner = users.find((user) => user.uuid === creatorId)
    const comments = singlePost.comments

    const [text, setText] = useState("")
    const client = useQueryClient()

    const mutation = useMutation({
        mutationFn: (body) => {
            return addComment(postId, body)
        },
        onError: () => {
            console.log('onError')
        },
        onSuccess: async () => {
            await client.invalidateQueries(['posts'])
        }
    })

    const pressHandler = () => {
        navigation.navigate("Profile", {
            userId: postOwner.uuid
        })
    }

    const sendComment = () => {
        mutation.mutate(text)
        setText("")

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
                {comments.length > 0 ? <CommentsList comments={comments} postId={postId}/>: <Text>Nie ma komentarzy</Text>}
            </View>
            <View>
                <TextInput style={input.input} value={text} onChangeText={(e) => setText(e)} placeholder="Comment..."/>
                <Button title="Add comment" onPress={sendComment}/>
            </View>
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

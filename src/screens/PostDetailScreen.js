import {
    Button,
    Image,
    Keyboard, KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from 'react-native'
import {useContext, useState} from "react";
import {AuthContext} from "../store/auth-context";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {getUsersData} from "../helpers/userDataHelpers";
import {addComment, deleteOwnPost, getPostsData} from "../helpers/postDataHelpers";
import SingleUser from "../components/dashboard/SingleUser";
import CommentsList from "../components/dashboard/CommentsList";
import {input} from "../stylesheets/components/ui/Input";
import {postDetali} from "../stylesheets/screens/PostDetali";

const PostDetailScreen = ({navigation, route}) => {
    const [text, setText] = useState("")
    const client = useQueryClient()
    const authCtx = useContext(AuthContext)
    const postId = route.params.postId
    const creatorId = route.params.creatorId
    const likes = route.params.likes

    const {data: postData} = useQuery(['posts'], () => getPostsData(), {enabled: false})
    const {data: userData} = useQuery(['users'], () => getUsersData(), {enabled: false})

    const postsData = postData.data
    const usersData = userData.data

    const singlePost = postsData.find((post) => post.id === postId)
    const postOwner = usersData.find((user) => user.uuid === creatorId)

    const comments = singlePost.comments

    const commentMutation = useMutation({
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

    const deletePost = useMutation({
        mutationFn: () => {
            return deleteOwnPost(postId)
        },
        onError: () => {
            console.log('onError')
        },
        onSuccess: async () => {
            await client.invalidateQueries(['posts'])
            navigation.navigate("OwnProfile")
        }
    })

    const pressHandler = () => {
        navigation.navigate("Profile", {
            userId: postOwner.uuid
        })
    }

    const sendComment = () => {
        commentMutation.mutate(text)
        setText("")

    }

    const deleteYourPost = () => {
        deletePost.mutate()
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={postDetali.container}>
                    <Image style={postDetali.image} source={{uri: singlePost.image_url}}/>
                    <View style={postDetali.userContainer}>
                        <SingleUser name={postOwner.first_name} surname={postOwner.last_name}
                                    imageUrl={postOwner.image_url}
                                    onPress={pressHandler}/>
                        <View>
                            <Text>{likes} likes</Text>
                            <Text>Title: {singlePost.description}</Text>
                        </View>
                        {authCtx ? <View style={postDetali.deleteBtnContainer}>
                            <Button title="Delete Post" onPress={deleteYourPost}/>
                        </View> : null}
                    </View>
                    <View style={postDetali.commentContainer}>
                        <TextInput style={input.input} value={text} onChangeText={(e) => setText(e)}
                                   placeholder="Comment..."/>
                        <Button title="Add comment" onPress={sendComment}/>
                    </View>
                    <View>
                        {comments.length > 0 ? <CommentsList comments={comments} postId={postId}/> :
                            <Text>Nie ma komentarzy</Text>}
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default PostDetailScreen


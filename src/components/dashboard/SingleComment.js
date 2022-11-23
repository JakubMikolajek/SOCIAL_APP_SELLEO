import {Image, Pressable, Text, View} from 'react-native'
import {FontAwesome} from "@expo/vector-icons"
import {useContext} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {getUsersData} from "../../helpers/userDataHelpers";
import {AuthContext} from "../../store/auth-context";
import {deleteComment} from "../../helpers/postDataHelpers";
import {dashboardStyles} from "../../stylesheets/components/dashboardStyles";


const SingleComment = ({body, creatorId, id}) => {
    const client = useQueryClient()
    const authCtx = useContext(AuthContext)
    const commentId = id
    const {data: userData} = useQuery(['users'], () => getUsersData(), {enabled: false});
    const users = userData.data
    const user = users.find((user) => user.uuid === creatorId)


    const mutation = useMutation({
        mutationFn: () => {
            return deleteComment(commentId)
        },
        onError: () => {
            console.log('onError')
        },
        onSuccess: async () => {
            await client.invalidateQueries(['posts'])
        }
    })


    const deleteComments = () => {
        mutation.mutate()
    }

    return (
        <View style={dashboardStyles.comments.singleCommentContainer}>
            <View style={dashboardStyles.comments.singleCommentContainer}>
                <Image style={dashboardStyles.comments.image}
                       source={user.image_url ? {uri: user.image_url} : require("../../constants/profile-logo.png")}/>
                <Text>{user.first_name}: </Text>
                <Text>{body}</Text>
            </View>
            {creatorId === authCtx.ownId ? <View style={dashboardStyles.comments.margin}>
                <Pressable android_ripple={{color: "#ccc"}}
                           style={({pressed}) => (pressed ? dashboardStyles.comments.pressed : null)}
                           onPress={deleteComments}>
                    <FontAwesome name="remove" size={16} color="black"/>
                </Pressable>
            </View> : null}

        </View>
    )
}

export default SingleComment

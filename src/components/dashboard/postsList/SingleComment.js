import {Image, Pressable, StyleSheet, Text, View} from 'react-native'
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {getUsersData} from "../../../helpers/userDataHelpers";
import {FontAwesome} from "@expo/vector-icons"
import {useContext} from "react";
import {AuthContext} from "../../../store/auth-context";
import {deleteComment} from "../../../helpers/postDataHelpers";
import {GlobalStyles} from "../../../constants/GlobalStyles";


const SingleComment = ({body, creatorId, id}) => {
    const client = useQueryClient()
    const authCtx = useContext(AuthContext)
    const {data: userData} = useQuery(['users'], () => getUsersData(), {enabled: false});
    const users = userData.data
    const user = users.find((user) => user.uuid === creatorId)
    const commentId = id

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
        <View style={styles.container}>
            <View style={styles.container}>
                <Image style={styles.image} source={user.image_url ? {uri: user.image_url}: require("../../../../DUMMY_DATA/profile-logo.png")}/>
                <Text>{user.first_name}: </Text>
                <Text>{body}</Text>
            </View>
            {creatorId === authCtx.ownId ? <View style={styles.margin}>
                <Pressable android_ripple={{color: "#ccc"}} style={({pressed}) => (pressed ? styles.pressed : null)}
                           onPress={deleteComments}>
                    <FontAwesome name="remove" size={16} color="black"/>
                </Pressable>
            </View> : null}

        </View>
    )
}

export default SingleComment

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    margin: {
        marginLeft: 10
    },
    pressed: {
        opacity: 0.5
    },
    image:{
        width:30,
        height:30,
        borderRadius: 75,
        borderColor: GlobalStyles.colors.primary200
    },
})
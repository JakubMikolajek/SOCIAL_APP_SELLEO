import {Image, Pressable, Text, View} from 'react-native'
import {Ionicons} from "@expo/vector-icons"
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {getUsersData} from "../../helpers/userDataHelpers";
import {useNavigation} from "@react-navigation/native";
import {dashboardStyles} from "../../stylesheets/components/dashboardStyles";
import {useContext} from "react";
import {AuthContext} from "../../store/auth-context";
import {GlobalStyles} from "../../constants/GlobalStyles";
import {addLikes, deleteLikes} from "../../helpers/postDataHelpers";

const SinglePost = ({creatorId, id, imageUrl, comments, likes}) => {
    const client = useQueryClient()
    const navigation = useNavigation()
    const authCtx = useContext(AuthContext)

    const {data: userData} = useQuery(['users'], () => getUsersData(), {enabled: false})
    const users = userData.data
    const postOwner = users.find((user) => user.uuid === creatorId)
    const countLikes = likes.length
    const ownLike = likes.find((like) => like.creator_uuid === authCtx.ownId)

    const addMutation = useMutation({
        mutationFn: () => {
            return addLikes(id)
        },
        onError: () => {
            console.log('onError')
        },
        onSuccess: async() => {
            await client.invalidateQueries(
                ['posts']
            )
        }
    })

    const removeMutation = useMutation({
        mutationFn: () => {
            return deleteLikes(ownLike.id)
        },
        onError: () => {
            console.log('onError')
        },
        onSuccess: async() => {
            await client.invalidateQueries(
                ['posts']
            )
        }
    })

    const pressHandler = () => {
        navigation.navigate("PostDetail", {
            postId: id,
            creatorId: creatorId,
            likes: countLikes
        })
    }

    const addLike = () => {
        addMutation.mutate()
    }

    const removeLike = () => {
        removeMutation.mutate()
    }

    return (
        <View style={dashboardStyles.singlePost.container}>
            <View style={dashboardStyles.singlePost.innerContainer}>
                <View style={dashboardStyles.singlePost.textContainer}>
                    <Text style={dashboardStyles.singlePost.nameText}>{postOwner.first_name}</Text>
                </View>
                <Pressable android_ripple={{color: "#ccc"}}
                           style={({pressed}) => (pressed ? dashboardStyles.singlePost.pressed : null)}
                           onPress={pressHandler}>
                    <View style={dashboardStyles.singlePost.image}>
                        <Image style={dashboardStyles.singlePost.image} source={{uri: imageUrl}}/>
                    </View>
                </Pressable>
                <View style={dashboardStyles.singlePost.row}>
                    <View style={[dashboardStyles.singlePost.textContainer, dashboardStyles.singlePost.textContainerAlt]}>
                        <Text>{countLikes} likes</Text>
                        <Text>Last comment: {comments ? comments.body : "No comments"}</Text>
                    </View>
                    <View style={dashboardStyles.singlePost.likeContainer}>
                        <Pressable onPress={ownLike ? removeLike : addLike} style={({pressed}) => (pressed ? dashboardStyles.comments.pressed : null)}>
                            {ownLike ? <Ionicons name="heart" size={32} color={GlobalStyles.colors.primary200}/> :
                                <Ionicons name="heart-outline" size={32} color={GlobalStyles.colors.primary200}/>}
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SinglePost
import {Image, Pressable, Text, View} from 'react-native'
import {useQuery} from "@tanstack/react-query";
import {getUsersData} from "../../helpers/userDataHelpers";
import {useNavigation} from "@react-navigation/native";
import {dashboardStyles} from "../../stylesheets/components/dashboardStyles";

const SinglePost = ({creatorId, id, imageUrl, comments}) => {
    const navigation = useNavigation()

    const {data: userData} = useQuery(['users'], () => getUsersData(), {enabled: false});
    const users = userData.data
    const postOwner = users.find((user) => user.uuid === creatorId)
    const pressHandler = () => {
        navigation.navigate("PostDetail", {
            postId: id,
            creatorId: creatorId
        })
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
                <View style={[dashboardStyles.singlePost.textContainer, dashboardStyles.singlePost.textContainerAlt]}>
                    <Text>likes</Text>
                    {comments ? <Text>Last comment: {comments.body}</Text> : null}
                </View>
            </View>
        </View>
    )
}

export default SinglePost
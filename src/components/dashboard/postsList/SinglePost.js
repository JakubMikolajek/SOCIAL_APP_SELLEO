import {Image, Pressable, Text, View} from 'react-native'
import {dashboardStyles} from "../../../stylesheets/components/dashboardStyles";
import {useQuery} from "@tanstack/react-query";
import {getUsersData} from "../../../helpers/userDataHelpers";
import {useNavigation} from "@react-navigation/native";

const SinglePost = ({creatorId, id, imageUrl, likes}) => {
    const navigation = useNavigation()

    const {data: userData} = useQuery(['users'], () => getUsersData(), {enabled:false});
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
                <Text style={dashboardStyles.singlePost.text}>{postOwner.first_name}</Text>
                <Pressable android_ripple={{color: "#ccc"}}
                           style={({pressed}) => (pressed ? dashboardStyles.singlePost.pressed : null)}
                           onPress={pressHandler}>
                    <View style={dashboardStyles.singlePost.image}>
                        <Image style={dashboardStyles.singlePost.image} source={{uri: imageUrl}}/>
                    </View>
                </Pressable>
                <Text>{likes ? likes : "0"} likes</Text>
                <Text>Somebody - add later</Text>
            </View>
        </View>
    )
}

export default SinglePost
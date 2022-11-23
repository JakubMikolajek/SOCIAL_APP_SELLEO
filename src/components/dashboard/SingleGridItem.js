import {Image, Pressable, View} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import {dashboardStyles} from "../../stylesheets/components/dashboardStyles";

const SingleGridItem = ({creatorId, id, imageUrl}) => {
    const navigation = useNavigation()

    const pressHandler = () => {
        navigation.navigate("PostDetail", {
            postId: id,
            creatorId: creatorId
        })
    }
    return (
        <View style={dashboardStyles.gridPost.container}>
            <Pressable android_ripple={{color: "#ccc"}}
                       style={({pressed}) => (pressed ? dashboardStyles.gridPost.pressed : null)}
                       onPress={pressHandler}>
                <View style={dashboardStyles.gridPost.image}>
                    <Image style={dashboardStyles.gridPost.image} source={{uri: imageUrl}}/>
                </View>
            </Pressable>
        </View>
    )
}

export default SingleGridItem

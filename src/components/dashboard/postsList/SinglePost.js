import {Image, Pressable, Text, View} from 'react-native'
import {dashboardStyles} from "../../../stylesheets/components/dashboardStyles";


const SinglePost = ({name, imageUrl, likes, onPress}) => {
    return (
        <View style={dashboardStyles.singlePost.container}>
            <View style={dashboardStyles.singlePost.innerContainer}>
                <Text style={dashboardStyles.singlePost.text}>{name}</Text>
                <Pressable android_ripple={{color: "#ccc"}} style={({pressed}) => (pressed ? dashboardStyles.singlePost.pressed : null)} onPress={onPress}>
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
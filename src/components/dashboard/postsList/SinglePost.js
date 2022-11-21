import {Image, Pressable, StyleSheet, Text, View} from 'react-native'
import {singlePost} from "../../../stylesheets/components/dashboard/SinglePost";



const SinglePost = ({name, imageUrl, likes, onPress}) => {
    return (
        <View style={singlePost.outercontainer}>
            <View style={singlePost.container}>
                <Text style={singlePost.text}>{name}</Text>
                <Pressable android_ripple={{color: "#ccc"}} style={({pressed}) => (pressed ? styles.pressed : null)} onPress={onPress}>
                    <View style={singlePost.image}>
                        <Image style={singlePost.image} source={{uri: imageUrl}}/>
                    </View>
                </Pressable>
                <Text>{likes} likes</Text>
                <Text>Somebody - add later</Text>
            </View>
        </View>
    )
}

export default SinglePost

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    }
})
import {Image, Pressable, StyleSheet, View} from 'react-native'
import {useNavigation} from "@react-navigation/native";

const SingleGridItem = ({creatorId, id, imageUrl}) => {
    const navigation = useNavigation()

    const pressHandler = () => {
        navigation.navigate("PostDetail", {
            postId: id,
            creatorId: creatorId
        })
    }
    return (
        <View style={styles.container}>
            <Pressable android_ripple={{color: "#ccc"}} style={({pressed}) => (pressed ? styles.pressed : null)}
                       onPress={pressHandler}>
                <View style={styles.image}>
                    <Image style={styles.image} source={{uri: imageUrl}}/>
                </View>
            </Pressable>
        </View>
    )
}

export default SingleGridItem

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        margin: 5,
    },
    pressed: {
        opacity: 0.5
    },
    image: {
        width: 100,
        height: 100
    }
})
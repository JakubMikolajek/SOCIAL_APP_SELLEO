import {Image, Pressable,Text, View} from 'react-native'
import {singleUser} from "../../../stylesheets/components/dashboard/SingleUser";

const SingleUser = ({name, surname, imageUrl,onPress}) => {
    return (
        <Pressable android_ripple={{color: "#ccc"}} style={({pressed}) => (pressed ? singleUser.buttonPressed : null)}
                   onPress={onPress}>
            <View style={singleUser.container}>
                <View>
                    <Image style={singleUser.image} source={{ uri: imageUrl }}/>
                </View>
                <Text style={singleUser.text}>{name ? name : "Name"}</Text>
                <Text style={singleUser.text}>{surname ? surname : "Surname"}</Text>
            </View>
        </Pressable>
    )
}

export default SingleUser
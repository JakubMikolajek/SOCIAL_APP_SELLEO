import {Image, Text, View} from 'react-native'
import {avatar} from "../../stylesheets/components/ui/Avatar";

const Avatar = ({name, surname, imageUrl}) => {
    return (
        <View style={avatar.container}>
            <Image style={avatar.image} source={imageUrl ? {uri: imageUrl}: require("../../constants/profile-logo.png")}/>
            <Text style={avatar.text}>{name ? name : "Name"} {surname ? surname : "Surname"}</Text>
        </View>
    )
}

export default Avatar

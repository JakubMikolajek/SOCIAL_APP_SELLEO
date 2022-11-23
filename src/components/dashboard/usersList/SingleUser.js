import {Image, Pressable,Text, View} from 'react-native'
import {dashboardStyles} from "../../../stylesheets/components/dashboardStyles";

const SingleUser = ({name, surname, imageUrl,onPress}) => {
    return (
        <Pressable android_ripple={{color: "#ccc"}} style={({pressed}) => (pressed ? dashboardStyles.singleUser.buttonPressed : null)}
                   onPress={onPress}>
            <View style={dashboardStyles.singleUser.container}>
                <View>
                    <Image style={dashboardStyles.singleUser.image} source={imageUrl ? { uri: imageUrl } : require("../../../constants/profile-logo.png")}/>
                </View>
                <Text style={dashboardStyles.singleUser.text}>{name ? name : "Name"}</Text>
                <Text style={dashboardStyles.singleUser.text}>{surname ? surname : "Surname"}</Text>
            </View>
        </Pressable>
    )
}

export default SingleUser
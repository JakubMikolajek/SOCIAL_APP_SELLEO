import {Image, StyleSheet, Text, View} from 'react-native'
import {GlobalStyles} from "../../constants/GlobalStyles";

const Avatar = ({name, surname, imageUrl}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={imageUrl ? {uri: imageUrl}: require("../../constants/profile-logo.png")}/>
            <Text style={styles.text}>{name ? name : "Name"} {surname ? surname : "Surname"}</Text>
        </View>
    )
}

export default Avatar

const styles = StyleSheet.create({
    image:{
        width:125,
        height:125,
        borderRadius: 75,
        borderColor: GlobalStyles.colors.primary200
    },
    container:{
        alignSelf:"center",
        alignItems:"center",
    },
    text:{
        marginTop: 10,
        fontSize: 16,
        fontWeight:"500"
    }
})
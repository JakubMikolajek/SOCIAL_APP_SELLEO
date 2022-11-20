import {Dimensions, StyleSheet} from "react-native";
import {GlobalStyles} from "../../../constants/GlobalStyles";

const screenWidth = Dimensions.get("window").width

export const singlePost = StyleSheet.create({
    outercontainer:{
        flex:1,
        alignItems:'center',
        width: screenWidth,
        borderBottomWidth: 1,
        borderColor:"#cacaca"
    },
    container: {
        marginVertical: 10,
        width: 300,
        height: 300,
    },
    image: {
        alignSelf: "center",
        width: 300,
        height: 225,
    },
    text: {
        fontSize: 16,
        color: GlobalStyles.colors.black
    }
})
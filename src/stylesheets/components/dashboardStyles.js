import {Dimensions, StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants/GlobalStyles";

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

export const dashboardStyles = StyleSheet.create({
    singlePost: {
        container: {
            alignItems: 'center',
            width: windowWidth,
            borderBottomWidth: 1,
            borderColor: "#cacaca"
        },
        innerContainer: {
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
        },
        pressed: {
            opacity: 0.5
        }
    },
    singleUser: {
        form:{
            alignSelf: "flex-start",
            flex:1
        },
        container: {
            width: 70,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
        },
        image: {
            width: 50,
            height: 50,
            borderRadius: 25,
            borderColor: GlobalStyles.colors.primary100,
            borderWidth: 2

        },
        text: {
            fontSize: 10
        },
        buttonPressed: {
            opacity: 0.5
        }
    }
})
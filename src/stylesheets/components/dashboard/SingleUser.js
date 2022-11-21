import {StyleSheet} from "react-native";
import {GlobalStyles} from "../../../constants/GlobalStyles";

export const singleUser = StyleSheet.create({
    container: {
        marginBottom:10,
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
        borderWidth:2

    },
    text: {
        fontSize: 10
    },
    buttonPressed: {
        opacity: 0.5
    }
})
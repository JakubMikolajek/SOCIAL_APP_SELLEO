import {StyleSheet} from "react-native";

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
        borderRadius: 25
    },
    text: {
        fontSize: 10
    },
    buttonPressed: {
        opacity: 0.5
    }
})
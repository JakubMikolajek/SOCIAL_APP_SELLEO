import {StyleSheet} from "react-native";

export const centerScreen = StyleSheet.create({
    container: {
        marginTop:100,
        flex:1,
        alignItems: "center",
    },
    innerContainer:{
        marginTop:0,
        justifyContent: "center",
        alignItems: "center",
    }
})
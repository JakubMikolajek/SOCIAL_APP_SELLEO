import {StyleSheet} from "react-native";

export const postDetali = StyleSheet.create({
    container:{
        marginTop: 90,
        alignItems: "center"
    },
    image:{
        width:300,
        height:225
    },
    userContainer:{
        flexDirection: "row",
        alignSelf: "flex-start",
        marginLeft: 20,
        marginTop: 10,
        alignItems: "center"
    },
    commentContainer:{
        flexDirection:"row",
        marginBottom: 20
    },
    deleteBtnContainer:{
        marginLeft:30
    }
})
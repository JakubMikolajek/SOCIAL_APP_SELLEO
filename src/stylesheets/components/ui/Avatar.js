import {StyleSheet} from "react-native";
import {GlobalStyles} from "../../../constants/GlobalStyles";

export const avatar = StyleSheet.create({
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
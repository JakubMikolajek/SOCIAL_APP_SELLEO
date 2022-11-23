import {StyleSheet} from "react-native";
import {GlobalStyles} from "../../../constants/GlobalStyles";

export const input = StyleSheet.create({
    inputContainer: {
        width:200,
        height:50,
        margin: 8,
    },
    text: {
        color: GlobalStyles.colors.primary100,
        marginBottom: 4,
    },
    textInvalid: {
        color: GlobalStyles.colors.error,
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: GlobalStyles.colors.primary200 ,
        fontSize: 16,
    },
    inputInvalid: {
        borderColor: GlobalStyles.colors.error
    },
})
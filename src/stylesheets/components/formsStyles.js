import {StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants/GlobalStyles";

export const formsStyles = StyleSheet.create({
    errorMessage: {
        color: GlobalStyles.colors.error
    },
    errorContainer:{
        padding:10
    },
    container: {
        width: 200,
        marginVertical: 24
    },
    buttonContainer: {
        marginTop: 20,
        width: 100,
        alignSelf: "center"
    },
    controlContainer: {
        width: 200,
        height: 100
    }
})
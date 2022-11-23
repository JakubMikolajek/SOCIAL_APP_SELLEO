import {StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants/GlobalStyles";

export const authScreenStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: GlobalStyles.colors.primary100,
        fontSize: 24,
        fontWeight: "500"
    }
})
import {
    Button,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TouchableWithoutFeedback,
    View
} from 'react-native'
import {GlobalStyles} from "../constants/GlobalStyles";
import {centerScreen} from "../stylesheets/CenterScreen";
import {useNavigation} from "@react-navigation/native";
import DataForm from "../components/forms/DataForm";
import {useContext} from "react";
import {AuthContext} from "../store/auth-context";



const SetDataScreen = () => {
    const authCtx = useContext(AuthContext)
    const navigation = useNavigation()
    const onSubmit = (data) => {
        authCtx.updateData(data.name, data.surname)
        navigation.navigate("Dashboard")
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView style={centerScreen.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={centerScreen.container}>
                    <DataForm onSubmit={onSubmit}/>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )

}

export default SetDataScreen

const styles = StyleSheet.create({})
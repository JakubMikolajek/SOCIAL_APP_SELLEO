import {Keyboard, KeyboardAvoidingView, Platform, Text, TouchableWithoutFeedback, View} from 'react-native'

import {centerScreen} from "../stylesheets/CenterScreen";
import RegisterForm from "../components/forms/RegisterForm";
import {authScreenStyles} from "../stylesheets/screens/authScreenStyles";
import {useContext} from "react";
import {AuthContext} from "../store/auth-context";

const RegisterScreen = ({navigation}) => {
    const authCtx = useContext(AuthContext)
    const onSubmit = (data) => {
        authCtx.register(data.email, data.password)
        navigation.navigate("Login")
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView style={centerScreen.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={centerScreen.container}>
                    <Text style={authScreenStyles.text}>Register</Text>
                    <RegisterForm onSubmit={onSubmit}/>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default RegisterScreen
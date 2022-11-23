import {Keyboard, KeyboardAvoidingView, Platform, Text, TouchableWithoutFeedback, View} from 'react-native'
import RegisterForm from "../components/forms/RegisterForm";
import {authScreenStyles} from "../stylesheets/screens/authScreenStyles";
import {useContext} from "react";
import {AuthContext} from "../store/auth-context";

const RegisterScreen = ({navigation}) => {
    const authCtx = useContext(AuthContext)
    const onSubmit = (data) => {
        authCtx.register(data.email, data.password)
        navigation.goBack()
    }

    return (
        <KeyboardAvoidingView style={authScreenStyles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={authScreenStyles.innerContainer}>
                    <Text style={authScreenStyles.text}>Register</Text>
                    <RegisterForm onSubmit={onSubmit}/>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen
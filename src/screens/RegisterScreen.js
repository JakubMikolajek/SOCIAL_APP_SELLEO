import {Keyboard, KeyboardAvoidingView, Platform, Text, TouchableWithoutFeedback, View} from 'react-native'

import {centerScreen} from "../stylesheets/CenterScreen";
import RegisterForm from "../components/forms/RegisterForm";
import {registerScreen} from "../stylesheets/screens/RegisterScreen";

const RegisterScreen = ({navigation}) => {
    const onSubmit = (data) => {
        navigation.navigate("Login")
        console.log(data)
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView style={centerScreen.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={centerScreen.container}>
                    <Text style={registerScreen.text}>Register</Text>
                    <RegisterForm onSubmit={onSubmit}/>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default RegisterScreen
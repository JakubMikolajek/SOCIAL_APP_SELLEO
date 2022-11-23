import {Button, Text, TouchableWithoutFeedback, View, Keyboard, KeyboardAvoidingView, Platform} from 'react-native'
import {useContext} from "react";
import {AuthContext} from "../store/auth-context";
import LoginForm from "../components/forms/LoginForm";
import {GlobalStyles} from "../constants/GlobalStyles";
import {authScreenStyles} from "../stylesheets/screens/authScreenStyles";

const LoginScreen = ({navigation}) => {
    const authCtx = useContext(AuthContext)

    const onSubmit = (data) => {
        authCtx.login(data.email, data.password)
    }

    return (

        <KeyboardAvoidingView style={authScreenStyles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={authScreenStyles.innerContainer}>
                    <Text style={authScreenStyles.text}>Login</Text>
                    <LoginForm onSubmit={onSubmit}/>
                    <Button color={GlobalStyles.colors.primary200} title="Sign up"
                            onPress={() => navigation.navigate("Register")}/>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    )
}

export default LoginScreen

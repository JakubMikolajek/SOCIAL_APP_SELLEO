import {Button, Text, TouchableWithoutFeedback, View, Keyboard, KeyboardAvoidingView, Platform} from 'react-native'
import {useContext} from "react";
import {AuthContext} from "../store/auth-context";
import LoginForm from "../components/forms/LoginForm";

import {centerScreen} from "../stylesheets/CenterScreen";
import {GlobalStyles} from "../constants/GlobalStyles";
import {loginScreen} from "../stylesheets/screens/LoginScreen";

const LoginScreen = ({navigation}) => {
    const authCtx = useContext(AuthContext)

    const onSubmit = (data) => {
        authCtx.login(data.email, data.password)
        console.log(data);
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView style={centerScreen.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={centerScreen.container}>
                    <Text style={loginScreen.text}>Login</Text>
                    <LoginForm onSubmit={onSubmit}/>
                    <Button color={GlobalStyles.colors.primary200} title="Sign up" onPress={() => navigation.navigate("Register")}/>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default LoginScreen

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WelcomeScreen from "../../screens/WelcomeScreen";
import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";

const Stack = createNativeStackNavigator()

const WelcomeMenu = () => {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{
                headerTransparent: true,
                title: ""
            }}/>
        </Stack.Navigator>
    )
}

export default WelcomeMenu

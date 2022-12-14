import {Button, Text, View} from 'react-native'
import {GlobalStyles} from "../constants/GlobalStyles";
import {welcomeScreenStyles} from "../stylesheets/screens/WelcomeScreen";

const WelcomeScreen = ({navigation}) => {

    return (
        <View style={welcomeScreenStyles.container}>
            <Text style={welcomeScreenStyles.text}>Welcome</Text>
            <Button color={GlobalStyles.colors.primary200} title="Start your journey"
                    onPress={() => navigation.replace("Login")}/>
        </View>
    )
}

export default WelcomeScreen
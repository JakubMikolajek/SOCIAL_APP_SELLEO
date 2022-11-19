import {Button, StyleSheet, Text, View} from 'react-native'

const WelcomeScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome</Text>
            <Button title="Start your journey" onPress={() => navigation.replace("Login")}/>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        paddingBottom: 50
    }
})
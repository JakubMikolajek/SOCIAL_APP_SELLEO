import {Button, StyleSheet, Text, View} from 'react-native'

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>LoginScreen</Text>
            <Button title="Sign up" onPress={() => navigation.navigate("Register")}/>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
import {StatusBar} from 'expo-status-bar';
import Menu from "./src/components/menu/Menu";
import AuthContextProvider from "./src/store/auth-context";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {SafeAreaView} from "react-native";

const App = () => {
    return (
        <SafeAreaProvider>
            <AuthContextProvider>
                <StatusBar style="auto"/>
                <SafeAreaView style={{flex: 1}}>
                <Menu/>
                </SafeAreaView>
            </AuthContextProvider>
        </SafeAreaProvider>
    );
}

export default App

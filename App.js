import {StatusBar} from 'expo-status-bar';
import Menu from "./src/components/menu/Menu";
import AuthContextProvider from "./src/store/auth-context";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

const App = () => {
    return (
        <SafeAreaProvider>
            <AuthContextProvider>
                <StatusBar style="auto"/>
                <Menu/>
            </AuthContextProvider>
        </SafeAreaProvider>
    );
}

export default App

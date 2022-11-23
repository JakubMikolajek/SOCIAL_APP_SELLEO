import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import DashboardScreen from "../../screens/DashboardScreen";
import SearchScreen from "../../screens/SearchScreen";
import CreatePostScreen from "../../screens/CreatePostScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import BarIcon from "../UI/BarIcon";
import PostDetailScreen from "../../screens/PostDetailScreen";
import OwnProfileScreen from "../../screens/OwnProfileScreen";
import EditUserDataScreen from "../../screens/EditUserDataScreen";
import {GlobalStyles} from "../../constants/GlobalStyles";

const queryClient = new QueryClient()
const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

const TabsMenu = () => {
    return (
        <Tabs.Navigator initialRouteName="Dashboard" screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: GlobalStyles.colors.primary200,
        }}>
            <Tabs.Screen name="Dashboard" component={DashboardScreen} options={{
                tabBarIcon: ({size, color}) => <BarIcon name="home-outline" size={size} color={color}/>
            }}/>
            <Tabs.Screen name="Search" component={SearchScreen} options={{
                tabBarIcon: ({size, color}) => <BarIcon name="search" size={size} color={color}/>
            }}/>
            <Tabs.Screen name="CreatePost" component={CreatePostScreen} options={{
                tabBarIcon: ({size, color}) => <BarIcon name="ios-add-circle-outline" size={size} color={color}/>
            }}/>
            <Tabs.Screen name="OwnProfile" component={OwnProfileScreen} options={{
                tabBarIcon: ({size, color}) => <BarIcon name="person-outline" size={size} color={color}/>,
            }}/>
        </Tabs.Navigator>
    )
}

const AuthMenu = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Stack.Navigator initialRouteName="Tabs">
                <Stack.Screen name="Tabs" component={TabsMenu} options={{
                    headerShown: false
                }}/>
                <Stack.Screen name="PostDetail" component={PostDetailScreen} options={{
                    headerTransparent: true,
                    title: ""
                }}/>
                <Stack.Screen name="Profile" component={ProfileScreen} options={{
                    headerTransparent: true,
                    title: ""
                }}/>
                <Stack.Screen name="UpadateData" component={EditUserDataScreen} options={{
                    headerTransparent: true,
                    title: ""
                }}/>
            </Stack.Navigator>
        </QueryClientProvider>

    )
}

export default AuthMenu


import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import DashboardScreen from "../../screens/DashboardScreen";
import SearchScreen from "../../screens/SearchScreen";
import CreatePostScreen from "../../screens/CreatePostScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import BarIcon from "../UI/BarIcon";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import PostDetailScreen from "../../screens/PostDetailScreen";
import OwnProfileScreen from "../../screens/OwnProfileScreen";
import {GlobalStyles} from "../../constants/GlobalStyles";
import SetDataScreen from "../../screens/SetDataScreen";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()
const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

const Tab = () => {
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

const TabsMain = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Stack.Navigator initialRouteName="Tabs">
                <Stack.Screen name="Tabs" component={Tab} options={{
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
                <Stack.Screen name="UpadateData" component={SetDataScreen} options={{
                    headerShown: false
                }}/>
            </Stack.Navigator>
        </QueryClientProvider>

    )
}

export default TabsMain


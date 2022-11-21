import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import DashboardScreen from "../../screens/DashboardScreen";
import SearchScreen from "../../screens/SearchScreen";
import CreatePostScreen from "../../screens/CreatePostScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import BarIcon from "../UI/BarIcon";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import PostDetailScreen from "../../screens/PostDetailScreen";

const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

const Tab = () => {
    return (
        <Tabs.Navigator initialRouteName="Dashboard" screenOptions={{
            tabBarShowLabel: false,
            headerShown: false
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
            <Tabs.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({size, color}) => <BarIcon name="person-outline" size={size} color={color}/>
            }}/>
        </Tabs.Navigator>
    )
}

const TabsMain = () => {
    return (
        <Stack.Navigator initialRouteName="Tabs">
            <Stack.Screen name="Tabs" component={Tab} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="PostDetail" component={PostDetailScreen} options={{
                headerTransparent: true,
                title: ""
            }}/>
        </Stack.Navigator>

    )
}

export default TabsMain


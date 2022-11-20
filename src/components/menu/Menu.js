import {NavigationContainer} from "@react-navigation/native";
import StackMain from "./StackMain";
import TabsMain from "./TabsMain";
import {useContext} from "react";
import {AuthContext} from "../../store/auth-context";

const Menu = () => {
    const authCtx = useContext(AuthContext)
    const isAuth = authCtx.isAuth

    return (
        <NavigationContainer>
            {isAuth ? (<TabsMain/>) : (<StackMain/>)}
        </NavigationContainer>
    )
}

export default Menu


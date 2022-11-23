import {NavigationContainer} from "@react-navigation/native";
import {useContext} from "react";
import {AuthContext} from "../../store/auth-context";
import AuthMenu from "./AuthMenu";
import WelcomeMenu from "./WelcomeMenu";

const Menu = () => {
    const authCtx = useContext(AuthContext)
    const isAuth = authCtx.isAuth

    return (
        <NavigationContainer>
            {isAuth ? (<AuthMenu/>) : (<WelcomeMenu/>)}
        </NavigationContainer>
    )
}

export default Menu


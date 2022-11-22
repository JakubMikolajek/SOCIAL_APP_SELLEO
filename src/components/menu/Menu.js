import {NavigationContainer} from "@react-navigation/native";
import WelcomeMenu from "./WelcomeMenu";
import AuthMenu from "./AuthMenu";
import {useContext} from "react";
import {AuthContext} from "../../store/auth-context";

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


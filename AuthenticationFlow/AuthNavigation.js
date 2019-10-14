import { createStackNavigator } from "react-navigation-stack";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";

const AuthNavigation = createStackNavigator(
    {
        SignIn: {
            screen: SignIn
        },
        SignUp:{
            screen: SignUp
        }
    },
    {
        initialRouteName: 'SignIn',
        headerMode: "none"
    }
);

export default AuthNavigation;
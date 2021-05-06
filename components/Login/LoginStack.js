import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import GreetingPage from "./GreetingPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const LogStack = createStackNavigator()

function LoginStack ({navigation}) {
    return(
        <LogStack.Navigator initialRouteName="GreetingScreen" headerMode="none">
            <LogStack.Screen name = "GreetingScreen" component = {GreetingPage}/>
            <LogStack.Screen name = "LoginScreen" component = {LoginPage}/>
            <LogStack.Screen name = "SignupScreen" component = {SignupPage}/>
        </LogStack.Navigator>
        );
};

export default LoginStack;

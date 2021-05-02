import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Pass from "./Pass";
import Prototype from "./Prototype";
import ChangePass from "./ChangePass"
import Login from "../../Login/LoginPage"

const Stack = createStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Prototype"
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#42f44b" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Prototype"
        component={Prototype}
        options={{ title: "Setting Page" }}
      />
      <Stack.Screen
        name="Edit"
        component={Pass}
        options={{ title: "Edit Profile Page" }}
      />
        <Stack.Screen
        name="ChangePass"
        component={ChangePass}
        options={{ title: "Change Password" }}
      />
       <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Log in" }}
      />
    </Stack.Navigator>
  );
}

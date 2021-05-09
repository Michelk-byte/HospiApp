import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ChangePass from "./ChangePass";
import ProfilePage from "./ProfilePage";
import EditPage from "./EditPage";

const Stack = createStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="ProfilePage"
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "black",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          title: "My Account",
          headerTitleAlign: "center",
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="EditPage"
        component={EditPage}
        options={{ title: "Edit Profile",
            headerLeft: () => null,
            headerShown:false,
        }}
      />
      <Stack.Screen
        name="ChangePass"
        component={ChangePass}
        options={{
            title: "ChangePassword",
            headerLeft: () => null,
            headerShown:false,
        }}
      />
    </Stack.Navigator>
  );
}

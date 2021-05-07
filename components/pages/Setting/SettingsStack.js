import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import Pass from "./Pass";
// import Prototype from "./Prototype";
import ChangePass from "./ChangePass";
import ProfilePage from "./ProfilePage";
import EditPage from "./EditPage";
// import Login from "../../Login/LoginPage";

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
            options={{ title: "Profile", headerTitleAlign: 'center'}}
        />
        <Stack.Screen
            name="EditPage"
            component={EditPage}
            options={{ title: "Edit Profile" }}
        />
      {/*<Stack.Screen*/}
      {/*  name="Prototype"*/}
      {/*  component={Prototype}*/}
      {/*  options={{ title: "Setting Page" }}*/}
      {/*/>*/}
      {/*<Stack.Screen*/}
      {/*  name="Edit"*/}
      {/*  component={Pass}*/}
      {/*  options={{ title: "Edit Profile Page" }}*/}
      {/*/>*/}
      <Stack.Screen
        name="ChangePass"
        component={ChangePass}
        options={{ title: "Change Password" }}
      />
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Log in" }}
      /> */}
    </Stack.Navigator>
  );
}

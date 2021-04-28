import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store/store";

import Login from "./components/Login/LoginPage";
import Signup from "./components/Login/SignupPage";
import Screen from "./components/pages/Screen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AsyncStorage } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  let initial_route = "Screen";

  // const value = AsyncStorage.getItem("sid");
  // if (value != "") {
  //   initial_route = "Screen";
  // }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initial_route}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Screen" component={Screen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  bottom: {
    position: "absolute",
    bottom: 0,
  },
});

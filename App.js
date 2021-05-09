import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store/store";

import Login from "./components/Login/LoginPage";
import GreetingPage from "./components/Login/GreetingPage";
import Signup from "./components/Login/SignupPage";
import AccountDetails from "./components/Login/AccountDetails";
import Screen from "./components/pages/Screen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { getData, storeData } from "./Storage";
import { signUpWatcher } from "./sagaCalls/SignUpReducer";

const Stack = createStackNavigator();

export default function App() {
  getData().then((result) => {
    // console.log(result);
    if (result !== null) {
      // console.log("hi");
    }
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="GreetingScreen" component={GreetingPage} />
          <Stack.Screen name="LoginScreen" component={Login} />
          <Stack.Screen name="SignupScreen" component={Signup} />
          <Stack.Screen name="AccountDetailsScreen" component={AccountDetails}/>
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

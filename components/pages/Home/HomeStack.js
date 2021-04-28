import * as React from "react";
import { Image, Button, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import AppointmentScreen from "../AppointmentScreen";

const Stack = createStackNavigator();

const ShoppingCartIcon = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Icon
        name="calendar"
        size="35px"
        style={{
          marginRight: 20,
        }}
        onPress={() => navigation.navigate("AppointmentScreen")}
      />
    </View>
  );
};
export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="AppointmentScreen"
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "red" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      {/* <Stack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: () => <View></View>,
          headerRight: () => <ShoppingCartIcon navigation={navigation} />,
        })}
      /> */}
      <Stack.Screen
        name="AppointmentScreen"
        component={AppointmentScreen}
        options={({ navigation }) => ({
          headerTitle: () => <View></View>,
          headerRight: () => <ShoppingCartIcon navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
}

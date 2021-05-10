import * as React from "react";
import { Image, Button, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import AppointmentScreen from "../Appointments/AppointmentScreen";
import CameraScreen from "../Appointments/CameraScreen";

const Stack = createStackNavigator();

const ShoppingCartIcon = ({ navigation }) => {
  const size_ = 35;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Icon
        name="calendar"
        size={size_}
        style={{
          marginRight: 20,
          color: "black",
        }}
        onPress={() => navigation.navigate("AppointmentScreen")}
      />
    </View>
  );
};

const CartIcon = ({ navigation }) => {
  const size_ = 35;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <Icon
        name="camera"
        size={size_}
        style={{
          marginRight: 20,
          color: "black",
        }}
        onPress={() => navigation.navigate("CameraScreen")}
      />
      <Icon
        name="calendar"
        size={size_}
        style={{
          marginRight: 20,
          color: "black",
        }}
        onPress={() => navigation.navigate("AppointmentScreen")}
      />
    </View>
  );
};

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "black",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => null,
          title: "Top Headlines",
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      />

      <Stack.Screen
        name="AppointmentScreen"
        component={AppointmentScreen}
        options={({ navigation }) => ({
          title: "My Appointments",
          headerRight: () => <ShoppingCartIcon navigation={navigation} />,
        })}
      />

      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={({ navigation }) => ({
          title: "Take a Picture",
        })}
      />
    </Stack.Navigator>
  );
}

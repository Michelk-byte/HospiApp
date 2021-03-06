import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, Button, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import LabReserScreen from "./LabReserScreen";
import LabTest from "./LabTest";
import Test from "./Test";
import AppointmentScreen from "../Appointments/AppointmentScreen";

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
            color :'black',
        }}
        onPress={() => navigation.navigate("AppointmentScreen")}
      />
    </View>
  );
};

export default function LabReserStack() {
  return (
    <Stack.Navigator
      initialRouteName="LabReserScreen"
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#DFDFDF" },
        headerTintColor: "black",
        headerTitleStyle: { fontWeight: "bold"},
      }}
    >
      <Stack.Screen
        name="LabReserScreen"
        component={LabReserScreen}
        options={({ navigation }) => ({
            headerLeft: ()=> null,
          title: "Choose a Lab",
          headerRight: () => <ShoppingCartIcon navigation={navigation} />,
        })}
      />

      <Stack.Screen
        name="LabTest"
        component={LabTest}
        options={({ navigation }) => ({
          title: "Choose a Test",
          headerRight: () => <ShoppingCartIcon navigation={navigation} />,
        })}
      />

      <Stack.Screen
        name="Test"
        component={Test}
        options={({ navigation }) => ({
          title: "",
          headerRight: () => <ShoppingCartIcon navigation={navigation} />,
        })}
      />

      <Stack.Screen
        name="AppointmentScreen"
        component={AppointmentScreen}
        options={({ navigation }) => ({
          title: "My Appointments",
        })}
      />
    </Stack.Navigator>
  );
}

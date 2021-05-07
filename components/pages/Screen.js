import * as React from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./Home/HomeStack";
import LabReserStack from "./LabReservation/LabReserStack";
import HospiStack from "./Hospital/HospiStack";
import SettingsStack from "./Setting/SettingsStack";
const Tab = createBottomTabNavigator();

function Screen({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      tabBarOptions={{
        activeTintColor: "white",
          inactiveTintColor:'#c8c8c8',
          style:{
              backgroundColor:'#1498D5',
              borderTopWidth:1,
              borderTopColor:'#1498D5'
          },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="HospiStack"
        component={HospiStack}
        options={{
          tabBarLabel: "Hospital",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="hospital-box"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LabReserStack"
        component={LabReserStack}
        options={{
          tabBarLabel: "Laboratory",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="injection-syringe" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Screen;

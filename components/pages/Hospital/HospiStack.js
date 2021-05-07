import * as React from "react";
import { Image, Button, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import Hospital from "./Hospital";
import Doctor from "./Doctor";
import AppointmentScreen from "../Appointments/AppointmentScreen";
import DoctorProfile from "./DoctorProfile";
import {getHospitals} from "../../../actions/action"
import {useDispatch,useSelector} from "react-redux";

const Stack = createStackNavigator();

const ShoppingCartIcon = ({ navigation }) => {
  const size_ = 35;

  const dispatch = useDispatch();
  function nav (){

    navigation.navigate("AppointmentScreen");
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Icon
        name="calendar"
        size={size_}
        style={{
          marginRight: 20,
            color :'black',
        }}
        onPress={() =>nav()}
      />
    </View>
  );
};

export default function HospiStack() {
  return (
    <Stack.Navigator
      initialRouteName="Hospital"
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "black",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Hospital"
        component={Hospital}
        options={({ navigation }) => ({
            headerLeft: ()=> null,
          title: "Choose a Hospital",
          headerRight: () => <ShoppingCartIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Doctor"
        component={Doctor}
        options={({ navigation }) => ({
          title: "Choose a Doctor",
          headerRight: () => <ShoppingCartIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        options={({ navigation }) => ({
          headerTitle: () => <View></View>,
          headerRight: () => <ShoppingCartIcon navigation={navigation} />,
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
    </Stack.Navigator>
  );
}

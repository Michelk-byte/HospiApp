import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function GreetingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require("../../assets/logo2.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Welcome !</Text>
        <Text style={styles.text}>
          Hospiapp is an appointment booking platform that reminds the patient
          about his upcoming reservations
        </Text>
        <Text style={styles.text}>
          New Update v1.0.2: Take picture of a medication and Receive the
          description!
        </Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <LinearGradient colors={["white", "white"]} style={styles.logIn}>
              <Text style={styles.buttonText}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#1498D5" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  footer: {
    flex: 1,
    backgroundColor: "#1498D5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: width * 0.8,
    height: height * 0.2,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "white",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  logIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "row",
  },
  buttonText: {
    color: "#1498D5",
    fontWeight: "bold",
  },
});

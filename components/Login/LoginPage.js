import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";

import { useDispatch, useSelector } from "react-redux";
import { checkIn, errorcred } from "../../actions/action";
import { getData, storeData } from "../../Storage";
import Screen from "../pages/Screen";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const message = useSelector((state) => state.Login.status);
  const loggedin = useSelector((state) => state.Login.log);

  if (loggedin) {
    return <Screen />;
  }

  const dispatch = useDispatch();
  if (message) {
    alert("invalid credentials");
    dispatch(errorcred(false));
  }

  const handleSubmit = () => {
    const data = {
      name: email,
      password: password,
    };
    // console.log(data);
    dispatch(checkIn(data));
  };

  getData().then((result) => {
    // console.log(result);
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Log in to HospiApp</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Username or Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="black" size={20} />
          <TextInput
            placeholder="Type your username or email"
            name="email"
            placeholderTextColor="#003f5c"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(email) => setEmail(email)}
          />
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
        </View>
        <Text style={styles.text_footer}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="black" size={20} />
          <TextInput
            secureTextEntry
            placeholder="Type your password"
            placeholderTextColor="#003f5c"
            style={styles.textInput}
            autoCapitalize="none"
            name="password"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
          {/*<TouchableOpacity onPress={updateSecureTextEntry}>*/}
          {/*  {data.secureTextEntry ?*/}
          {/*      <Feather*/}
          {/*          name="eye-off"*/}
          {/*          color="grey"*/}
          {/*          size={20}*/}
          {/*      />*/}
          {/*      :*/}
          {/*      <Feather*/}
          {/*          name="eye"*/}
          {/*          color="grey"*/}
          {/*          size={20}*/}
          {/*      />*/}
          {/*  }*/}
          {/*</TouchableOpacity>*/}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{ color: "#1498D5", marginTop: 15 }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity style={styles.logIn} onPress={() => handleSubmit()}>
            <LinearGradient
              colors={["#1498D5", "#1498D5"]}
              style={styles.logIn}
            >
              <Text style={[styles.textSign, { color: "white" }]}>Log In</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={{ color: "#1498D5", marginTop: 30 }}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignupScreen")}
            style={styles.signUp}
          >
            <Text style={[styles.textSign, { color: "#1498D5" }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1498D5",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
    backgroundColor: "#1498D5",
  },
  footer: {
    flex: 3,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "black",
    fontSize: 18,
    marginTop: 35,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "black",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  logIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  signUp: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#1498D5",
    borderWidth: 1,
    marginTop: 15,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

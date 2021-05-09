import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ImageBackground,
    Platform
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signUp, register } from "../../actions/action";
import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider';

import Login from "./LoginPage";


export default function Signup({ navigation }) {
  const [username, setUName] = useState("");
  const [Email, SetEmail] = useState("");
  const [pass, SetPassword] = useState("");
  const [pnumber, SetPnumber] = useState("");
  const [verifypass, SetVerifypass] = useState("");
  const [blood, setBlood] = useState('A+');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(50);

  const dispatch = useDispatch();

  const [messagecolor, SetMessageColor] = useState("");
  const [message_show, SetMEssageShow] = useState("");

  let message = useSelector((state) => state.Signup.message);
  const status = useSelector((state) => state.Signup.status);
  let register_ = useSelector((state) => state.Signup.register);

  if (register_) {
    SetMEssageShow(message);
    if (status === 200) {
      console.log("green");
      SetMessageColor("green");
    } else if (status !== 200 && status !== "") {
      console.log("red");
      console.log(message);
      SetMessageColor("red");
    }
    dispatch(register(false));
  }

  const handleS = () => {
    const data = {
      email: Email,
      password: pass,
      username: username,
      pnumber: pnumber,
      verifypassword: verifypass,
      weight:weight,
      height:height,
      bloodtype:blood
    };
    dispatch(signUp(data));
  };

  return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/SignupBG.jpg')} style={styles.image} blurRadius={Platform.OS=="ios"? 30:3}>
        <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Username"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="email-address"
            onChangeText={(user) => setUName(user)}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Email"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="email-address"
            onChangeText={(email) => SetEmail(email)}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            onChangeText={(pass) => SetPassword(pass)}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Verify Password"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            onChangeText={(verifypass) => SetVerifypass(verifypass)}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="PhoneNumber"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType=""
            onChangeText={(pnumber) => SetPnumber(pnumber)}
          />
           <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Weight Kg"

            placeholderTextColor="#ffffff"
            onChangeText={(w) => setWeight(w)}
          />
            <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="height cm"

            placeholderTextColor="#ffffff"
            onChangeText={(w) => setHeight(w)}
          />

<Picker style={{ marginTop:10,}}
          selectedValue={blood}
          onValueChange={currentBlood => setBlood(currentBlood)}>
          <Picker.Item label="A+" value="A+" />
          <Picker.Item label="A-" value="A-" />
          <Picker.Item label="B+" value="B+" />
          <Picker.Item label="B-" value="B-" />
          <Picker.Item label="O+" value="O+" />
          <Picker.Item label="O-" value="O-" />
          <Picker.Item label="AB+" value="AB+" />
          <Picker.Item label="AB-" value="AB-" />
        </Picker>
        <Text
          style={{
            fontSize: 30,
            color: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          Blood type: {blood}
        </Text>




          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => handleS()}>
              Register
            </Text>
          </TouchableOpacity>
          <Text style={{ color: { messagecolor } }}>{message_show}</Text>
        </View>

        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text
              style={styles.signupButton}
              onPress={() => navigation.navigate("LoginScreen0")}
            >
              {" "}
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  image:{
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  inputBox: {
    width: 300,
    height: 30,
    backgroundColor: "rgba(255, 255,255,0.2)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 13,
  },
  button: {
    width: 300,
    backgroundColor: "#1c313a",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
  },
  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row",
  },
  signupText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 16,
  },
  signupButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
});

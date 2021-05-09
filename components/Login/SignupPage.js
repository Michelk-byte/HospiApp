import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Platform
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import { signUp, register } from "../../actions/action";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {Button} from "react-native-elements";

export default function Signup({ navigation }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // Jano hon l variable birthday bado yenaamala save
    hideDatePicker();
  };

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
      name: username,
      pnumber: pnumber,
      verifypass: verifypass,
      weight:weight,
      height:height,
      blood:blood
    };
    dispatch(signUp(data));
  };

  return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/SignupBG.jpg')} style={styles.image} blurRadius={Platform.OS=="ios"? 10:1}>
          <Animatable.View animation="fadeInDownBig" style={styles.box}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.header}>Create your account. It's free and only takes a couple of minutes</Text>
            <View style={styles.input}>
              <TextInput
                  style={styles.textInput}
                  placeholder="Username"
                  placeholderTextColor="#003f5c"
                  autoCapitalize="none"
                  autoCorrect={false}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                  style={styles.textInput}
                  placeholder="First Name"
                  placeholderTextColor="#003f5c"
                  autoCapitalize="none"
                  autoCorrect={false}
              />
              <TextInput
                  style={styles.textInput}
                  placeholder="Last Name"
                  placeholderTextColor="#003f5c"
                  autoCapitalize="none"
                  autoCorrect={false}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                  style={styles.textInput}
                  placeholder="Email"
                  keyboardType={"email-address"}
                  placeholderTextColor="#003f5c"
                  autoCapitalize="none"
                  autoCorrect={false}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                  style={styles.textInput}
                  placeholder="Birthdate"
                  placeholderTextColor="#003f5c"
              />
              <Button title="Select your birthdate" onPress={showDatePicker} />
              <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                  style={styles.textInput}
                  placeholder="Phone Number"
                  keyboardType={"phone-pad"}
                  placeholderTextColor="#003f5c"
              />
            </View>
            <View style={styles.input}>
              <TextInput
                  style={styles.textInput}
                  placeholder="Address"
                  placeholderTextColor="#003f5c"
                  autoCapitalize="none"
                  autoCorrect={false}
              />
            </View>
            <View>
              <TouchableOpacity onPress={()=>navigation.navigate("AccountDetailsScreen")}>
                <LinearGradient colors={["#37c9fc", "#1498D5"]} style={styles.button}>
                  <Text style={styles.buttonText}>Next</Text>
                  <MaterialIcons name="chevron-right" color='white' size={20}/>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </Animatable.View>
          <View style={styles.logIn}>
            <Text style={styles.logText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
              <Text style={styles.signIn}>Sign in</Text>
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
  box:{
    borderWidth:2,
    borderColor:'#1498D5',
    borderRadius:15,
    backgroundColor:'white',
    height:550,
    width:350,
    alignSelf:'center',
    alignItems:'center'
  },
  title:{
    fontSize: 30,
    marginBottom: 10,
    marginTop: 10
  },
  header:{
    fontSize: 11,
    marginBottom: 40,
    color:'gray'
  },
  input:{
    width:'80%',
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 2,
    marginBottom: 30,
  },
  textInput:{
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "black",
  },
  button:{
    marginTop:10,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    paddingRight:5
  },
  logIn:{
    marginTop:20
  },
  logText:{
    alignSelf:'center',
  },
  signIn:{
    marginTop:10,
    alignSelf:'center',
    fontSize:20,
  },
});

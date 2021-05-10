import React, {useState} from 'react';
import {ImageBackground, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import {changePass} from "../../../actions/action"

const ChangePassword = ({navigation}) => {
  const [oldPass, setOldPass] = useState('');
  const [newPas, setNewPass] = useState('');
  const [Verify, setVerify] = useState('');

  const dispatch=useDispatch();

  const sid=useSelector(state=>state.Login.data.sid)

  const handleSubmit=()=>{
    const data={
        sid:sid,
        oldpassword:oldPass,
        password:newPas,
        verifypassword:Verify
    }
    dispatch(changePass(data));
    setNewPass("");
    setOldPass("");
    setVerify("");
  }

  return (
      <View style={styles.container}>
          <ImageBackground source={require('../../../assets/ChangePassBG.jpg')} style={styles.image} blurRadius={Platform.OS=="ios"? 10:1}>
              <View>
                  <Text style={styles.title}>Reset Password</Text>
              </View>
              <View style={styles.inputField}>
                  <Text style={styles.inputTitle}>Old Password</Text>
                  <LinearGradient colors={["white", "white"]} style={styles.input}>
                      <TextInput
                          secureTextEntry={true}
                          onChangeText={(data)=>setOldPass(data)}
                          placeholder=""
                          placeholderTextColor="#003f5c"
                          autoCorrect={false}
                          style={styles.textInput}
                      />
                  </LinearGradient>
              </View>
              <View style={styles.inputField}>
                  <Text style={styles.inputTitle}>New Password</Text>
                  <LinearGradient colors={["white", "white"]} style={styles.input}>
                      <TextInput
                          secureTextEntry={true}
                          onChangeText={(data)=>setNewPass(data)}
                          placeholder=""
                          placeholderTextColor="#003f5c"
                          autoCorrect={false}
                          style={styles.textInput}
                      />
                  </LinearGradient>
              </View>
              <View style={styles.inputField}>
                  <Text style={styles.inputTitle}>Verify Password</Text>
                  <LinearGradient colors={["white", "white"]} style={styles.input}>
                      <TextInput
                          secureTextEntry={true}
                          onChangeText={(data)=>setVerify(data)}
                          placeholder=""
                          placeholderTextColor="#003f5c"
                          autoCorrect={false}
                          style={styles.textInput}
                      />
                  </LinearGradient>
              </View>
              <View style={{marginTop:5}}>
                  <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                      <LinearGradient colors={["#37c9fc", "#1498D5"]} style={styles.button}>
                          <Text style={[styles.buttonText, { color: "white" }]}>Update Password</Text>
                      </LinearGradient>
                  </TouchableOpacity>
              </View>
              <View style={{marginTop:5}}>
                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfilePage')}>
                      <LinearGradient colors={["#d11a2a", "#800000"]} style={styles.button}>
                          <Text style={[styles.buttonText, { color: "white" }]}>Cancel</Text>
                      </LinearGradient>
                  </TouchableOpacity>
              </View>
          </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image:{
        flex:1,
        resizeMode:'cover',
    },
    title:{
        color:'black',
        alignSelf: 'center',
        marginTop: 60,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom:30,
    },
    inputField: {
        justifyContent:'center',
        marginTop: 10,
    },
    inputTitle:{
        fontSize:20,
        marginBottom:5,
        marginLeft:'14%',
        color: '#003f5c',
    },
    input:{
        borderRadius: 10,
        padding: 8,
        width:'75%',
        alignSelf: 'center',
        opacity:0.7
    },
    textInput:{
        color:'black',
        fontSize: 20,
        fontFamily:'monospace'
    },
    button: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default ChangePassword;

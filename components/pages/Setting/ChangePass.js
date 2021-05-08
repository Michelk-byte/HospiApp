import React, {useState} from 'react';
import {ImageBackground, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

const ChangePassword = ({navigation}) => {
  const [oldPass, setOldPass] = useState('');
  const [newPas, setNewPass] = useState('');
  const [Verify, setVerify] = useState('');


  const handleSubmit=()=>{
    const data={
      oldPass:oldPass,
      newPas:newPas,
      Verify:Verify
    }
    alert("sending data: "+data.email)
  }

  return (
      <View style={styles.container}>
          <ImageBackground source={require('../../../assets/ChangePassBG.jpg')} style={styles.image} blurRadius={Platform.OS=="ios"? 30:2}>
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
                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfilePage')}>
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
        color:'white',
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
        alignSelf:'center',
        marginBottom:5,
        color: '#003f5c',
    },
    input:{
        borderRadius: 10,
        padding: 10,
        width:'75%',
        alignSelf: 'center'
    },
    textInput:{
        color:'black',
        alignSelf:'center',
        fontSize: 25,
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

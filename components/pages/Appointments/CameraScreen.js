import React, { useState, useEffect } from "react";
import {Button, Image, View, Platform, StyleSheet, Text, TouchableOpacity, ImageBackground} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

export default function CameraScreen() {
  const [image, setImage] = useState(null);
  const [singleFile, setSingleFile] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const uploadImage = () => {
    const Mydata = new FormData();
    console.log(singleFile);
    Mydata.append("file", "data:image/jpeg;base64," + singleFile);
    axios({
      method: "post",
      url: "https://hospiapp-backend.herokuapp.com/predict",
      data: Mydata,
    })
      .then((res) => {
        console.log(res.data);
        // let RESI = JSON.stringify(res);
        // console.log(RESI);
        alert(res.data.prediction);
      })
      .catch((error) => {
        let ERRR = JSON.stringify(error);
        console.log(ERRR);
      });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setSingleFile(result.base64);
      setImage("data:image/jpeg;base64," + result.base64);
    }
  };

  return (
      <View style={styles.container}>
        <ImageBackground source={require('../../../assets/MedicalBG.png')} style={styles.background}
                         blurRadius={Platform.OS == "ios" ? 2 : 0.5}>
          <View style={styles.header}>
            <Text style={styles.headerText}>1. Take a picture of your medication</Text>
            <Text style={styles.headerText}>2. Upload it below</Text>
            <Text style={styles.headerText}>3. Get a detailed description about</Text>
            <Text style={styles.headerText}>your prescription</Text>
          </View>
          <TouchableOpacity onPress={pickImage}>
            <View style={styles.uploadImage}>
              <Text style={styles.uploadText}>Upload Image</Text>
              <Icon name={'camera-outline'} color='black' size={200} style={styles.icon}/>
            </View>
          </TouchableOpacity>
          {image && (
              <View style={styles.image}>
                <Image source={{uri: image}} style={{width: 200, height: 200}}/>
              </View>
          )}
          <TouchableOpacity onPress={uploadImage}>
            <LinearGradient
                colors={["#1567cd", "#1498D5"]}
                style={styles.buttonDetect}
            >
              <Text style={styles.buttonText}>Get detailed description</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
  },
  background:{
    flex:1,
    resizeMode:'cover',
  },
  header:{
    marginTop:20,
    alignSelf:'center',
    alignItems:'center',
    marginBottom:40,
  },
  headerText:{
    fontSize:20,
    color:'black'
  },
  uploadImage:{
    width:300,
    height:300,
    borderWidth:2,
    borderColor:'black',
    alignSelf:'center',
    alignItems:'center',
    opacity:0.6,
    borderRadius: 15
  },
  uploadText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 2,
    opacity:0.6
  },
  icon:{
    opacity:0.6
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 2
  },
  buttonDetect: {
    alignSelf: 'center',
    borderRadius: 15,
    width: 220,
    height: 30,
    alignItems: 'center',
    marginTop: 50
  },
});

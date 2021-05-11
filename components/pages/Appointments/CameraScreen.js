import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";

export default function CameraScreen() {
  const [image, setImage] = useState(null);
  const [singleFile, setSingleFile] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [caplets, setCaplets] = useState("");
  const [doses, setDoses] = useState("");
  const [effects, setEffects] = useState("");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const uploadImage = () => {
    if (singleFile === null) {
      alert("You need to upload an image first !");
    } else {
      const Mydata = new FormData();
      console.log(singleFile);
      Mydata.append("file", "data:image/jpeg;base64," + singleFile);
      axios({
        method: "post",
        url: "https://hospiapp-backend2.herokuapp.com/predict",
        data: Mydata,
      })
        .then((res) => {
          console.log(res.data);
          // let RESI = JSON.stringify(res);
          // console.log(RESI);
          let data = res.data;
          setName(data.Medicament_Name);
          setDescription(data.description);
          setPrice(data.price);
          setCaplets(data.number_of_caplets);
          setDoses(data.doses_per_day);
          setEffects(data.side_effects);
          // alert(res.data.prediction);
          toggleModal();
        })
        .catch((error) => {
          let ERRR = JSON.stringify(error);
          console.log(ERRR);
        });
    }
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
      <ImageBackground
        source={require("../../../assets/MedicalBG.png")}
        style={styles.background}
        blurRadius={Platform.OS == "ios" ? 2 : 0.5}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>
            1. Take a picture of your medication
          </Text>
          <Text style={styles.headerText}>2. Upload it below</Text>
          <Text style={styles.headerText}>
            3. Get a detailed description about
          </Text>
          <Text style={styles.headerText}>your prescription</Text>
        </View>
        <TouchableOpacity onPress={pickImage}>
          <View style={styles.uploadImage}>
            <Text style={styles.uploadText}>Upload Image</Text>
            <Icon
              name={"camera-outline"}
              color="black"
              size={200}
              style={styles.icon}
            />
            {image && (
              <View style={styles.image}>
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200 }}
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={uploadImage}>
          <LinearGradient
            colors={["#1567cd", "#1498D5"]}
            style={styles.buttonDetect}
          >
            <Text style={styles.buttonText}>Get detailed description</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Modal isVisible={isModalVisible} style={styles.modal}>
          <View style={{ flex: 1 }}>
            <View style={styles.text}>
              <Text style={styles.medName}>{name}</Text>
              <Text style={styles.description}>
                {"\u2022"} Description: {description}
              </Text>
              <Text style={styles.description}>
                {"\u2022"} Price: {price}
              </Text>
              <Text style={styles.description}>
                {"\u2022"} Caplets: {caplets}
              </Text>
              <Text style={styles.description}>
                {"\u2022"} Doses: {doses}
              </Text>
              <Text style={styles.description}>
                {"\u2022"} Side Effects: {effects}
              </Text>
            </View>
            <View style={styles.modalButton}>
              <TouchableOpacity onPress={toggleModal}>
                <LinearGradient
                  colors={["#d11a2a", "#800000"]}
                  style={styles.buttonModal}
                >
                  <Text style={styles.buttonText}>Close</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    marginTop: -200,
    elevation: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  header: {
    marginTop: 20,
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  headerText: {
    fontSize: 20,
    color: "black",
  },
  uploadImage: {
    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: "black",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  uploadText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    paddingTop: 2,
    opacity: 0.6,
  },
  icon: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    paddingTop: 2,
  },
  buttonDetect: {
    alignSelf: "center",
    borderRadius: 15,
    width: 220,
    height: 30,
    alignItems: "center",
    marginTop: 50,
  },
  buttonModal: {
    alignSelf: "center",
    borderRadius: 15,
    width: 80,
    height: 30,
    alignItems: "center",
    marginTop: 30,
  },
  modal: {
    backgroundColor: "white",
    width: 300,
    maxHeight: 400,
    borderRadius: 15,
    alignSelf: "center",
    marginTop: "30%",
  },
  text: {},
  modalButton: {
    borderRadius: 15,
    alignSelf: "center",
    width: 100,
  },
  medName: {
    fontSize: 25,
    marginTop: 10,
    alignSelf: "center",
  },
  description: {
    marginTop: 10,
    fontSize: 13,
    marginLeft: 15,
  },
});

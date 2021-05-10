import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        </>
      )}
      <Button title="Upload Image" onPress={uploadImage} />
    </View>
  );
}

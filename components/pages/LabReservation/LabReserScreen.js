import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CardViewWithImage } from "react-native-simple-card-view";
// import "../Hospital/Hospi.css";

const LabReserScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <Text>Choose a Lab</Text>
      {/* <CardViewWithImage
        width={100}
        source={{
          uri: "https://placeimg.com/640/480/nature",
        }}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!"
        }
        title={"React Nature :D"}
        imageWidth={100}
        imageHeight={180}
        roundedImage={false}
        onPress={() => navigation.navigate("LabTest")}
      />
      <CardViewWithImage
        width={90}
        source={{ uri: "https://placeimg.com/640/480/nature" }}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!"
        }
        title={"React Nature :D"}
        imageWidth={100}
        imageHeight={150}
        roundedImage={false}
      />
      <CardViewWithImage
        width={90}
        source={{ uri: "https://placeimg.com/640/480/nature" }}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!"
        }
        title={"React Nature :D"}
        imageWidth={100}
        imageHeight={150}
        roundedImage={false}
      />
      <CardViewWithImage
        width={90}
        source={{ uri: "https://placeimg.com/640/480/nature" }}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!"
        }
        title={"React Nature :D"}
        imageWidth={100}
        imageHeight={150}
        roundedImage={false}
      />
      <CardViewWithImage
        width={90}
        source={{ uri: "https://placeimg.com/640/480/nature" }}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!"
        }
        title={"React Nature :D"}
        imageWidth={100}
        imageHeight={150}
        roundedImage={false}
      /> */}
    </ScrollView>
  );
};
export default LabReserScreen;

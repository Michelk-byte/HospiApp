import * as React from "react";
import {View, Text, SafeAreaView, StyleSheet, Dimensions} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CardViewWithImage } from "react-native-simple-card-view";

const width = Dimensions.get("window").width;

const AppointmentScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <CardViewWithImage
        width= {width - 20}
        source={{ uri: "https://placeimg.com/640/480/nature" }}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!"
        }
        title={"React Nature :D"}
        imageWidth={500}
        imageHeight={180}
        roundedImage={false}
        onPress={() => navigation.navigate("Doctor")}
      />
      <CardViewWithImage
        width={width - 20}
        source={{ uri: "https://placeimg.com/640/480/nature" }}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!"
        }
        title={"React Nature :D"}
        imageWidth={500}
        imageHeight={150}
        roundedImage={false}
      />
      <CardViewWithImage
        width={width - 20}
        source={{ uri: "https://placeimg.com/640/480/nature" }}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!"
        }
        title={"React Nature :D"}
        imageWidth={500}
        imageHeight={150}
        roundedImage={false}
      />
      <CardViewWithImage
        width={width - 20}
        source={{ uri: "https://placeimg.com/640/480/nature" }}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!"
        }
        title={"React Nature :D"}
        imageWidth={500}
        imageHeight={150}
        roundedImage={false}
      />
      <CardViewWithImage
        width={width - 20}
        source={{ uri: "https://placeimg.com/640/480/nature" }}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!"
        }
        title={"React Nature :D"}
        imageWidth={500}
        imageHeight={150}
        roundedImage={false}
      />
    </ScrollView>
  );
};
export default AppointmentScreen;

import * as React from "react";
import {View, Text, SafeAreaView, StyleSheet, Dimensions} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CardViewWithImage } from "react-native-simple-card-view";
import { useEffect } from "react";
import { getLabs } from "../../../actions/action";
import { useDispatch, useSelector } from "react-redux";

const width = Dimensions.get("window").width;

const LabReserScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const Labs = useSelector((state) => state.Ressource.labs);

  useEffect(() => {
    // dispatch(setPage(1));

     console.log("in useEffect");
    dispatch(getLabs());
  }, []);


  return (
    <ScrollView style={{ backgroundColor: "#EAEAEA" }}>
        {Labs.map((lab) => (
      <CardViewWithImage
        key={lab._id}
        width={width - 20}
        source={{ uri:lab.LabPicture}}
        content={
          lab.LabDescription
        }
        title={lab.Lab}
        imageWidth={500}
        imageHeight={150}
        roundedImage={false}
        onPress={() =>
          navigation.navigate("LabTest", {
            id: lab._id,
          })}

      />
      ))}
    </ScrollView>
  );
};
export default LabReserScreen;

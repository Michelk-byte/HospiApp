import React, { useEffect, useState } from "react";
import { View, Text, Platform, Dimensions } from "react-native";

import { Button } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CardViewWithImage } from "react-native-simple-card-view";
import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

import DateTimePickerModal from "react-native-modal-datetime-picker";

const width = Dimensions.get("window").width;

const DoctorProfile = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    hideDatePicker();
  };

  const size_ = 20;

  return (
    <ScrollView>
      <View style={{ elevation: -1, zIndex: -1 }}>
        <CardViewWithImage
          width={width - 20}
          source={require("../../../assets/doctor1.jpeg")}
          ima
          content={"Dr A is the best accross town and ...."}
          title={"Dr A - Allergy"}
          imageWidth={500}
          imageHeight={400}
          roundedImage={false}
        />
      </View>
      <List.Item
        style={{
          backgroundColor: "white",
          marginLeft: 10,
          marginRight: 10,
          elevation: -1,
          zIndex: -1,
        }}
        title="Timing"
        description="Monday - Wednesday - Friday 12am -> 4pm"
        left={(props) => <List.Icon {...props} icon="clock" />}
      />
      <List.Item
        style={{
          backgroundColor: "white",
          marginLeft: 10,
          marginRight: 10,
          marginTop: 5,
          elevation: -1,
          zIndex: -1,
        }}
        title="Fee"
        description="100 000L.L/session"
        left={(props) => <List.Icon {...props} icon="cash" />}
      />

      <View
        style={{
          alignItems: "center",
          zIndex: -1,
          marginTop: 10,
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          height: 50,
        }}
      >
        <View>
          <Button title="Show Date Time Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </View>

      <View style={{ width: "100%", alignItems: "center" }}>
        <Button
          style={{ elevation: -1, zIndex: -1 }}
          icon={<FontAwesome name="stethoscope" color="#ffffff" size={size_} />}
          buttonStyle={{
            borderRadius: 10,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 15,
            marginBottom: 10,
            backgroundColor: "red",
          }}
          title="BOOK AN APPOINTMENT"
          titleStyle={{ marginLeft: 10, fontSize: 15 }}
        />
      </View>
    </ScrollView>
  );
};
export default DoctorProfile;

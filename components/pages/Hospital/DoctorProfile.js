import React, { useState } from "react";
import { View, Text, Platform, Dimensions } from "react-native";
import { Button } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CardViewWithImage } from "react-native-simple-card-view";
import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

import DateTimePicker from "@react-native-community/datetimepicker";

const width = Dimensions.get("window").width;

const DoctorProfile = ({ navigation }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const [mytime, setmytime] = useState("10:00");
  const [mydate, setmydate] = useState(new Date());

  // console.log(mytime);
  // console.log(mydate);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log(selectedDate);
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const size_ = 20;

  return (
    <ScrollView>
      <View style={{ elevation: -1 }}>
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
          <Button onPress={showDatepicker} title="Pick a date!" />
        </View>
        <View>
          <Button onPress={showTimepicker} title="Pick a time!" />
        </View>
        {show && (
          <DateTimePicker
            timeZoneOffsetInMinutes={0}
            testID="dateTimePicker"
            minuteInterval={30}
            value={date}
            mode={mode}
            // is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>

      <View style={{ width: "100%", alignItems: "center" }}>
        <Button
          style={{ elevation: -1 }}
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

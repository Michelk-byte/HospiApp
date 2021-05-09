import React, { useEffect, useState } from "react";
import { View, Text, Platform, Dimensions } from "react-native";

import { Button } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CardViewWithImage } from "react-native-simple-card-view";
import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getProfileD } from "../../../actions/action";
import { useDispatch, useSelector } from "react-redux";

const width = Dimensions.get("window").width;

const DoctorProfile = ({ route, navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const { id } = route.params;

  const Profile = useSelector((state) => state.Ressource.profile);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProfileD(id));
  }, []);

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
      {Profile.map((pro) => (
        <View key={pro._id}>
          <View style={{ elevation: -1, zIndex: -1 }}>
            <CardViewWithImage
              width={width - 20}
              source={{
                uri: `https://hospiapp-backend.herokuapp.com/static/images/${pro.DoctorPicture}`,
              }}
              content={pro.DoctorDescription}
              title={"Dr. " + pro.DoctorName + "\n" + pro.DoctorSpecialty}
              titleTextAlign="right"
              titleFontFamily="monospace"
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
            description={pro.AvailabilityDay + " " + pro.AvailabilityTime}
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
            description={pro.Fee + " 000L.L/session"}
            left={(props) => <List.Icon {...props} icon="cash" />}
          />
        </View>
      ))}

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

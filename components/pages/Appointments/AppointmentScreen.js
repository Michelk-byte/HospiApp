import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Alert,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Agenda } from "react-native-calendars";
import { getAppointments } from "../../../actions/action";
import { useDispatch, useSelector } from "react-redux";

const todayDate = new Date();

const AppointmentScreen = ({ navigation }) => {
  const [items, setItems] = useState({});

  const sid = useSelector((state) => state.Login.data.sid);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("in use effect appointments");
    dispatch(getAppointments(sid));
  }, []);

  const appointments = useSelector((state) => state.Ressource.appointments);

  //here to access the value of the appointments
  const items_ = appointments.map((app) => ({
    type: app.Type,
    Date: app.Date,
    Time: app.Time,
    name: app.Name,
    location: app.Location,
    locationName: app.locationName,
    DayLeft: app.DayLeft,
  }));

  let all_appointments = {};
  let i = 0;
  for (i = 0; i < items_.length; ++i) {
    let date = items_[i]["Date"];
    if (all_appointments[date] === undefined) {
      all_appointments[date] = [
        {
          name:
            items_[i]["type"] +
            " Appointment, " +
            items_[i]["name"] +
            " at " +
            items_[i]["Time"] +
            " " +
            items_[i]["locationName"] +
            ", YOU HAVE " +
            items_[i]["DayLeft"] +
            " DAYS LEFT",
          location: "City: " + items_[i]["location"],
        },
      ];
    } else {
      all_appointments[date].push({
        name:
          items_[i]["type"] +
          " Appointment, " +
          items_[i]["name"] +
          " at " +
          items_[i]["Time"] +
          " " +
          items_[i]["locationName"] +
          ", YOU HAVE " +
          items_[i]["DayLeft"] +
          " DAYS LEFT",
        location: "City: " + items_[i]["location"],
      });
    }
  }

  console.log(items_);
  console.log(all_appointments);

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          alert(
            item.name,
            item.Location,
            item.type,
            item.Date,
            item.Time,
            item.DayLeft,
            item.locationName
          )
        }
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EAEAEA" }}>
      <Agenda
        items={all_appointments}
        selected={todayDate}
        renderItem={renderItem}
        theme={{
          agendaDayTextColor: "black",
          agendaDayNumColor: "black",
          agendaKnobColor: "#1498D5",
          agendaTodayColor: "#1498D5",
          todayTextColor: "#1498D5",
          dayTextColor: "black",
          dotColor: "#1498D5",
          selectedDayBackgroundColor: "#1498D5",
          selectedDayTextColor: "white",
          backgroundColor: "#EAEAEA",
          calendarBackground: "#EAEAEA",
        }}
      />
    </SafeAreaView>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderWidth: 2,
    borderColor: "#1498D5",
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    marginTop: 10,
  },
});

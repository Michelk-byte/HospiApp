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

  const sid=useSelector(state=>state.Login.data.sid)
  const dispatch=useDispatch();
  useEffect(() => {
    console.log("in use effect appointments")
    dispatch(getAppointments(sid));
  }, []);

  const appointments=useSelector(state=>state.Ressource.appointments);
  
  //here to access the value of the appointments
  const items_=appointments.map((app)=>({
    type:app.Type, DateTime:app.DateTime,name:app.Name, location:app.Location,locationName:app.locationName 
  }))

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => alert(item.name, item.location,item.type,item.DateTime,item.locationName)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"#EAEAEA" }}>
      <Agenda
        items={
          {"2021-05-12": [
          { name: "item 1 - any js object", location: "Baabda" },
        ],}}
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

import * as React from "react";
import { View, Text, Image, StyleSheet,Alert } from "react-native";
import { Card, ListItem, Button, Icon, SearchBar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Fontisto";
import DropDownPicker from "react-native-dropdown-picker";

import { getDoctors, getSpecialty, getDoctSpec } from "../../../actions/action";
import { useDispatch, useSelector } from "react-redux";

const Doctor = ({ route, navigation }) => {
  const [search, setSearch] = React.useState([]);

  const { id } = route.params;


 const dispatch=useDispatch();

  React.useEffect(() => {
      dispatch(getSpecialty(id)); 
  },[]);



  React.useEffect(() => {
    if (search.length === 0) {
      dispatch(getDoctors(id));
    } else {
      const data = {
        id: id,
        spec: search,
      };
      dispatch(getDoctSpec(data));
    }
  }, [search]);

  const specialties = useSelector((state) => state.Ressource.specialties);
  const items_ = specialties.map((spec) => ({
    key: spec,
    label: spec,
    value: spec,
    icon: () => <Feather name="heartbeat-alt" size={20} color="#900" />,
  }));
  // console.log(specialties);
  const Doctors = useSelector((state) => state.Ressource.doctors);

  const size_ = 20;
  return (
    <ScrollView>
      <View
        style={{
          width: "80%",
          marginLeft: "10%",
          marginTop: "5%",
        }}
      >
        <DropDownPicker
          items={items_}
          multiple={true}
          multipleText="%d items have been selected."
          min={0}
          max={10}
          defaultValue={search}
          containerStyle={{ height: 40 }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          onChangeItem={(item) => setSearch(item)}
        />
      </View>

      {Doctors.map((doct) => (
        <Card
          key={doct._id}
          containerStyle={{
            width: "60%",
            marginLeft: "20%",
            elevation: -1,
            zIndex: -1,
          }}
        >
          <Card.Title>Dr. {doct.DoctorName}</Card.Title>
          <Card.Title>{doct.DoctorSpecialty}</Card.Title>
          <Card.Divider />
          <Card.Image
            containerStyle={{ maxheight: "1000000000000" }}
            source={{
              uri: `https://hospiapp-backend.herokuapp.com/static/images/${doct.DoctorPicture}`,
            }}
          ></Card.Image>
          <Card.Divider />
          <View style={{ width: "100%", alignItems: "center" }}>
            <Button
              icon={
                <FontAwesome name="stethoscope" color="#ffffff" size={size_} />
              }
              buttonStyle={{
                borderRadius: 10,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: "red",
              }}
              title="BOOK AN APPOINTMENT"
              onPress={() =>
                navigation.navigate("DoctorProfile", { id: doct._id })
              }
              titleStyle={{ marginLeft: 10, fontSize: 15 }}
            />
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};
export default Doctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EAEAEA",
  },
});

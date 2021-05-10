import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card, ListItem, Button, Icon, SearchBar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Fontisto";
import DropDownPicker from "react-native-dropdown-picker";
import { getTestLabs,getTestBySpec,getTestSpec } from "../../../actions/action";
import { useDispatch, useSelector } from "react-redux";

const LabTest = ({ route, navigation }) => {
  const [search, setSearch] = React.useState("All");
  
  const { id } = route.params;

  const dispatch=useDispatch();
  console.log(search);

  React.useEffect(() => {
     
    dispatch(getTestSpec(id));
  }, []);

  React.useEffect(() => {
    
    if(search==='All'){
      dispatch(getTestLabs(id));
    }else{
     const data={
       id:id,
       type:search
     }
     dispatch(getTestBySpec(data));
    }
  }, [search]);

  let specialties = useSelector((state) => state.Ressource.testSpec);
  specialties.push('All');
  specialties.sort();

  const Tests = useSelector((state) => state.Ressource.testLabs);
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
          items={[
            specialties.map(spec=>(
              {
                label: spec,
                value: spec,
                icon: () => (
                  <Feather name="heartbeat-alt" size={20} color="#900" />
                ),
              }
            ))
          ]}
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
      {Tests.map((test) => (
      <Card
      key={test._id}
        containerStyle={{
          width: "60%",
          marginLeft: "20%",
          elevation: -1,
          zIndex: -1,
        }}
      >
        <Card.Title>{test.testtype}</Card.Title>
        <Card.Divider />
        <Card.Image
          containerStyle={{ maxheight: "1000000000000" }}
          source={{
            uri: `https://hospiapp-backend.herokuapp.com/static/images/${test.testphoto}`,
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
            onPress={() => navigation.navigate("Test",{idT:test._id})}
            titleStyle={{ marginLeft: 10, fontSize: 15 }}
          />
        </View>
      </Card>
      ))}
      
    </ScrollView>
  );
};
export default LabTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

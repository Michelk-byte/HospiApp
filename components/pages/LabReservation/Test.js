import React, { useState } from "react";
import { View, Text, SafeAreaView, Dimensions } from "react-native";
import { Button } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CardViewWithImage } from "react-native-simple-card-view";
import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getTestDesc,bookTest } from "../../../actions/action";
import { useDispatch, useSelector } from "react-redux";

const width = Dimensions.get("window").width;

const Test = ({ route,navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date,setDate]=useState("");

  const { idT } = route.params;

  const sid=useSelector(state=>state.Login.data.sid)

 

  const dispatch=useDispatch();

  React.useEffect(() => {
    console.log("in effect"+idT);
    dispatch(getTestDesc(idT));
  }, []);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    console.log("A date has been picked: ", date);
    hideDatePicker();
  };

  const bookTestL = ()=>{
    const data={
      _id:sid,
      TestID:idT,
      DateTime:date
    }
    dispatch(bookTest(data));
  }
  const TestDesc=useSelector(state=>state.Ressource.testDesc);
  const size_ = 20;

  return (
    <ScrollView>
      {TestDesc.map(Desc=>(
        <View key={Desc._id}>
      <CardViewWithImage
        width={width - 20}
        source={{uri: `https://hospiapp-backend.herokuapp.com/static/images/${Desc.testphoto}`,}}
        
        content={Desc.labtestdescription}
        title={Desc.Lab+" -> "+Desc.testtype}
        imageWidth={500}
        imageHeight={400}
        roundedImage={false}
      />
      <List.Item
        style={{
          backgroundColor: "white",
          marginLeft: 10,
          marginRight: 10,
        }}
        title="Timing"
        description={Desc.testday+" "+Desc.testtime}
        left={(props) => <List.Icon {...props} icon="clock" />}
      />
      <List.Item
        style={{
          backgroundColor: "white",
          marginLeft: 10,
          marginRight: 10,
          marginTop: 5,
        }}
        title="Fee"
        description={Desc.testfee +" 000L.L/test"}
        left={(props) => <List.Icon {...props} icon="cash" />}
      />
      </View>
      ))}
      <View
        style={{
          alignItems: "center",
          elevation: -1,
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
          onPress={()=>bookTestL()}
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
export default Test;

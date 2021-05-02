import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CardViewWithImage } from "react-native-simple-card-view";
import { useEffect } from "react";
import {getHospitals} from "../../../actions/action"
import {useDispatch,useSelector} from "react-redux";

const AppointmentScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const Hospitals=useSelector(state=>state.Ressource.hospitals)
  
  useEffect(()=>{
    // dispatch(setPage(1));
    
    console.log("in useEffect");
    dispatch(getHospitals());

   },[])

  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      {
        Hospitals.map(hosp=>(
          <CardViewWithImage
          width="95%"
          source={{ uri: hosp.HospitalPhoto }}
          content={
            hosp.HospitalDescription
          }
          title={hosp.HospitalName}
          imageWidth="100%"
          imageHeight={180}
          roundedImage={false}
          onPress={() => navigation.navigate("Doctor",{
            id:hosp._id
          })}
        />
        ))
      }

     
    </ScrollView>
  );
};
export default AppointmentScreen;

import React, { Component, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Platform
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import { signUp, register } from "../../actions/action";
import {Button} from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";


export default function AccountDetails({route,navigation}){

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const todayDate = new Date();
    const [dateSelected, setDateSelected] = useState(todayDate);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        SetBirthdate(date);
        setDateSelected(date);
        hideDatePicker();
    };

    const dispatch = useDispatch();

    const [gender,setGender]=useState("Male");
    const [height,setHeight]=useState("50");
    const [weight,setWeight]=useState('10');
    const [bloodtype,setBlood]=useState('A+');
    const [pnumber, SetPnumber] = useState('');
    const [address, setAddress] = useState("");
    const [birthdate, SetBirthdate] = useState("");

    const { email,
        username,
        pass,
        vPass,
        firstname,
        lastname,}=route.params

        const handleS = () => {
            const data = {
              email: email,
              username: username,
              pnumber: pnumber,
              firstname: firstname,
              lastname:lastname,
              location:address,
              date_of_birth:birthdate,
              password:pass,
              verifypass:vPass,
              height:height,
              weight:weight,
              bloodtype:bloodtype,
              gender:gender

            };
            console.log(data);
            dispatch(signUp(data));
          };

    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/SignupBG.jpg')} style={styles.image} blurRadius={Platform.OS=="ios"? 10:1}>
                <Animatable.View animation="fadeInDownBig" style={styles.box}>
                    <Text style={styles.title}>Account Details</Text>
                    <View style={styles.input}>
                        <Text style={styles.pickers}>Birthdate</Text>
                        <TouchableOpacity onPress={showDatePicker}>
                        <Text style={styles.textInput}>{JSON.stringify(dateSelected)}</Text>
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode='date'
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Phone Number"
                            keyboardType={"phone-pad"}
                            placeholderTextColor="#003f5c"
                            onChangeText={(data)=>SetPnumber(data)}
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Address"
                            placeholderTextColor="#003f5c"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(data)=>setAddress(data)}
                        />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.pickers}>Blood Type</Text>
                        <Text style={styles.textInput}>
                        <RNPickerSelect
                            onValueChange={(value) => console.log(value)}
                            useNativeAndroidPickerStyle={false}
                            items={[
                                { label: 'A+', value: 'A+' },
                                { label: 'A-', value: 'A-' },
                                { label: 'B+', value: 'B+' },
                                { label: 'B-', value: 'B-' },
                                { label: 'AB+', value: 'AB+' },
                                { label: 'AB-', value: 'AB-' },
                                { label: 'O+', value: 'O+' },
                                { label: 'O-', value: 'O-' },
                            ]}
                        />
                        </Text>
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Height (in cm)"
                            placeholderTextColor="#003f5c"
                            keyboardType={"number-pad"}
                            onChangeText={(data)=>setHeight(data)}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Weight (in kg)"
                            placeholderTextColor="#003f5c"
                            keyboardType={"number-pad"}
                            onChangeText={(data)=>setWeight(data)}
                        />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.pickers}>Gender</Text>
                        <Text style={styles.textInput}>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                useNativeAndroidPickerStyle={false}
                                items={[
                                    { label: 'Male', value: 'Male' },
                                    { label: 'Female', value: 'Female' },
                                    { label: 'Prefer not to say', value: 'Prefer not to say' },
                                ]}
                            />
                        </Text>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={()=>navigation.navigate("SignupScreen")}>
                            <LinearGradient colors={["#d11a2a", "#800000"]} style={styles.buttonLeft}>
                                <Text style={styles.buttonText}>Back</Text>
                                <MaterialIcons name="chevron-left" color='white' size={20}/>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>handleS()}>
                            <LinearGradient colors={["#37c9fc", "#1498D5"]} style={styles.buttonRight}>
                                <Text style={styles.buttonText}>Create Account</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        resizeMode:'cover',
        justifyContent:'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    box:{
        borderWidth:2,
        borderColor:'#1498D5',
        borderRadius:15,
        backgroundColor:'white',
        height:600,
        width:350,
        alignSelf:'center',
        alignItems:'center'
    },
    title:{
        fontSize: 30,
        marginBottom: 40,
        marginTop: 10
    },
    input:{
        width:'80%',
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        paddingBottom: 2,
        marginBottom: 30,
    },
    textInput:{
        flex: 1,
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingLeft: 10,
        color: "black",
    },
    pickers:{
        color:'#003f5c',
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingLeft: 10,
        flex: 1,
    },
    buttonLeft:{
        marginTop:10,
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        marginRight:30,
    },
    buttonRight:{
        marginTop:10,
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        marginLeft:30,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        paddingRight:5
    },
    buttons:{
        flex:1,
        flexDirection:'row',
    },
    logIn:{
        marginTop:20
    },
    logText:{
        alignSelf:'center',
    },
    signIn:{
        marginTop:10,
        alignSelf:'center',
        fontSize:20,
    },
});

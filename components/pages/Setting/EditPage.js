import React, {useState} from 'react';
import {
    Platform,
    Text,
    StyleSheet,
    View,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Slider from '@react-native-community/slider';

import {editProfile} from "../../../actions/action"
import { useDispatch, useSelector } from "react-redux";

import {LinearGradient} from "expo-linear-gradient";


const EditPage = ({navigation}) => {
    const [blood, setBlood] = useState('A+');
    const [value, setValue] = useState(0);
    const [height, setHeight] = useState(50);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [firstname, setFname] = useState('');
    const [lastname, setLname] = useState("");

    const sid=useSelector(state=>state.Login.data.sid)
    const dispatch=useDispatch();


    const handleSubmit = () => {
        const data = {
            id:sid,
            email: email,
            weight: value,
            height: height,
            pnumber: phone,
            location: location,
            bloodtype: blood,
            firstname:firstname,
            lastname:lastname
        }
        dispatch(editProfile(data));
        alert("sending data: " + data);
    }

    const [image, setImage] = useState("https://bootdey.com/img/Content/avatar/avatar6.png");

    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={require('../../../assets/Editprofile.png')} style={styles.image} blurRadius={Platform.OS=="ios"? 25:2.5}>
            <View style={{alignItems: 'center'}}>
                <View>
                    <Text style={styles.title}>Edit Profile</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.box}>
                        <ImageBackground source={{uri: image}} style={styles.picture} imageStyle={{borderRadius:15}}>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                                <Icon
                                    name="camera"
                                    size={35}
                                    color="#fff"
                                    style={styles.camera}
                                />
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
                <Text style={styles.username}>@username</Text>
            </View>
            <View style={styles.fields}>
                <Icon name="person-outline" color="#1498D5" size={20} style={styles.icons}/>
                <TextInput
                    placeholder="First Name"
                    placeholderTextColor="#003f5c"
                    autoCorrect={false}

                    style={styles.textInput}
                    onChangeText={(data)=>setFname(data)}

                />
                <TextInput
                    placeholder="Last Name"
                    placeholderTextColor="#003f5c"
                    autoCorrect={false}

                    style={styles.textInput}
                    onChangeText={(data)=>setLname(data)}

                />
            </View>
            <View style={styles.fields}>
                <Icon name="mail-outline" color="gold" size={20} style={styles.icons}/>
                <TextInput
                    onChangeText={(data)=>setEmail(data)}
                    placeholder={email}
                    placeholderTextColor="#003f5c"
                    keyboardType="email-address"
                    autoCorrect={false}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.fields}>
                <Icon name="call-outline" color="green" size={20} style={styles.icons}/>
                <TextInput
                    onChangeText={(data)=>setPhone(data)}
                    placeholder={phone}
                    placeholderTextColor="#003f5c"
                    keyboardType='phone-pad'
                    autoCorrect={false}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.fields}>
                <Icon name="location-outline" color="blue" size={20} style={styles.icons}/>
                <TextInput
                    onChangeText={(data)=>setLocation(data)}
                    placeholder={location}
                    placeholderTextColor="#003f5c"
                    autoCorrect={false}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.fields}>
                <Icon name="water-outline" color="red" size={20} style={styles.icons}/>
                <Text>Blood Type: {blood}</Text>
                {/*<Picker style={styles.picker} selectedValue={blood} onValueChange={currentBlood => setBlood(currentBlood)}>*/}
                {/*    <Picker.Item label="A+" value="A+" />*/}
                {/*    <Picker.Item label="A-" value="A-" />*/}
                {/*    <Picker.Item label="B+" value="B+" />*/}
                {/*    <Picker.Item label="B-" value="B-" />*/}
                {/*    <Picker.Item label="O+" value="O+" />*/}
                {/*    <Picker.Item label="O-" value="O-" />*/}
                {/*    <Picker.Item label="AB+" value="AB+" />*/}
                {/*    <Picker.Item label="AB-" value="AB-" />*/}
                {/*</Picker>*/}
            </View>
            <View style={styles.fields}>
                <MaterialCommunityIcons name="human-male-height" color='purple' size={20} style={styles.icons}/>
                <Text>Height: {height} cm</Text>
                <Slider
                    style={styles.slider}
                    step={1}
                    minimumValue={50}
                    maximumValue={220}
                    value={height}
                    onValueChange={slideValue => setHeight(slideValue)}
                    minimumTrackTintColor="#d3d3d3"
                    maximumTrackTintColor="#d3d3d3"
                    thumbTintColor="#37c9fc"
                />
            </View>
            <View style={styles.fields}>
                <MaterialCommunityIcons name="scale-bathroom" color='brown' size={20} style={styles.icons} />
                <Text>Weight: {value} kg</Text>
                <Slider
                    style={styles.slider}
                    step={1}
                    minimumValue={0}
                    maximumValue={400}
                    value={value}
                    onValueChange={slideValue => setValue(slideValue)}
                    minimumTrackTintColor="#d3d3d3"
                    maximumTrackTintColor="#d3d3d3"
                    thumbTintColor="#37c9fc"
                />
            </View>
            <View style={{marginTop:5}}>
                <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                    <LinearGradient colors={["#37c9fc", "#1498D5"]} style={styles.button}>
                        <Text style={[styles.buttonText, { color: "white" }]}>Save Changes</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:5}}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfilePage')}>
                    <LinearGradient colors={["#d11a2a", "#800000"]} style={styles.button}>
                        <Text style={[styles.buttonText, { color: "white" }]}>Cancel</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image:{
        flex:1,
        resizeMode:'cover',
    },
    title:{
        color:'black',
        alignSelf: 'center',
        marginTop: 60,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom:30,
    },
    box:{
        marginTop: 10,
        height: 100,
        width: 100,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    picture:{
        height: 100,
        width: 100,
    },
    camera:{
        opacity: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
    },
    username:{
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom:30
    },
    fields: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        marginLeft:5,
    },
    icons:{
        marginRight:8,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: 'black',
    },
    slider:{
        marginLeft:5,
        width:'60%'
    },
    button: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 5,
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default EditPage;

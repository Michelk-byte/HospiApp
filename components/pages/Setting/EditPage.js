import React, {useState} from 'react';
import {
    Platform,
    Text,
    StyleSheet,
    View,
    TextInput,
    Button,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { Picker } from '@react-native-picker/picker'
import Icon from "react-native-vector-icons/Ionicons";
import Slider from '@react-native-community/slider';

const EditPage = ({navigation}) => {
    const [blood, setBlood] = useState('A+');
    const [value, setValue] = useState(0);
    const [height, setHeight] = useState(50);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        const data = {
            email: email,
            Password: password,
            weight: value,
            height: height,
            phone: phone,
            location: location,
            blood: blood
        }
        alert("sending data: " + data.email)
    }

    const [image, setImage] = useState("https://bootdey.com/img/Content/avatar/avatar6.png");

    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity>
                    <View
                        style={{
                            marginTop: 10,
                            height: 100,
                            width: 100,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <ImageBackground
                            source={{
                                uri: image,
                            }}
                            style={{height: 100, width: 100}}
                            imageStyle={{borderRadius: 15}}>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Icon
                                    name="camera"
                                    size={35}
                                    color="#fff"
                                    style={{
                                        opacity: 0.7,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderWidth: 1,
                                        borderColor: '#fff',
                                        borderRadius: 10,
                                    }}
                                />
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
                <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>@username</Text>
            </View>
            <View style={styles.action}>
                <Icon name="person-outline" color="black" size={20}/>
                <TextInput
                    placeholder="First Name"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={[
                        styles.textInput,
                        {
                            color: 'black',
                        },
                    ]}
                />
                <TextInput
                    placeholder="Last Name"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={[
                        styles.textInput,
                        {
                            color: 'black',
                        },
                    ]}
                />
            </View>
            <View style={styles.action}>
                <Icon name="call-outline" color="black" size={20}/>
                <TextInput
                    onChangeText={(data)=>setPhone(data)}
                    placeholder={phone}
                    placeholderTextColor="#666666"
                    keyboardType="number-pad"
                    autoCorrect={false}
                    style={[
                        styles.textInput,
                        {
                            color: 'black',
                        },
                    ]}
                />
            </View>
            <View style={styles.action}>
                <Icon name="mail-outline" color="black" size={20}/>
                <TextInput
                    onChangeText={(data)=>setEmail(data)}
                    placeholder={email}
                    placeholderTextColor="#666666"
                    keyboardType="email-address"
                    autoCorrect={false}
                    style={[
                        styles.textInput,
                        {
                            color: 'black',
                        },
                    ]}
                />
            </View>
            <View style={styles.action}>
                <Icon name="location-outline" color="black" size={20}/>
                <TextInput
                    onChangeText={(data)=>setLocation(data)}
                    placeholder={location}
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={[
                        styles.textInput,
                        {
                            color: 'black',
                        },
                    ]}
                />
            </View>
            <View style={styles.action}>
                <Icon name="water-outline" color="red" size={20}/>
                <Text>Blood Type: {blood}</Text>
                <Picker style={styles.picker} selectedValue={blood} onValueChange={currentBlood => setBlood(currentBlood)}>
                    <Picker.Item label="A+" value="A+" />
                    <Picker.Item label="A-" value="A-" />
                    <Picker.Item label="B+" value="B+" />
                    <Picker.Item label="B-" value="B-" />
                    <Picker.Item label="O+" value="O+" />
                    <Picker.Item label="O-" value="O-" />
                    <Picker.Item label="AB+" value="AB+" />
                    <Picker.Item label="AB-" value="AB-" />
                </Picker>
            </View>
            <View style={styles.action}>
                <Icon name="body-outline" color="black" size={20}/>
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
            <View style={styles.action}>
                <Icon name= "speedometer-outline" color="black" size={20} />
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
            <TouchableOpacity style={styles.submitButton} onPress={() => handleSubmit()}>
                <Text style={styles.panelButtonTitle}>Save Changes</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    submitButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#1498D5',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#1498D5',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    picker:{
        marginLeft:30
    },
    slider:{
        marginLeft:5,
        marginTop: 3,
        width:'65%'
    }
});

export default EditPage;

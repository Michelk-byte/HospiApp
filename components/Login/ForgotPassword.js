import React,{useState} from 'react'
import {Text, View, StyleSheet, Platform, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native'
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import {setAlertDr,forgotPass} from "../../actions/action"
import { useDispatch, useSelector } from "react-redux";

export default function ForgotPassword({navigation}) {
    const [email,setEmail]=useState("");

    const dispatch=useDispatch();

    const handleS=()=>{
        const data={
            email:email
        }
        dispatch(forgotPass(data));
        setEmail("");
    }

    const msg = useSelector((state) => state.Ressource.DrmsgBooked);
  const open = useSelector((state) => state.Ressource.alertDr);
  
  

  if(open===true){

    alert(msg);
    dispatch(setAlertDr(false));
  }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/ForgotpassBG.jpg')} style={styles.image}
                             blurRadius={Platform.OS == "ios" ? 5 : 1}>
                <Image source={require('../../assets/forgot.png')} style={styles.picture}/>
                <Animatable.View animation="fadeInUpBig" style={styles.form}>
                    <Text style={styles.title}>Forgot Password</Text>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Enter your account's email address and we will send you</Text>
                        <Text style={styles.headerText}>a link to reset your password</Text>
                    </View>
                    <View style={styles.input}>
                        <Icon name={'mail-outline'} color="black" size={20} style={styles.icon}/>
                        <View style={styles.line}>
                        <TextInput
                            style={styles.inputText}
                            placeholder='Your email address'
                            placeholderTextColor="#003f5c"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(data)=>setEmail(data)}
                            value={email}
                        />
                        </View>
                    </View>
                    <View  
                    style={styles.buttons}>
                        <TouchableOpacity onPress={()=>handleS()}>
                            <LinearGradient
                                colors={["#1567cd", "#1498D5"]}
                                style={styles.buttonSend}
                            >
                                <Text style={styles.buttonText}>Send Request</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                            <LinearGradient
                                colors={["#d11a2a", "#800000"]}
                                style={styles.buttonCancel}
                            >
                                <Text style={styles.buttonText}>Cancel</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column'
    },
    image:{
        flex:1,
        resizeMode:'cover',
    },
    picture:{
        width:300,
        height:250,
        alignSelf:'center',
        marginTop:-10,
        marginBottom:-220
    },
    form:{
        borderWidth:2,
        borderColor:'#1567cd',
        borderRadius:15,
        backgroundColor:'white',
        height:350,
        width:350,
        alignSelf:'center',
        alignItems:'center',
        marginTop:200,
    },
    title:{
        alignSelf: 'center',
        marginTop:30,
        marginBottom:10,
        fontSize:30,
        color:'#1567cd'
    },
    header:{
        alignSelf: 'center',
        justifyContent:'center',
        marginBottom:30,
    },
    headerText:{
        alignSelf:'center',
        fontSize:11,
        color:'gray'
    },
    input:{
        flexDirection: 'row',
        width:300,
        height:40,
        marginBottom:40
    },
    icon:{
        paddingLeft:10,
        marginRight:20,
        paddingTop:18
    },
    line:{
        borderBottomWidth:1,
        borderColor:'gray',
        flex:1,
        flexDirection: 'row',
        marginRight:20
    },
    inputText:{
        flex: 1,
        color: 'black',
        paddingTop:18
    },
    buttons:{
        flex:1,
        flexDirection:'column',
        alignItems: 'center'
    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        paddingTop:2
    },
    buttonSend:{
        borderRadius: 15,
        width:160,
        height:30,
        alignItems:'center',
        marginBottom:30
    },
    buttonCancel:{
        borderRadius: 15,
        width:80,
        height:30,
        alignItems:'center',
    },
});

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

export default function AccountDetails({navigation}){
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/SignupBG.jpg')} style={styles.image} blurRadius={Platform.OS=="ios"? 10:1}>
                <Animatable.View animation="fadeInDownBig" style={styles.box}>
                    <Text style={styles.title}>Additional Details</Text>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Gender"
                            placeholderTextColor="#003f5c"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Height (in cm)"
                            placeholderTextColor="#003f5c"
                            keyboardType={"number-pad"}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Weight (in kg)"
                            placeholderTextColor="#003f5c"
                            keyboardType={"number-pad"}
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Blood Type"
                            placeholderTextColor="#003f5c"
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor="#003f5c"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Verify Password"
                            secureTextEntry={true}
                            placeholderTextColor="#003f5c"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>navigation.navigate("SignupScreen")}>
                            <LinearGradient colors={["#d11a2a", "#800000"]} style={styles.button}>
                                <Text style={styles.buttonText}>Back</Text>
                                <MaterialIcons name="chevron-left" color='white' size={20}/>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
                <View style={styles.logIn}>
                    <Text style={styles.logText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                        <Text style={styles.signIn}>Sign in</Text>
                    </TouchableOpacity>
                </View>
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
        height:550,
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
    button:{
        marginTop:10,
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        paddingRight:5
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

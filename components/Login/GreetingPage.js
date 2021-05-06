import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

export default function GreetingPage({navigation}) {
    return (
        <View>
            <Image
                source={require("../../assets/logo.png")}
            />
            <TouchableOpacity>
                <Text
                    onPress={() => navigation.navigate("LoginScreen")}
                >
                    Get Started
                </Text>
            </TouchableOpacity>
        </View>
    );
};


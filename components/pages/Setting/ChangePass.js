import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const ChangePasword = ({navigation}) => {
  const [oldPass, setOldPass] = useState('');
  const [newPas, setNewPass] = useState('');
  const [Verify, setVerify] = useState('');


  const handleSubmit=()=>{
    const data={
      oldPass:oldPass,
      newPas:newPas,
      Verify:Verify
    }
    alert("sending data: "+data.email)
  }

  return (
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>Please enter your new password below</Text>
        </View>
        <View style={styles.action}>
          <TextInput
              onChangeText={(data)=>setOldPass(data)}
              placeholder="Old Password"
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
          <TextInput
              secureTextEntry={true}
              onChangeText={(data)=>setNewPass(data)}
              placeholder="New Password"
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
          <TextInput
              onChangeText={(data)=>setVerify(data)}
              placeholder="Verify Password"
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
        <View style={{marginTop:20}}>
          <TouchableOpacity style={styles.submitButton} onPress={() => handleSubmit()}>
            <Text style={styles.panelButtonTitle}>Submit</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  submitButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#1498D5',
    alignItems: 'center',
    marginTop: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ChangePasword;

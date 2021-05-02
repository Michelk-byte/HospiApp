import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput, Button} from 'react-native';


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
      <Text style={styles.formLabel}> Change Password </Text>
      <View>
        <TextInput placeholder="Old Password" style={styles.inputStyle} onChangeText={(data)=>setOldPass(data)}  />
       
        <TextInput
          secureTextEntry={true}
          placeholder="New password"
          style={styles.inputStyle}
          onChangeText={(data)=>setNewPass(data)}
        />
         <TextInput placeholder="Verify Password" style={styles.inputStyle} onChangeText={(data)=>setVerify(data)} />

     
        <View style={{marginTop:20}}>
        <Button
          
          title="Submit"
          color="blue"
          onPress={() => handleSubmit()}
        >
          <Text>SUBMIT</Text>
          </Button> 
        </View>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DC143C',
    alignItems: 'center',
    justifyContent: 'center',
  },

  formLabel: {
    fontSize: 20,
    color: '#fff',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#b9e4c9',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default ChangePasword;
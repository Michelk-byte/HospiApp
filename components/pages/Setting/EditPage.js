import React, { useState } from "react";
import {
  Platform,
  Text,
  StyleSheet,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  setAlertDr,
  editProfile,
  getCredentials,
} from "../../../actions/action";
import { useDispatch, useSelector } from "react-redux";
import RNPickerSelect from "react-native-picker-select";
import { LinearGradient } from "expo-linear-gradient";

const EditPage = ({ navigation }) => {
  const cred = useSelector((state) => state.Ressource.credentials);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [blood, setBlood] = useState(cred.bloodtype);
  const [value, setValue] = useState(cred.weight);
  const [height, setHeight] = useState(cred.height);
  const [email, setEmail] = useState(cred.email);
  const [phone, setPhone] = useState(cred.pnumber);
  const [location, setLocation] = useState(cred.location);
  const [firstname, setFname] = useState(cred.firstname);
  const [lastname, setLname] = useState(cred.lastname);
  const [birthDate, setBirthdate] = useState(cred.date_of_birth);
  const [gender, setGender] = useState(cred.gender);

  const [dateSelected, setDateSelected] = useState(birthDate);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setBirthdate(date);
    date = new Date(date);
    let month = date.getMonth() + 1
    date = month + "/" + date.getDate() + "/" + date.getFullYear();
    setDateSelected(date);
    hideDatePicker();
  };

  const sid = useSelector((state) => state.Login.data.sid);
  const dispatch = useDispatch();

  const clear = () => {
    setBlood("");
    setEmail("");
    setFname("");
    setLname("");
    setHeight(50);
    setLocation("");
    setValue(0);
    setPhone("");
    setBirthdate("");
    setGender("Male");
  };

  const msg = useSelector((state) => state.Ressource.DrmsgBooked);
  const open = useSelector((state) => state.Ressource.alertDr);

  if (open === true) {
    alert(msg);
    dispatch(setAlertDr(false));
    dispatch(getCredentials(sid));
  }

  const handleSubmit = () => {
    const data = {
      id: sid,
      email: email,
      weight: value,
      height: height,
      pnumber: phone,
      location: location,
      bloodtype: blood,
      firstname: firstname,
      lastname: lastname,
      date_of_birth: birthDate,
      gender: gender,
    };
    dispatch(editProfile(data));
    //clear();
  };

  const [image, setImage] = useState(
    "https://bootdey.com/img/Content/avatar/avatar6.png"
  );

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("../../../assets/Editprofile.png")}
        style={styles.image}
        blurRadius={Platform.OS == "ios" ? 25 : 2.5}
      >
        <View style={styles.info}>
          <View>
            <Text style={styles.title}>Edit Profile</Text>
          </View>
          <Text style={styles.username}>@username</Text>
          <View style={styles.user}>
            <TouchableOpacity>
              <View style={styles.box}>
                <ImageBackground
                  source={{ uri: image }}
                  style={styles.picture}
                  imageStyle={{ borderRadius: 15 }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
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
            <View style={styles.name}>
              <View style={styles.fields}>
                <View style={styles.line}>
                  <TextInput
                    placeholder="First Name"
                    placeholderTextColor="#003f5c"
                    autoCorrect={false}
                    style={styles.nameInput}
                    onChangeText={(data) => setFname(data)}
                    value={firstname}
                  />
                </View>
              </View>
              <View style={styles.fields}>
                <View style={styles.line}>
                  <TextInput
                    placeholder="Last Name"
                    placeholderTextColor="#003f5c"
                    autoCorrect={false}
                    style={styles.nameInput}
                    onChangeText={(data) => setLname(data)}
                    value={lastname}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.form}>
          <View style={styles.fields}>
            <Icon
              name="mail-outline"
              color="gold"
              size={25}
              style={styles.icons}
            />
            <View style={styles.line}>
              <TextInput
                onChangeText={(data) => setEmail(data)}
                placeholder={email}
                placeholderTextColor="#003f5c"
                keyboardType="email-address"
                autoCorrect={false}
                style={styles.textInput}
                value={email}
              />
            </View>
          </View>
          <View style={styles.fields}>
            <Icon
              name="call-outline"
              color="green"
              size={25}
              style={styles.icons}
            />
            <View style={styles.line}>
              <TextInput
                onChangeText={(data) => setPhone(data)}
                placeholder={"+961 " + phone}
                placeholderTextColor="#003f5c"
                keyboardType="phone-pad"
                autoCorrect={false}
                style={styles.textInput}
                value={phone}
              />
            </View>
          </View>
          <View style={styles.fields}>
            <Icon
              name="location-outline"
              color="blue"
              size={25}
              style={styles.icons}
            />
            <View style={styles.line}>
              <TextInput
                onChangeText={(data) => setLocation(data)}
                placeholder={location}
                placeholderTextColor="#003f5c"
                autoCorrect={false}
                style={styles.textInput}
                value={location}
              />
            </View>
          </View>
          <View style={styles.fields}>
            <View style={styles.dropDown}>
              <Icon
                name="male-female-outline"
                color="black"
                size={25}
                style={styles.icons}
              />
              <Text>Select Gender:</Text>
              <View style={styles.picker}>
                <RNPickerSelect
                  onValueChange={(value) => setGender(value)}
                  useNativeAndroidPickerStyle={false}
                  items={[
                    { label: "Male", value: "Male" },
                    { label: "Female", value: "Female" },
                    { label: "Prefer not to say", value: "Prefer not to say" },
                  ]}
                  value={gender}
                />
              </View>
            </View>
          </View>
          <View style={styles.fields}>
            <MaterialCommunityIcons
              name="cake"
              color="pink"
              size={25}
              style={styles.icons}
            />
            <Text>Birthdate:</Text>
            <View style={styles.datePicker}>
              <TouchableOpacity onPress={showDatePicker}>
                <Text style={[styles.buttonText, { color: "black" }]}>
                  {dateSelected}
                </Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
          </View>

          <View style={styles.fields}>
            <View style={styles.dropDown}>
              <Icon
                name="water-outline"
                color="red"
                size={25}
                style={styles.icons}
              />
              <Text>Select Blood Type:</Text>
              <View style={styles.picker}>
                <RNPickerSelect
                  onValueChange={(value) => setBlood(value)}
                  useNativeAndroidPickerStyle={false}
                  items={[
                    { label: "A+", value: "A+" },
                    { label: "A-", value: "A-" },
                    { label: "B+", value: "B+" },
                    { label: "B-", value: "B-" },
                    { label: "AB+", value: "AB+" },
                    { label: "AB-", value: "AB-" },
                    { label: "O+", value: "O+" },
                    { label: "O-", value: "O-" },
                  ]}
                  value={blood}
                />
              </View>
            </View>
          </View>
          <View style={styles.fields}>
            <MaterialCommunityIcons
              name="human-male-height"
              color="purple"
              size={25}
              style={styles.icons}
            />
            <View style={styles.line}>
              <TextInput
                placeholder={height + " cm"}
                placeholderTextColor="black"
                style={styles.textInput}
                keyboardType={"number-pad"}
                onChangeText={(data) => setHeight(data)}
                value={height}
              />
            </View>
          </View>
          <View style={styles.fields}>
            <MaterialCommunityIcons
              name="scale-bathroom"
              color="brown"
              size={25}
              style={styles.icons}
            />
            <View style={styles.line}>
              <TextInput
                placeholder={value + " kg"}
                placeholderTextColor="black"
                style={styles.textInput}
                keyboardType={"number-pad"}
                onChangeText={(data) => setValue(data)}
                value={value}
              />
            </View>
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSubmit()}
          >
            <LinearGradient
              colors={["#37c9fc", "#1498D5"]}
              style={styles.button}
            >
              <Text style={[styles.buttonText, { color: "white" }]}>
                Save Changes
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 5 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ProfilePage")}
          >
            <LinearGradient
              colors={["#d11a2a", "#800000"]}
              style={styles.button}
            >
              <Text style={[styles.buttonText, { color: "white" }]}>
                Cancel
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    marginBottom: -30,
  },
  user: {
    flex: 1,
    flexDirection: "row",
  },
  name: {
    marginLeft: 60,
    flex: 1,
    alignSelf: "flex-end",
  },
  form: {
    borderWidth: 2,
    borderColor: "#1498D5",
    borderRadius: 15,
    backgroundColor: "white",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  title: {
    color: "black",
    alignSelf: "center",
    marginTop: 60,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },
  box: {
    marginTop: 10,
    height: 100,
    width: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 60,
  },
  picture: {
    height: 100,
    width: 100,
  },
  camera: {
    opacity: 0.7,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
  },
  username: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 30,
  },
  fields: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 5,
  },
  picker: {
    marginLeft: 10,
  },
  dropDown: {
    flex: 1,
    flexDirection: "row",
  },
  icons: {
    marginRight: 8,
  },
  nameInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "black",
    fontSize: 20,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "black",
  },
  birthDate: {
    marginLeft: 20,
    borderRadius: 10,
    alignItems: "center",
    padding: 5,
  },
  datePicker: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 10,
  },
  line: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginRight: 30,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    fontSize: 15,
  },
});

export default EditPage;

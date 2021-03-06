import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import OtherIcon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut } from "../../../actions/action";
import { ScrollView } from "react-native-gesture-handler";
import * as Updates from "expo-updates";
import { getCredentials } from "../../../actions/action";

export default function Profile({ navigation }) {
  const dispatch = useDispatch();

  function symbole(gender) {
    if (gender === "Male") {
      return <OtherIcon name="male-sharp" color="black" size={20} />;
    }
    if (gender === "Female") {
      return <OtherIcon name="female-sharp" color="black" size={20} />;
    }
    return <OtherIcon name="paw-sharp" color="black" size={20} />;
  }

  const sid = useSelector((state) => state.Login.data.sid);
  useEffect(() => {
    dispatch(getCredentials(sid));
  }, []);

  

  const cred = useSelector((state) => state.Ressource.credentials);

  function signOut() {
    dispatch(loggedOut());
    console.log("SIGN OUT");
    Updates.reloadAsync();
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >

              {cred.firstname +" "+cred.lastname} {symbole(cred.gender)}

            </Title>
            <Caption style={styles.caption}>{"@" + cred.username}</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>{cred.email}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            {cred.pnumber}
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            {cred.location}
          </Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: "#dddddd",
              borderRightWidth: 1,
            },
          ]}
        >
          <Title>{cred.date_of_birth}</Title>
          <Caption>Birthdate</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>{cred.bloodtype}</Title>
          <Caption>Blood Type</Caption>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: "#dddddd",
              borderRightWidth: 1,
            },
          ]}
        >
          <Title>{cred.height + " cm"}</Title>
          <Caption>Height</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>{cred.weight + " kg"} </Title>
          <Caption>Weight</Caption>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => navigation.navigate("EditPage")}>
          <View style={styles.menuItem}>
            <Icon name="account-edit" color="#1498D5" size={25} />
            <Text style={styles.menuItemText}>Edit Profile</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate("ChangePass")}>
          <View style={styles.menuItem}>
            <Icon name="lock-open-outline" color="#1498D5" size={25} />
            <Text style={styles.menuItemText}>Change Password</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => signOut()}>
          <View style={styles.menuItem}>
            <OtherIcon name="log-out-outline" color="#1498D5" size={25} />
            <Text style={styles.menuItemText}>Log Out</Text>
          </View>
        </TouchableRipple>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#EAEAEA'
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "black",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },

  header: {
    backgroundColor: "white",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "white",
    height: 500,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "black",
  },
});

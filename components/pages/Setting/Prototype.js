import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut } from "../../../actions/action";
import { Login } from "../../Login/LoginPage";
export default function Profile({ navigation }) {
  const dispatch = useDispatch();

  function signOut() {
    const data = {
      id: 1,
    };
    dispatch(loggedOut(data));
    console.log("SIGN OUT");
    return <Login />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
            }}
          />

          <Text style={styles.name}>jean yves </Text>
          <Text style={styles.userInfo}>jean_yves@hotmail.com</Text>
          <Text style={styles.userInfo}>Dekweneh </Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/color/70/000000/facebook-like.png",
              }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text
              style={styles.info}
              onPress={() => navigation.navigate("Edit")}
            >
              Edit Profile
            </Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Image
              style={styles.icon}
              source={{
                uri:
                  "https://img.icons8.com/color/70/000000/administrator-male.png",
              }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text
              style={styles.info}
              onPress={() => navigation.navigate("ChangePass")}
            >
              Change Password
            </Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/color/70/000000/filled-like.png",
              }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info} onPress={() => signOut()}>
              LogOut
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
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
    color: "#778899",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "#778899",
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
    color: "#FFFFFF",
  },
});

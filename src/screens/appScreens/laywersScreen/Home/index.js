import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "./styles";
import { Header } from "react-native-elements";
import { useDispatch } from "react-redux";
import { getChatList } from "src/redux/actions/chatAction.js";
import auth from "@react-native-firebase/auth";
import { Colors } from "src/Utils";
const Home = () => {
  let navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Header
        barStyle="dark-content"
        leftComponent={
          <TouchableOpacity
            activeOpacity={1}
            // style={{ paddingRight: 50 }}
            onPress={() => navigation.openDrawer()}
          >
            <Icon name={"menu"} size={33} color={"#000"} />
          </TouchableOpacity>
        }
        centerComponent={
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "black",
                fontSize: 22,
                fontWeight: "bold",
                marginRight: 5,
              }}
            >
              Legal
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 22,
                fontWeight: "bold",
                marginRight: 5,
              }}
            >
              Way
            </Text>
          </View>
        }
        containerStyle={{
          margin: 0,
          padding: 0,
          backgroundColor: Colors.lightG,
          justifyContent: "space-around",
          borderBottomColor: Colors.appGrey,
          borderBottomWidth: 0.8,
        }}
        statusBarProps={{
          backgroundColor: Colors.lightG,
          barStyle: "dark-content",
        }}
        rightComponent={
          <TouchableOpacity
            onPress={() => navigation.navigate("LawyerProfile")}
          >
            <Icon name={"user"} color={"#000"} size={33} />
          </TouchableOpacity>
        }
      />

      <TouchableOpacity
        style={[styles.buttonStyle, { marginTop: 120 }]}
        onPress={() => {
          navigation.navigate("EditProfile");
        }}
      >
        <Icon
          name={"edit"}
          size={20}
          color={"#FFF"}
          style={styles.buttonIcon}
        />
        <Text style={styles.textStyle}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate("ClientResponse");
        }}
      >
        {/* <Icon
          name={"edit"}
          size={20}
          color={"#FFF"}
          style={styles.buttonIcon}
        /> */}
        <Text style={styles.textStyle}>Client Response</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          dispatch(getChatList(auth().currentUser.uid));
          navigation.navigate("LChat");
        }}
      >
        <Icon
          name={"inbox"}
          size={20}
          color={"#FFF"}
          style={styles.buttonIcon}
        />
        <Text style={styles.textStyle}>Inbox</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

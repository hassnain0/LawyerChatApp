import { useNavigation } from "@react-navigation/native";
import React, { Fragment } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Colors } from "src/Utils";
import styles from "./styles";
import { Header } from "react-native-elements";
import { getChatList } from "src/redux/actions/chatAction.js";
import { useDispatch } from "react-redux";
import auth from "@react-native-firebase/auth";
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
      />
      <TouchableOpacity
        style={[styles.buttonStyle, { marginTop: 120 }]}
        onPress={() => navigation.navigate("FindLawyer")}
      >
        <Icon
          name={"edit"}
          size={20}
          color={"#FFF"}
          style={styles.buttonIcon}
        />
        <Text style={styles.textStyle}>Find a lawyer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Legal")}
      >
        {/* <Icon
          name={"edit"}
          size={20}
          color={"#FFF"}
          style={styles.buttonIcon}
        /> */}
        <Text style={styles.textStyle}>Legal Advice</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          dispatch(getChatList(auth().currentUser.uid));
          navigation.navigate("ChatList");
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

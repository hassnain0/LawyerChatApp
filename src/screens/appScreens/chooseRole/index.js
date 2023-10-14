import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, Button, Alert } from "react-native";
import { Header } from "react-native-elements";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
import Button2 from "src/components/Button2";
import firestore from "@react-native-firebase/firestore";
import { useSelector } from "react-redux";
const WelcomeScreen = (props) => {
  const { titleStyle, containerStyle } = styles;
  const user = useSelector((state) => state.app.user);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Header
        centerComponent={
          <Text style={titleStyle}>
            Legal <Text style={{ color: "#FFF" }}>Way</Text>
          </Text>
        }
        containerStyle={{
          margin: 0,
          padding: 0,
          backgroundColor: "#E5E5E5",
          justifyContent: "space-around",
          borderBottomColor: "#E5E5E5",
        }}
        statusBarProps={{
          backgroundColor: "#E5E5E5",
          barStyle: "dark-content",
        }}
      />
      <View style={containerStyle}>
        <Button2
          onPress={() => {
            firestore()
              .collection("Users")
              .doc(user.uid)
              .update({ role: "user" });
          }}
        >
          User
        </Button2>

        <View style={{ bottom: Height * 0.11 }}>
          <Button2
            onPress={() => {
              firestore()
                .collection("Users")
                .doc(user.uid)
                .update({ role: "lawyer" });
            }}
          >
            Lawyer
          </Button2>
        </View>
      </View>
    </View>
  );
};

const styles = {
  titleStyle: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  containerStyle: {
    alignItems: "center",
    justifyContent: "space-around",

    flex: 1,
  },

  header: {},
};

export default WelcomeScreen;

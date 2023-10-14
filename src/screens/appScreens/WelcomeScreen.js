import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, Button, Alert } from "react-native";
import firestore from "@react-native-firebase/firestore";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
import Button2 from "../../components/Button2";
import { useSelector } from "react-redux";

const WelcomeScreen = (props) => {
  const { titleStyle, containerStyle } = styles;
  const user = useSelector((state) => state.app.user);
  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>Select Your Lawyer</Text>

      <Button2
        onPress={() => {
          firestore()
            .collection("Users")
            .doc(user.uid)
            .update({ role: "lawyer" });
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
  );
};

const styles = {
  titleStyle: {
    fontSize: 22,
    color: "rgb(220,50,50)",
    fontWeight: "bold",
  },
  containerStyle: {
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "orange",
    flex: 1,
  },
};

export default WelcomeScreen;

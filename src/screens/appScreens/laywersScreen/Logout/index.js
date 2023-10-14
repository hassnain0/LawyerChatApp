import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import auth from "@react-native-firebase/auth";
import { StatusBar } from "react-native";
import { TouchableOpacity } from "react-native";

class Logout extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFF",
        }}
      >
        <StatusBar barStyle={"dark-content"} backgroundColor={"#FFF"} />
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            height: 50,
            width: "80%",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => auth().signOut()}
        >
          <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "bold" }}>
            Logout
          </Text>
        </TouchableOpacity>
        {/* <Button title="Logout" onPress={() => auth().signOut()} /> */}
      </View>
    );
  }
}

export default Logout;

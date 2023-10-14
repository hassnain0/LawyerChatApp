import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import auth from "@react-native-firebase/auth";

class Logout extends Component {
  render() {
    return (
      <View>
        <Button title="Logout" onPress={() => auth().signOut()} />
      </View>
    );
  }
}

export default Logout;

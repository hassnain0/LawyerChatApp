import React, { Component } from "react";
import { View, Text } from "react-native";

class LawyerNavigate extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>
          You have been registered successfully as a Lawyer!
        </Text>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "bold",
  },
};

export default LawyerNavigate;

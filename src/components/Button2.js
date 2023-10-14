import React from "react";
import { Dimensions, Text, TouchableHighlight, View } from "react-native";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const Button = ({ onPress, children, value }) => {
  return (
    <TouchableHighlight
      // disabled={value}
      underlayColor="null"
      onPress={onPress}
      style={styles.buttonStyle}
    >
      <View>
        <Text style={styles.textStyle}>{children}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = {
  textStyle: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },

  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 20,
    // borderWidth: 1,
    borderColor: "#379F00",
    height: 50,
    width: Width * 0.8,
    margin: 0.05 * Height,
  },
};

export default Button;

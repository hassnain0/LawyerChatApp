import React from "react";
import { Dimensions, Text, TouchableHighlight, View } from "react-native";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const Button = ({ onPress, children, value, icon }) => {
  return (
    <TouchableHighlight
      // disabled={value}
      underlayColor="null"
      onPress={onPress}
      style={styles.buttonStyle}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {icon}
        <Text style={styles.textStyle}>{children}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = {
  textStyle: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },

  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(0,0,0)",
    borderRadius: 5,
    // borderWidth: 1,
    borderColor: "#379F00",
    height: 0.06 * Height,
    width: Width * 0.75,
    margin: 0.05 * Height,
  },
};

export default Button;
